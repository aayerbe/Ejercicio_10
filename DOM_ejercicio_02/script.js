let variable=false
const body=document.querySelector("body")
body.innerHTML=`<p>La variable está en ${variable}</p>
                <button>Click</button>`
const boton=document.querySelector("button")

boton.addEventListener("click", ()=>{
    let parrafo=document.querySelector("p")
    if (variable==false){
        parrafo.innerHTML=parrafo.innerHTML.replace(variable,variable=true)
    }
    else if (variable==true){
        parrafo.innerHTML=parrafo.innerHTML.replace(variable,variable=false)
    }
})
