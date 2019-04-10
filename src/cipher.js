window.cipher = {
  encode: (string, offset) => {
    
    let cifradoFinal="";

    for (let i = 0; i < string.length; i++) {
        let texto = string[i];
        //console.log(texto);
        let text = "";
        let caracter = texto.charCodeAt();
        let otherCharacters = (caracter>=32 && caracter<=47)||(caracter>=58 && caracter<=64)||
        (caracter>=91 && caracter<=96)||(caracter>=123 && caracter<=254);//otros caracteres no cifran si aparecen

        //offset positivo
        if(offset>=0){ if (caracter>= 65 && caracter <= 90){
        text = String.fromCharCode(((caracter - 65 + offset) % 26) + 65);//mayuscula
               } 
        else if (caracter>=97 && caracter<=122){
          text = String.fromCharCode(((caracter - 97 + offset) %26) + 97);//minuscula
        } if(caracter>=48 && caracter<=57){ 
          text= String.fromCharCode((caracter - 48+ offset) %10 + 48);//numeros
        } if(otherCharacters){ 
          text = String.fromCharCode(caracter);//otros caracteres   
        }
      }//offset negativo
      if(offset<0){ if(caracter>=65 && caracter<=90){ 
        text = String.fromCharCode((caracter - 90 + offset) %26 + 90);//mayuscula    
      } if(caracter>=97 && caracter<=122){ 
        text = String.fromCharCode((caracter - 122 + offset)%26 + 122);
      }//minusculas
        if(caracter>=48 && caracter<=57){
        text = String.fromCharCode((caracter - 57 + offset) %10 + 57);//numeros
      } if(otherCharacters){ 
        text = String.fromCharCode(caracter);//otros caracteres 
      }
    }
                
                     cifradoFinal += text;
          
            
    }
    return cifradoFinal  
   
    
  },
  decode: (string, offset) => {
    let decifradoFinal="";

    for (let i = 0; i < string.length; i++) {
        let texto = string[i];
     
        let text = "";
        let caracter = texto.charCodeAt();
        let otherCharacters = (caracter>=32 && caracter<=47)||(caracter>=58 && caracter<=64)||
        (caracter>=91 && caracter<=96)||(caracter>=123 && caracter<=254);

      // offset positivo
        if(offset>=0){ if (caracter>= 65 && caracter <= 90){
        text = String.fromCharCode(((caracter + 65 - offset) % 26) + 65);//mayuscula
      
        }
         if (caracter>=97 && caracter<=122){ 
          text = String.fromCharCode(((caracter -122 - offset) % 26) + 122); //minusculas
         }if(caracter>=48 && caracter<=57){ 
            text= String.fromCharCode((caracter- 57- offset) % 10 + 57);//numeros
         } if(otherCharacters){ 
          text = String.fromCharCode(caracter);
        }
      }
//offset negativo
                
       if (offset<0){ if (caracter>= 65 && caracter <= 90){
        text = String.fromCharCode(((caracter - 65 - offset) % 26) + 65);//mayuscula
      
        }
         if (caracter>=97 && caracter<=122){ 
          text = String.fromCharCode(((caracter - 97 - offset) % 26) + 97); //minusculas
         }if(caracter>=48 && caracter<=57){ 
            text= String.fromCharCode((caracter- 48- offset) % 10 + 48);//numeros
         } if(otherCharacters){ 
          text = String.fromCharCode(caracter);
        }
      }    
             
         

             decifradoFinal += text;
            // console.log(cifradoFinal);
            

    }
    return decifradoFinal  
  }
};
