
// Manipulación de Objetos JSON
// Autor: FabianXy
// Fecha: 22 - 02 - 22

const jsonData = require('../users.json');

// Obtención de los No. Telefonicos iterando sobre objeto users:
const getPhones = (json) => {

    for (let i = 0; i < json.users.length; i++) {
        console.log(json.users[i].phoneNumber);
    }
    return
}

console.log(getPhones(jsonData));