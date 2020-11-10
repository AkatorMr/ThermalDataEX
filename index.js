const { exec,spawn, spawnSync } = require("child_process");

const {writeFileSync} = require("fs");
const {appendFileSync} = require("fs");

// const Jimp = require("jimp");
const PNG = require("pngjs").PNG;

//import { createReadStream, appendFileSync, w, writeFileSync } from 'fs';


//Leer argumentos 
let argumentos = process.argv.slice(2);
console.log(argumentos);

var image_path = "";
for( let argumento of argumentos){
    console.log(argumento);
    if(argumento.charAt(0)=="-"){
        //Es una opcion pero no va a tener
    }else{
        if(argumento!="")
        image_path = argumento;
        
    }
}

console.log("Archivo a leer: " + image_path);


var exif_rti = spawnSync("exiftool.exe",["-RawThermalImage","-b",image_path]);
/*exif_rti.stdout.on("data",(data )=> {
    writeFileSync("out.png",data,"binary");
    console.log("fin");
});*/

writeFileSync("out.png",exif_rti.stdout,"binary");




new PNG().parse(exif_rti.stdout, function (error, image) {
    
    let w = image.width;
    let h= image.height;
    //console.log(h,w);
    //image.greyscale();
    console.log(image.data);
    //console.log(image.data.read );
    /* 
    for(let y =0;y<h;y++){
        for(let x =0;x<w;x++){
            let v = Jimp.intToRGBA( image.getPixelColor(x,y));
            //v = (v & 0xff00)>>16;//eliminamos el byte de transparencia
            let vb = (v & 0xff00)>>8;
            let va = (v & 0xff)<<8;
            v = va||vb;
            
            appendFileSync('salida.csv', v+";");
            //console.log(v);
        }
        appendFileSync('salida.csv', "\n");
    }
    appendFileSync('salida.csv', "\n"); */

    //console.log(data);
  });
  
// Jimp.read("out.png",function(err,image){
//     let w = 10;//image.getWidth();
//     let h= 10;//image.getHeight();
//     //image.greyscale();
//     console.log(image.bitmap.data);
    
//     //for(let y =0;y<h;y++){
//         //for(let x =0;x<w;x++){
//             //let v = Jimp.intToRGBA( image.getPixelColor(x,y));
//             /*v = (v & 0xffff00)>>16;//eliminamos el byte de transparencia
//             let vb = (v & 0xff00)>>8;
//             let va = (v & 0xff)<<8;
//             v = va||vb;*/
            
//             //appendFileSync('salida.csv', v+";");
//             //console.log(v);
//         //}
//         //appendFileSync('salida.csv', "\n");
//     //}
// appendFileSync('salida.csv', "\n");


// });

// Jimp.read(exif_rti.stdout,function(err,image){
//     let w = 10;//image.getWidth();
//     let h= 10;//image.getHeight();
//     //image.greyscale();
//     console.log(image.bitmap.data);
    
//     //for(let y =0;y<h;y++){
//         //for(let x =0;x<w;x++){
//             //let v = Jimp.intToRGBA( image.getPixelColor(x,y));
//             /*v = (v & 0xffff00)>>16;//eliminamos el byte de transparencia
//             let vb = (v & 0xff00)>>8;
//             let va = (v & 0xff)<<8;
//             v = va||vb;*/
            
//             //appendFileSync('salida.csv', v+";");
//             //console.log(v);
//         //}
//         //appendFileSync('salida.csv', "\n");
//     //}
// appendFileSync('salida.csv', "\n");


// }

// );

console.log("Fin");
/* do{
    
}while(1);
process.exit();

console.log("Test1 ");
exec("dir", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
console.log("Test2");


appendFileSync();

exif.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});

exif.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

exif.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

exif.on("close", code => {
    console.log(`child process exited with code ${code}`);
});*/