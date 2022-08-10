function cambioDivisisas(euro,moneda){
    if(moneda=="libra"){
        console.log(euro*0.86+"libras son"+euro+"euros")
    }
    else if(moneda=="dolar"){
        console.log(euro*1.28611+"dolares son"+euro+"euros")
    }
    else if(moneda=="yen"){
        console.log(euro*129.852+"yenes son"+euro+"euros")
    }
}
cambioDivisisas(2,"libra")
cambioDivisisas(2,"dolar")
cambioDivisisas(2,"yen")