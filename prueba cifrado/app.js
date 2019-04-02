let texto=prompt("¿Qué quiéres escribir?")
let string= texto;
let valorASCII= string.charCodeAt(0);//imprime 65
let letra=String.fromCharCode(65) //imprime A
let offset=prompt("indica el offset");
let offsetIndicado= offset

//let valorASCIIoffset=(valorASCII-65+offset)%26+65//imprime 68, código de ASCII + offset
//let letraCodificada= String.fromCharCode(valorASCIIoffset)

//console.log(letraCodificada)//imprime letra codificada

for (let i=0; i<string.length;i++){
let caracter = string[i].charCodeAt(0);
if(caracter >=65 && caracter <= 90){
    let nuevoCaracter = (caracter - 65 + offsetIndicado)%26 +65
    let textoCodificado = String.fromCharCode(nuevoCaracter);
    console.log (textoCodificado);
}
}