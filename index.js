const { readFile } = require('fs');
const { promisify } = require('util');
const readFilePromise = promisify(readFile);
/* Można jeszcze zamiast pobierać moduł fs i util osobno, pobrac const = {readFile} = require('fs').promises
Dzieki temu zapisowi pobierzemy metode readFile ktora jest od razu przerobiona na promisyping
 */
console.log('Hello World!');
/* Pierwszy sposob
readFile('./index.js', 'utf8', (err, data) => {
    console.log(data);
})*/

/* Drugi Sposób
readFilePromise('./index.js', 'utf8')

    .then(data => console.log(data))
    .catch(error => {
        console.log('Oh no, there is an Error!', error)
})*/

/* Trzeci */

(async () => {
    try {
        const data = await readFilePromise('./index.js', 'utf8');
        console.log(data);
    } catch (err) {
        console.log("Oh no there is an Error!", err);
    }
})();

