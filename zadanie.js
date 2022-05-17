/* Pierwszy sposob rozwiazania zadania
const {lookup} = require('dns');

lookup('google.com', (error, adress, family) => {
    if (error === null) {
        console.log(`The IP of 'google.com' is - ${adress}, and IPv family is ${family}`);
    } else {
        console.log('Oh No! There is an Error!', error);
    }
})
 */

/* Drugi Sposob

const {lookup} = require('dns');
const {promisify} = require('util');

promisify(lookup)('www.google.com')
    .then(ipAdress => console.log(ipAdress.address))
    .catch(error => {
       if (error === null) {
         console.log('ERROR! Wrong host address');
       } else {
         console.log(error);
       }
    })*/

/* Trzeci sposob */

const { lookup } = require('dns').promises;
(async () => {
    try {
        const ipAdress = await lookup('google.com');
        const stringifiedAdress = JSON.stringify(ipAdress);
        console.log(stringifiedAdress);
    } catch (err) {
        if (ipAdress === null) {
            throw err;
        }

    }
})()

