window.cipher = {
  encode: (string, offset) => {
    
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
        else if (caracter>=97 && caracter<=122){
          text = String.fromCharCode(((caracter - 97 + offset) % 26) + 97);
        }
        else if (caracter==32){
          text = String.fromCharCode(caracter);
        }
        
        else{
           alert("Solo puedes ingresar letras");return;
                   
        }

             cifradoFinal += text;
            // console.log(cifradoFinal);
            
    }
    return cifradoFinal  
   
    
  },
  decode: (string, offset) => {
    let decifradoFinal="";

    for (let i = 0; i < string.length; i++) {
        let texto = string[i];
     
        let text = "";
        let caracter = texto.charCodeAt();
      
        if (caracter>= 65 && caracter <= 90){
        text = String.fromCharCode(((caracter + 65 - offset) % 26) + 65);
      
        }
        else if (caracter>=97 && caracter<=122){ //caracter>=97 && caracter<=122
          text = String.fromCharCode(((caracter -122 - offset) % 26) + 122); //caracter + 97 - offset) % 26) + 97
        }
        else if (caracter==32){
          text = String.fromCharCode(caracter);
        }

        else{
            alert("Solo letras de la A a la Z");return;
                        
             
           
             
         }

             decifradoFinal += text;
            // console.log(cifradoFinal);
            

    }
    return decifradoFinal  
  }
};
