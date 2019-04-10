//const container = document.getElementById("portada");

   document.getElementById("portada").style.display="block";//visible
   document.getElementById("root").style.display="none";//invisible

document.getElementById("comenzar").addEventListener("click",() => {
    document.getElementById("portada").style.display="none";//invisible
   document.getElementById("root").style.display="block";//visible
});

document.getElementById("reset").addEventListener("click",()=>{//limpiar lo que escriben
    document.getElementById("escribir").value="";
    document.getElementById("offset").value="";
    document.getElementById("respuesta").value="";
});


document.getElementById("botonCifrado").addEventListener("click",() => {
    let string = document.getElementById("escribir").value;
    let offset=parseInt(document.getElementById("offset").value);
    //console.log(offset);
let nuevaVariable = cipher.encode(string,offset);//importa la funcion encode de cipher.js, 
document.getElementById("respuesta").value =nuevaVariable;
});

document.getElementById("decifrando").addEventListener("click",() => {

 let string = document.getElementById("escribir").value;
 let offset=parseInt(document.getElementById("offset").value);//importa funcion decode
    //console.log(offset);

    let nuevaVariable = cipher.decode(string,offset);
    document.getElementById("respuesta").value = nuevaVariable;
    
});