const functions = require("firebase-functions");
const { Storage } = require("@google-cloud/storage");
const fs = require("fs-extra");
const { tmpdir } = require("os");
const storage = new Storage();
const { join, dirname, basename, extname } = require("path");
const sharp = require("sharp");

exports.optimizeImages = functions.storage
  .object()
  .onFinalize(async (object) => {
    const fileBucket = object.bucket;
    const filePath = object.name;
    const contentType = object.contentType;

    if (fileBucket && filePath && contentType) {
      // Exit if this is triggered on a file that is not an image.
      if (!contentType.startsWith("image/")) {
        console.log("Si es imagen");
        return true;
      }

      // Get the file name.
      const extendName = extname(filePath);
      const fileName = basename(filePath, extendName);
      const fileFullName = `${fileName}${extendName}`;
      if (fileName.includes("_thumb_")) {
        //pregunta si tiene thumb para no aplicar cloud function
        console.log("imagen optimizada");
        return true;
      }
      // Download file from bucket.
      const bucket = storage.bucket(fileBucket);
      const file = bucket.file(filePath);

      const [data] = await file.getMetadata();
      if (data.metadata && data.metadata.optimized) {
        console.log("la imagen ya ha sido optimizada");
        return true;
      }

      const workingDir = join(tmpdir(), "thumbs"); //carpeta temporal thumbs
      const destination = join(workingDir, fileFullName); //destino del archivo

      await fs.ensureDir(workingDir); //asegurarse que existe la carpeta
      await file.download({ destination }); //descargar el archivo
      const bucketDir = dirname(filePath); //y guardamos la referencia del bucketDir

      const sizes = [480, 640, 1200]; //dimensión de las imagenes optimizadas
      const resizesPromises = sizes.map((size) => {
        const thumbName = `${fileName}_thumb_${size}${extendName}`; //nombre de imagenes optimizadas
        const thumbPath = join(workingDir, thumbName);
        return sharp(destination).resize(size).toFile(thumbPath);
      });
      await Promise.all(resizesPromises);
      console.log("Se genero 3 imagenes optimizadas!");

      const files = await fs.readdir(workingDir);
      console.log(files);

      const uploadPromises = files.map((file) => {
        const path = join(workingDir, file);
        return bucket.upload(path, {
          //subiremos las imagenes
          destination: join(bucketDir, basename(file)),
          metadata: {
            //agregamos metadata como referencia que la imagen ya esta optimizada
            metadata: {
              optimized: true,
            },
          },
        });
      });
      await Promise.all(uploadPromises);
      console.log("imagenes subidas exitosamente!");

      return fs.remove(workingDir); //despues de subr eliminamos la carpeta
    } else {
      console.log("incomplete data");
      return false;
    }
  });
