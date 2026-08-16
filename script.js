//=====================================
//          PANTALLA
//=====================================

let pantalla = document.getElementById("pantalla");

//=====================================
//      AGREGAR NÚMEROS
//=====================================

function agregarNumero(numero){

    pantalla.value += numero;

}

//=====================================
//      AGREGAR OPERADORES
//=====================================

function agregarOperador(operador){

    if(pantalla.value === ""){

        return;

    }

    let ultimo = pantalla.value.slice(-1);

    if(ultimo=="+" || ultimo=="-" || ultimo=="*" || ultimo=="/"){

        return;

    }

    pantalla.value += operador;

}

//=====================================
//      CALCULAR
//=====================================

function calcular(){

    if(pantalla.value==""){

        return;

    }

    try{

        pantalla.value = eval(pantalla.value);

    }

    catch{

        pantalla.value = "Error";

    }

}

//=====================================
//      LIMPIAR
//=====================================

function limpiarPantalla(){

    pantalla.value = "";

}