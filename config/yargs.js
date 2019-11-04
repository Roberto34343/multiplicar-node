const opts = {
    base: {
        demand: true,
        alias: 'b',
        desc: 'Este es un campo obligatorio'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabal de multiplicar', opts)
    .help().argv;

module.exports = { argv }