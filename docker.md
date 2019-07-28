# Taller de introducción al testing en node - Bootcamp 2019

Si la máquina de desarrollo tiene instalado `Docker` es posible usar `Docker` para correr la applicación y los tests sin instalar `node`.

## Requerimientos

* [Docker](https://www.docker.com/)

### Ir al directorio del proyecto

```
cd ejercicio-4
```

### Instalar las depedencias de npm

```
sudo docker run -it --rm -v "$PWD":/home/node/app -w /home/node/app node:12 npm install
```

### Correr los tests

```
sudo docker run -it --rm -v "$PWD":/home/node/app -w /home/node/app node:12 npm test
```