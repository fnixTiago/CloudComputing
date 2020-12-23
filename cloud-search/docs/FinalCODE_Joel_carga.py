import json
import boto3

def lambda_handler(event, context):
    # CARGANDO LOS NOMBRES DE CARPETAS DE VIDEOS EN UN VECTOR
    # listFolder=["video1", "video2", "video3", "video4"]   # OJO: generar 1 for    
    nVideos = 5 # OJO: -1
    nImgs = 11  # OJO: -1
    listFolder = []
    for i in range(1, nVideos):
        video = "video" + str(i)
        listFolder.append(video)

    # CARGANDO LOS NOMBRES DE LAS IMGS DE TODOS LOS VIDEOS EN UNA MATRIZ
    # listImage=[["1_img1.png", "1_img2.png", "1_img3.png"], ["2_img1.png", "2_img2.png", "2_img3.png"], ["3_img1.png", "3_img2.png", "3_img3.png"], ["4_img1.png", "4_img2.png", "4_img3.png"]] # OJO: generar 2 for
    listImage = []
    for i in range(1, nVideos):
        vtmp = []
        for j in range(1, nImgs):
            img = str(i) + "_img" + str(j) + ".png"
            vtmp.append(img)
        listImage.append(vtmp)

    s3 = boto3.client("s3")
    client = boto3.client("rekognition")
    s3A = boto3.resource("s3")
    
    indice=0
    for folder in listFolder:
        variables=[]
        
        for image in listImage[indice]:
            #leyendo las imagenes del folder
            
            file=folder+"/"+image
            print(file)
            
            fileObj=s3.get_object(Bucket="mybucketvideos", Key=file)    # OJO: mybucketvideo
            file_content=fileObj["Body"].read()
            
            salida = client.detect_labels(
                Image={'Bytes': file_content},
                MaxLabels=2,
                MinConfidence=90
            )
            #AGARRAMOS LOS NAME DE LA SALIDA DE LA IMAGEN
            for labels in salida['Labels']:
                if ((labels['Name'] in variables) == False):
                    variables.append(labels['Name'])
            
        print("Termino el folder "+folder)
        print("Variables: ",variables)
        print("Guardando las variables...")
        
        output=""
        for cad in variables:
            output=output+cad+" "
        print("Cadena: ",output)
        
        #GUARDANDO LAS SALIDAS EN UN TXT
        response = s3.put_object(
            Bucket="mybucketvideos",    # OJO: mybucketvideo
            Body=output,
            Key=folder+".txt"
        )
        
        indice+=1
    
    #LEYENDO UN ARCHIVO DE SALIDA
    s3=boto3.resource("s3")
    obj=s3.Object("mybucketvideos","video1.txt")    # OJO: mybucketvideo
    body=obj.get()['Body'].read()
    print("LEYENDO FICHERO: ",body)

    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
