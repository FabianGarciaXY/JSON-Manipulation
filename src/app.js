
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

// Extracción de datos XNzXr1i4.json
const newJson = require('../XNzXr1i4.json')

const states = newJson[2].primary_guest_details.state

const destinations = newJson[0].destination;
console.log(destinations);