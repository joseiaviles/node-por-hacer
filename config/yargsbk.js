const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Maraca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra un registro del archivo', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Borrar un registro del archivo'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}