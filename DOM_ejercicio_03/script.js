
function cambioImagen(){
    const imagen=document.querySelector("img")
    
    if(imagen.src=="file:///C:/Users/alexa/Desktop/Bootcamp/Precurso-Presencial-JS-master/Precurso-Presencial-JS-master/parte10/DOM_ejercicio_03/reverso.png"){
        imagen.src="./anverso.jpg"
    }
    else if(imagen.src=="file:///C:/Users/alexa/Desktop/Bootcamp/Precurso-Presencial-JS-master/Precurso-Presencial-JS-master/parte10/DOM_ejercicio_03/anverso.jpg") {
        imagen.src="./reverso.png"
        
    }
}
