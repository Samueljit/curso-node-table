
const { transcode } = require('buffer');
const fs = require('fs');
const colors = require('colors');

const createFile =  async ( base = 5, l = false, h = 10 ) => {
    
    try {
        if ( l ) {
            console.log('================'.cyan)
            console.log('   Tabla del:'.magenta, colors.blue( base ) )   
            console.log('================'.cyan)
        }
    let outPut = '';
    let show = '';

    for ( let i = 1; i <= h; i++ ) {
        let result = base * i
        outPut += `${ base } * ${ i } = ${ result }\n`;
        show += `${ colors.black(base) } ${'*'.black} ${ colors.black( i ) } ${'='.black} ${ colors.black( result )}\n`.bgWhite;
    }

    if ( l ) {
     console.log(show);
    }
    //  fs.writeFileSync( `tabla-${ number }.txt`, outPut, ( err ) => {
    //      if ( err ) throw err;
    //      console.log( `tabla-${ number }.txt` )
    //  })
    
    // la diferencia es que para obtener el error hay que hacer un try y catch
    
    fs.writeFileSync( `./salida/tabla-${ base }.txt`, outPut );
    
   return  `tabla-${ base }.txt`;

    } catch ( err ) {
        
        throw err;
    
    }

    
}

module.exports = {
    createFile
}
