let numero=parseInt(prompt("Introduce un numero"));
let body=document.querySelector("body");
body.innerHTML=`<p>${numero}</p>
               <button>Click</button> `
let boton=document.querySelector("button")
let resultado=document.querySelector("p")
boton.addEventListener("click",function(){
suma(numero)
})

function suma(num){
    
    resultado.innerHTML=parseInt(resultado.innerHTML)+num
   
}