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
        
        else{
           alert("Solo letras de la A a la Z");return;
                   
          
            
            
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
            

    }
    return decifradoFinal  
  }
};
