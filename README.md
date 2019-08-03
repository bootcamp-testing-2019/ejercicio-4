# Ejercicio 4 - Taller de testing en node

## Instalación

Clonar el repositorio con el proyecto

```
git clone --branch inicio https://github.com/bootcamp-testing-2019/ejercicio-4.git
```

Continuar con

* [Usando node](./node.md)
* [Usando Docker](./docker.md)


## Primera iteración

En esta primera iteración, luego de experimentar de manera concreta con varias variantes de posibles DSLs, implementamos el protocolo completo del DSL usando TDD.

Notar que no hay ningún test de unidad, únicamente tests usando el DSL que estamos diseñando.

Notar también que la cobertura de tests es de casi un 100% y que el único método que no se ejercita en los tests es un método de implementación.

![Code coverage](./docs/code-coverage-1.png)

Para generar el reporte de code coverage hacer

```
npx jest --coverage
```

## Segunda iteración

En la segunda iteración, luego de tener definida la interfaz pública del DSL, cambiamos completamente la implementación apoyándonos en el hecho de tener una cobertura de tests funcionales de casi el 100% y de no haber escrito ningún test de unidad.

Notar del [commit](https://github.com/bootcamp-testing-2019/ejercicio-4/commit/45a46c0a8c21d81650eec27b1ffcac33f7accea9) de los cambios que prácticamente modificamos o reescribimos el 100% de las líneas de código de la implementación del DSL sin haber tocado ni una sola línea de código de ninguno de los tests, manteniendo un test coverage aproximadamente igual al anterior.

![Code coverage](./docs/code-coverage-2.png)

Al decidir hacer únicamente tests funcionales de las interfaces públicas pusimos el esfuerzo en alcanzar desde el comienzo una interfaz estable en vez de la implementación estática a la que nos hubieran atado los tests de unidad de haberlos escrito.

## Tercera iteración

En la tercera iteración agregamos una unidad de medida nueva.

Esta vez la implementación cambia muy poco y agregamos tests nuevos.

## Siguientes iteraciones

En las siguientes iteraciones es posible agregar nuevas unidades de medida y hacer cambios de implementación a las existentes.

Por ejemplo si agregáramos una unidad de medida `Dinero` la implementación sería igual a las otras unidades pero luego de tener los tests en verde se podría reimplementar su aritmética para que use punto fijo en vez de punto flotante.

## Ejercicio completado

Para ver el ejercicio completado hacer

```
git checkout master
```

dentro del directorio `ejercicio-4`.

## Referencias

### Lenguaje

* [Node.js](https://nodejs.org/en/)

### Manejo de versiones de archivos

* [Git](https://git-scm.com/)
* [Github](https://github.com/)

### Versionado de librerías de node

* [npm](https://www.npmjs.com/)

### Testing

* [Jest framework](https://jestjs.io/)
* [Jest with Typescript](https://basarat.gitbooks.io/typescript/docs/testing/jest.html)

### Entornos

* [Docker](https://www.docker.com/)