import json
import os
import boto3

def lambda_handler(event, context):
    # boto3 client
    s3 = boto3.client('s3')
    
    # replace below configuration
    bucket_name = 'mybucketvideos'

    # RECORRIDO DE VIDEOS
    nVideos = 5 # OJO: -1
    nImgs = 11  # OJO: -1
    for i in range(1, nVideos):        
        video = 'video' + str(i)
        key = video + '.mp4'

        # downloading file to /tmp directory within lambda
        lambda_file_path = f'/tmp/{key}'
        lambda_output_file_path = '/tmp/'+str(i)+'_img%1d.png'
        
        # downloading file
        s3.download_file(bucket_name, key, lambda_file_path)
        
        # transcoding
        os.system(f'/opt/ffmpeglib/ffmpeg -i {lambda_file_path} -r 1 -f image2 {lambda_output_file_path}')
        
        # uploading transcoded file
        # s3.upload_file(Bucket=bucket_name, Key=lambda_output_file_path.split('/')[-1], Filename=lambda_output_file_path)

        # IMÁGENES POR VIDEO
        for j in range(1, nImgs):
            lambda_output_file_path_S3 = '/tmp/'+str(i)+'_img' + str(j) + '.png'
            s3.upload_file(Bucket=bucket_name, Key=video+'/'+lambda_output_file_path_S3.split('/')[-1], Filename=lambda_output_file_path_S3)
            # s3.upload_file(Bucket=bucket_name, Key='/tmp/img3.png', Filename=lambda_output_file_path_S3)
    
    return {
        'statusCode': 200,
        'body': json.dumps('Terminó con Éxito!')
    }