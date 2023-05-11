
function calcular_prestamo( monto , cuotas ){
monto = parseFloat(monto);
cuotas = parseInt(cuotas);
let prestamo = 0;

if ( monto > 0 && cuotas == 3 ){
    prestamo = monto + (monto * 0.15);
    return prestamo
}
else if( monto > 0 && cuotas == 6){
    prestamo = monto + (monto * 0.30);
    return prestamo
}

}

function inscripto( prestamo , estado_usuario ){

    if( estado_usuario == "SI"){
        let descuento = prestamo - ( prestamo * 0.15 );
        return descuento
    }
    else{
        return 0
    }
}


console.log("¡Bienvenido/a a Tramo Ya");

let monto = "";

while( monto != "FIN"){

alert = prompt("Bienvenido/a Si desea continuar escriba OK")

monto = prompt("Ingrese monto a solicitar o Ingrese FIN para finalizar")

if( monto != "FIN"){
    let estado_usuario =  prompt("¿Está inscripto?: SI o NO")
    let cuotas = prompt("¿Cuantas cuotas desea? 3 o 6")
    
    let resultado_prestamo = calcular_prestamo( monto , cuotas );
    let resultado_descuento = inscripto( resultado_prestamo , estado_usuario );
    
    console.log("Pediste: ", monto);
    console.log("Cuotas: ", cuotas);
    console.log("Devolves: ", resultado_prestamo);
    if( resultado_descuento != 0){
        console.log("Descuento total 15%: ", resultado_descuento);
    }
}
}