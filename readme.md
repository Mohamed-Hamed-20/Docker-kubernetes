# E-commerce Deployment on Kubernetes

This repository contains Kubernetes manifests to deploy a complete e-commerce backend using MongoDB, Redis, and a Node.js backend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Deployment Steps](#deployment-steps)
- [Kubernetes Manifests](#kubernetes-manifests)
- [Verifying Deployment](#verifying-deployment)
- [Additional Commands](#additional-commands)
- [Screenshots](#screenshots)
- [Project Links](#project-links)

## Prerequisites

Ensure you have the following installed:

- Docker
- Kubernetes (Minikube or a cluster)
- kubectl CLI

## Deployment Steps

1. Clone this repository:
   ```sh
   git clone https://github.com/Mohamed-Hamed-20/E-commerce-v2.git
   cd E-commerce-v2
   ```
2. Apply ConfigMap:
   ```sh
   kubectl apply -f configmap.yaml
   ```
3. Deploy MongoDB:
   ```sh
   kubectl apply -f mongo-deployment.yaml
   ```
4. Deploy Redis:
   ```sh
   kubectl apply -f redis-deployment.yaml
   ```
5. Deploy Backend:
   ```sh
   kubectl apply -f backend-deployment.yaml
   ```
6. Verify pods:
   ```sh
   kubectl get pods
   ```
7. Expose Backend:
   ```sh
   kubectl port-forward service/backend-service 5000:5000
   ```

## Kubernetes Manifests

### Backend Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: backend
        image: kasem1196/ecommerce:v1.1
        imagePullPolicy: Always
        ports:
        - containerPort: 5000
        envFrom:
        - configMapRef:
            name: backend-env
```

### MongoDB Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongo-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongo
  template:
    metadata:
      labels:
        app: mongo
    spec:
      containers:
      - name: mongo
        image: kasem1196/mongo:v1.1
        ports:
        - containerPort: 27017
        volumeMounts:
        - name: mongo-storage
          mountPath: /data/db
      volumes:
      - name: mongo-storage
        persistentVolumeClaim:
          claimName: mongo-pvc
```

## Verifying Deployment

Check all running services:

```sh
kubectl get services
```

Check logs for any pod:

```sh
kubectl logs <pod-name>
```

## Additional Commands

Display detailed information about a pod:
```sh
kubectl describe pod backend-deployment-c96d7c449-54p6p
```

Manually forward port 5000:
```sh
kubectl port-forward pod/backend-deployment-c96d7c449-54p6p 5000:5000
```

Access the backend in the browser:
```
http://127.0.0.1:5000
```

## Screenshots

### Running Backend Pod  
![Backend Pod Running](./images/backend run terminal.jpeg)

### MongoDB Deployment  
![MongoDB Deployment](./images/monog db running mongo campass.jpeg)

### live project Deployment  
![live Deployment](./images/sample project run browser.jpeg)

### Port Forwarding  
![Port Forwarding](./images/mongo run terminal.jpeg)


## Project Links

- [GitHub Repository](https://github.com/Mohamed-Hamed-20/E-commerce-v2)
- [Live Demo](https://mohamed-hamed-20.github.io/E-commerce-vanilla-JS/html/shop.html)
- [API Documentation](https://documenter.getpostman.com/view/27782301/2sA358c5Q3#aa1e9f0c-2f0a-49e7-952c-4267db72181b)

