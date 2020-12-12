# Optimización de imágenes

La finalidad de este código es en optimizar una imagen en el storage, para ello utilizamos una cloud function de firebase,
## Explicación
Cuando subamos una imagen al storage, nuestra cloud function hará el proceso de optimizar la imagen en 3 imagenes siempre y cuando sea subido una imagen. 
## Explicación del código
Cuando se conecte al storage y finaliza el cargado, entonces va correr el proceso
```
functions.storage.object().onFinalize
```
Para comprobar que no sean undefined: 
```
if (fileBucket && filePath && contentType)
```


Verifica que el archivo sea una imagen: 
```
if (!contentType.startsWith("image/"))
```

Al momento de subir las imágenes optimizadas, podemos ver que la cloud function tendría que optimizar las nuevas imágenes optimizadas y asi sucesivamente convirtiendose en un ciclo infinito.

Una de las validaciones que vamos a condicionar es agregar un texto, en nuestro caso "thumb", si se sube una imagen que tenga ese nombre entonces no aplicar el cloud function, acontinuación el código: 

```
const { join, dirname, basename, extname } = require('path');

// Get the file name.
const extendName = extname(filePath);
const fileName = basename(filePath, extendName);
const fileFullName = `${fileName}${extendName}`;
if (fileName.includes('_thumb_')) {
  console.log('Already a Thumbnail.');
  return true;
}
```

tenemos que agregar una verificación si ya se optimizo la imagen porque puede surgir el problema que se optimize infinitamente
 ```
 if (data.metadata && data.metadata.optimized) 
 ```
Creamos una carpeta temporal para las imágenes optimizadas
```
const workingDir = join(tmpdir(), "thumbs");
```
Descargamos el archivo original
```
await file.download({ destination });
```
Recorremos el vector sizes = [480,640,1200] para poder crear las imágenes optimizadas
```
const resizesPromises = sizes.map((size) => 
```

Subiremos los archivos al storage 
```
const uploadPromises = files.map((file) => {
```
Eliminaremos la carpeta temporal que creamos
```
return fs.remove(workingDir);
```

El código completo se encuentra en el siguiente link:
[Código cloud Function](functions/index.js)


Para poder ejecutar el proyecto se utilizo node.js
```
npm install
```

Dependencias 
```
npm i @google-cloud/storage fs-extra sharp --save
```
