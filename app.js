const { createFile } = require('./helpers/multiplify');
const argv = require('./conifg/yargs');
require('colors')

console.clear(); 

console.log( argv );


createFile( argv.b, argv.l, argv.h )
     .then( fileName => console.log( fileName.rainbow, 'Creado' ) )
     .catch( err => console.log(err));