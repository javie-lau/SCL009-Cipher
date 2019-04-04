const container = document.getElementById("portada");

   document.getElementById("portada").style.display="block";//invisible
   document.getElementById("root").style.display="none";//invisible

document.getElementById("comenzar").addEventListener("click",() => {
    document.getElementById("portada").style.display="none";//invisible
   document.getElementById("root").style.display="block";//invisible
});




document.getElementById("botonCifrado").addEventListener("click", () => {
    let string = document.getElementById("escribir").value.toUpperCase();
    let offset=parseInt(document.getElementById("offset").value);
    //console.log(offset);


    let cifradoFinal="";

    for (let i = 0; i < string.length; i++) {
        let texto = string[i];
        //console.log(texto);
        let text = "";
        let caracter = texto.charCodeAt();
        //console.log(caracter);
        if (caracter>= 65 && caracter <= 90){
        text = String.fromCharCode(((caracter - 65 + offset) % 26) + 65);
       // console.log(text);
        } 
        
        else{
           alert("Solo letras de la A a la Z");return;
                       
            
            
            
        }

             cifradoFinal += text;
            // console.log(cifradoFinal);
            document.getElementById("respuesta").value =cifradoFinal;

    }
    return cifradoFinal  
    

});
document.getElementById("decifrando").addEventListener("click", () => {

 let string = document.getElementById("escribir").value.toUpperCase();
 let offset=parseInt(document.getElementById("offset").value);
    //console.log(offset);


    let decifradoFinal="";

    for (let i = 0; i < string.length; i++) {
        let texto = string[i];
        //console.log(texto);
        let text = "";
        let caracter = texto.charCodeAt();
        //console.log(caracter);
        if (caracter>= 65 && caracter <= 90){
        text = String.fromCharCode(((caracter + 65 - offset) % 26) + 65);
       // console.log(text);
        }
        else{
            alert("Solo letras de la A a la Z");return;
                        
             
             
             
         }

             decifradoFinal += text;
            // console.log(cifradoFinal);
            document.getElementById("respuesta").value = decifradoFinal;

    }
    return decifradoFinal  
    
});