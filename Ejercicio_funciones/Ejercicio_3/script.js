function Division(num1,num2){
    
    let resultado=num1/num2
    alert(resultado)
}
num1=parseInt(prompt("Introduce numero 1"))
num2=parseInt(prompt("Introduce numero 2"))
Division(num1,num2)
while(num2!=0){
    num1=parseInt(prompt("Introduce numero 1"))
    num2=parseInt(prompt("Introduce numero 2"))
    Division(num1,num2)
}