# JSON-Manipulation
*This is a repository to exercise the basics of JSON manipulation

## ¿Que es JSON?
JavaScript Object Notation. Un formato de intercambio de información entre aplicaciones.

Esto nos permite serializar objetos, arreglos, números, cadenas, booleanos y nulos.

## Estructura de JSON
Es parecido a un objeto literal de JS, pero todas sus claves deben llevar comillas dobles "", (tambien es recomendable ponerlos en los valores):
```
    {
        "userId": 1,
        "firstName": "Krish",
        "lastName": "Lee",
        "phoneNumber": "123456",
        "emailAddress": "krish.lee@learningcontainer.com"
      }
```



## Practice
Para ejemplo cuando ya contamos con un archivo JSON, podemos usar la función para accedera el:

*app.js*
```
    const json = require('./users.json')
```
