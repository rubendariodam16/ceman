window.onload = function() {
 actualiza();
}

var precio_final      =   12000;
var aumento_guardado  =    0;
var motor_guardado;
var modelo_guardado   =    1;
var modelo_elegido    =    1;
var color_guardado;
var precios_motor     =    [0, 1500, 3000];
var precios_modelo    =    [-2000,0,1500];
var precios_color     =    [0,0,0, -500,-600];

function equipamiento (){
 var aumento = 0;
 
 if(document.getElementById("metalizada").checked === true){
  aumento += 750;
 }
 if(document.getElementById("aleacion").checked === true){
  aumento+= 200;
}
 if(document.getElementById("climatizador").checked === true){
  aumento += 800;
}
 if(document.getElementById("gps").checked === true){
  aumento += 340;
 }
 
 if(document.getElementById("onconnet").checked === true){
  aumento += 800;
}
 //SE  CALCULAN LOS CAMBIOS
 
 precio_final = precio_final + (aumento - aumento_guardado);
 aumento_guardado = aumento;
 actualiza();
}


// FUNCION PARA LA SELECCION 

function motorGuardado(){
 motor_guardado=document.getElementById("motores").selectedIndex;
}

// FUNCION PARA EL CAMBIO 

function cambiarMotor(){
 
 var seleccion = document.getElementById("motores").selectedIndex;
 
 switch (seleccion ) {
  case 0:
   precio_final = precio_final - precios_motor[motor_guardado];
   document.getElementById("modelo3").disabled = false;
   break;
   
   case 1:
   case 2:
    precio_final = precio_final + precios_motor[seleccion] - precios_motor[motor_guardado];
     document.getElementById("modelo3").disabled = true;
     document.getElementById("modelo3").checked = false;
   
   break;
                 }
 motor_guardado = seleccion;
 
 actualiza();
 
}

function cambiarModelo (){
 
 if(document.getElementById("modelo3").checked === true){
  modelo_elegido = 0;
 }else if(document.getElementById("modelo5").checked === true) {
  
  modelo_elegido = 1;
 }else{
  modelo_elegido = 2;
 }
 
 if(modelo_elegido !== 2){
  document.getElementById("onconnet").disabled = true;
  document.getElementById("onconnet").checked = false;
 }else{
  document.getElementById("onconnet").disabled = false;
 }
 if (modelo_elegido != modelo_guardado){
  precio_final = precio_final + precios_modelo[modelo_elegido] - precios_modelo[modelo_guardado];
 }
 modelo_guardado = modelo_elegido;
 actualiza();
}

//SELECCION COLOR

function colorGuardado (){
 color_guardado = document.getElementById("colores").selectedIndex;
}

function cambiarColor(){
 
 var seleccion = document.getElementById("colores").selectedIndex;
 
 switch(seleccion){
   case 0:
  case 1:
  case 2:
   
   precio_final = precio_final - precios_color[color_guardado];
   document.getElementById("metalizada").disabled = false;
   break;
   
  case 3:
  case 4:
   
    precio_final = precio_final + precios_color[seleccion] - precios_color[color_guardado];
     document.getElementById("metalizada").checked== false;
     document.getElementById("metalizada").disabled== true;
   break;
   
  default:
   break;
                 }
 color_guardado = seleccion;
 actualiza();
}

function actualiza() {
 document.getElementById("precio_final").innerHTML = precio_final + " €";
}
