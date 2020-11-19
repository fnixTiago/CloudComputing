# Introduction to Kubernetes

Here's a simple Go API that returns the host's information. You can deploy the same container to any Kubernetes cluster. I use this guide to demo how to use Kubernetes locally, and then deploy the same app to AWS, GCP, and Azure.

## Build Docker Image

```
docker build -t rubenhm/api-hello .
docker run -d -p 8080:8080 rubenhm/api-hello
docker push rubenhm/api-hello
```

## Deploy Kubernetes Objects
```
kubectl apply -f ./k8s/
kubectl get all
```