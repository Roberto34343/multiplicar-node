const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');


let comando = argv._[0];
let limite = argv.limite;
let base = argv.base;

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(base, limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado ${archivo}.`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}