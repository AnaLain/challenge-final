//let obj = cambios();


//1-declaro función
function tituloIncio(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};
 
//Retornar el texto ingresado por el usuario
//convertir los parámetros dados en array
function encriptarTexto(){
    let myText= document.getElementById('textoUsuario').value;
    console.log (myText); 
    console.log (typeof(myText)); 
    //console.log(myText.replace("e", 'enter'));
    
return;  
}; 

//debe hacer el cambio de las letras
function encriptarTexto(){
    /*let myText= document.getElementById('textoUsuario').value;
    console.log (myText); */
    let obj= textoUsuario.value;
    let newBusqueda =obj.replace(/e/ig, "enter"). replace(/i/ig, "imes"). replace(/a/ig, "ia"). replace(/o/ig, "ober"). replace(/u/ig, "ufat");
    textoUsuario.value = newBusqueda;
    document.getElementById('textoCaptura').innerText=newBusqueda;
    
    };
    
function desencriptarTexto(){
    let desencriptar = textoUsuario.value;
    let newDesencriptar = desencriptar.replace(/enter/ig, "e"). replace(/imes/ig, "i"). replace(/ia/ig, "a"). replace(/ober/ig, "o"). replace(/ufat/ig, "u");
    textoUsuario.value = newDesencriptar;
    document.getElementById('textoUsuario').innerText=newDesencriptar;
};






//2-llamó a la función que declaré inicialmente
tituloIncio('h1', 'Ingrese texto aquí');
tituloIncio('p', 'Solo letras minisculas y sin acentos');
