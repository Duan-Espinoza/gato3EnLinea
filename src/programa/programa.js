//Definición de constantes
const sonidos=document.getElementById("sonidos");

const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");
const boton4 = document.querySelector("#boton4");
const boton5 = document.querySelector("#boton5");
const boton6 = document.querySelector("#boton6");
const boton7 = document.querySelector("#boton7");
const boton8 = document.querySelector("#boton8");
const boton9 = document.querySelector("#boton9");
const r =  document.querySelector("#r");
const p = document.querySelector("#p")

//variables que guardan el dato introducido por el jugador 1 o 2
var b11 = null
var b22 = null
var b33 = null
var b44 = null
var b55 = null
var b66 = null
var b77 = null
var b88 = null
var b99 = null

//Definición de la variable booleana click
//Esta variable es para pasar entre el turno del jugador 1 y 2
var click = true

//Evento de botón 1
boton1.addEventListener('click',function(){
    //Si es True "click" es el turno del jugador 1, en caso contrario sería el jugador 2
    //Asigna variable valor del jugador 1
    
    if(click === true){
        boton1.innerHTML = "x";
        b11 = 3
     click = false;
    }
    
    //Caso contrario, es jugador 2
    //Asigna variable valor del jugador 2
    
    else{
        boton1.innerHTML = "0";  
        b11 = 2
         click = true;
    
    }
    //Deshabilita tecla
    boton1.disabled = true
    check();
        //check();
})
//Evento de botón 2
boton2.addEventListener('click',function(){
    //Si es True "click" es el turno del jugador 1, en caso contrario sería el jugador 2
    //Asigna variable valor del jugador 1
    if(click === true){
        boton2.innerHTML = "x";
        b22 = 3
     click = false;
    
    }
    //Caso contrario, es jugador 2
    //Asigna variable valor del jugador 2
    else{
        boton2.innerHTML = "0"; 
        b22 = 2 
         click = true;
     
    }
    //Deshabilita tecla
    boton2.disabled = true
    check()
})
//Evento de botón 3
boton3.addEventListener('click',function(){
    //Si es True "click" es el turno del jugador 1, en caso contrario sería el jugador 2
    //Asigna variable valor del jugador 1
    if(click === true){
        boton3.innerHTML = "x";
        b33 = 3
        click = false;
    
    }
    //Caso contrario, es jugador 2
    //Asigna variable valor del jugador 2
    else{
        boton3.innerHTML = "0";  
        b33 = 2
         click = true;
        
    }
    //Deshabilita tecla
    check()
    boton3.disabled = true
})
//Evento de botón 4
boton4.addEventListener('click',function(){
    //Si es True "click" es el turno del jugador 1, en caso contrario sería el jugador 2
    //Asigna variable valor del jugador 1
    if(click === true){
        boton4.innerHTML = "x";
        b44 = 3
     click = false;
    
    }
    //Caso contrario, es jugador 2
    //Asigna variable valor del jugador 2
    else{
        boton4.innerHTML = "0";  
        b44 = 2
         click = true;
    
    }
    check()
    //Deshabilita tecla
    boton4.disabled = true
})
//Evento de botón 5
boton5.addEventListener('click',function(){
    //Si es True "click" es el turno del jugador 1, en caso contrario sería el jugador 2
    //Asigna variable valor del jugador 1
    if(click === true){
        boton5.innerHTML = "x";
        b55 = 3
     click = false;
    
    }
    //Caso contrario, es jugador 2
    //Asigna variable valor del jugador 2
    else{
        boton5.innerHTML = "0";  
        b55 = 2
         click = true;
    }
    check()
    //Deshabilita tecla
    boton5.disabled = true
})
//Evento de botón 6
boton6.addEventListener('click',function(){
    //Si es True "click" es el turno del jugador 1, en caso contrario sería el jugador 2
    //Asigna variable valor del jugador 1
    if(click === true){
        boton6.innerHTML = "x";
        b66 = 3
     click = false;
    
    }
    //Caso contrario, es jugador 2
    //Asigna variable valor del jugador 2
    else{
        boton6.innerHTML = "0";  
        b66 = 2
         click = true;
    
    }
    check()
    //Deshabilita tecla
    boton6.disabled = true
})
//Evento de botón 7
boton7.addEventListener('click',function(){
    //Si es True "click" es el turno del jugador 1, en caso contrario sería el jugador 2
    //Asigna variable valor del jugador 1
    if(click === true){
        boton7.innerHTML = "x";
        b77 = 3
     click = false;
    
    }
    //Caso contrario, es jugador 2
    //Asigna variable valor del jugador 2
    else{
        boton7.innerHTML = "0";  
        b77 = 2
         click = true;
        
    }
    check()
    //Deshabilita tecla
    boton7.disabled = true
})
//Evento de botón 8
boton8.addEventListener('click',function(){
    //Si es True "click" es el turno del jugador 1, en caso contrario sería el jugador 2
    //Asigna variable valor del jugador 1
    if(click === true){
        boton8.innerHTML = "x";
        b88 = 3
     click = false;
    }
    //Caso contrario, es jugador 2
    //Asigna variable valor del jugador 2
    else{
        boton8.innerHTML = "0";  
        b88 = 2
         click = true;
    
    }
    check();
    //Deshabilita tecla
    boton8.disabled = true
        //check();
})
//Evento de botón 9
boton9.addEventListener('click',function(){
    //Si es True "click" es el turno del jugador 1, en caso contrario sería el jugador 2
    //Asigna variable valor del jugador 1
    if(click === true){
        boton9.innerHTML = "x";
        b99 = 3
     click = false;
    
    }
    //Caso contrario, es jugador 2
    //Asigna variable valor del jugador 2
    else{
        boton9.innerHTML = "0";  
        b99 = 2
         click = true;
    
    }
    check()
    //Deshabilita tecla
    boton9.disabled = true
})


/**
 * Evento del boton de reinicio
 * 
 */
r.addEventListener('click',function(){

//reinicia los datos guardado en las variables de los botones
 b11 = null
 b22 = null
 b33 = null
 b44 = null
 b55 = null
 b66 = null
 b77 = null
 b88 = null
 b99 = null

    //limpia la interfaz de los botones

    boton1.innerHTML = ""
    boton2.innerHTML = ""
    boton3.innerHTML = ""
    boton4.innerHTML = ""
    boton5.innerHTML = ""
    boton6.innerHTML = ""
    boton7.innerHTML = ""
    boton8.innerHTML = ""
    boton9.innerHTML = ""
    //limpia texto pantalla
    p.innerText  = ""
    //reinicia el turno
     click = true
     //habilita todos los botones
     boton1.disabled = false
     boton2.disabled = false
     boton3.disabled = false
     boton4.disabled = false
     boton5.disabled = false
     boton6.disabled = false
     boton7.disabled = false
     boton8.disabled = false
     boton9.disabled = false
})

/**
 * Verifica la condición de victoria del jugador
 * Esta función solo se ejecuta al estar completados todos los eventos de los botones
 * Se verifica con las variables que almacenan los datos de los botones
 * Se verifica al ganador si completa una linea de 3 ya sea horizontal, vertical o en diagonal
 * Esto se saca mediante las multiplicaciones de las variables en las posiciones de posibles victorias, 
 * si da 27 es el jugador 1, si da 8 es el jugador 2
 */
function check(){
if(b11*b22*b33===27 || b11*b55*b99===27 || b11*b44*b77===27 || b33*b66*b99===27 || b77*b88*b99===27 || b22*b55*b88===27 || b44*b55*b66===27 || b33*b55*b77===27){
    p.innerText= "El jugador 1 (X) Ganó"} 
    if(b11*b22*b33===8 || b11*b55*b99===8 || b11*b44*b77===8 || b33*b66*b99===8 || b77*b88*b99===8 || b22*b55*b88===8 || b44*b55*b66===8 || b33*b55*b77===8){
        p.innerText= "El jugador 2 (Y) gano"
    console.log("hello")}  
}

//Evento de background music (opcional)
//Con la tecla de espacio se reproduce la música
//Con este evento también se puede asignar sonidos de los botones y de victoria 


document.addEventListener("keydown", function(evento){

    if(evento.keyCode === 32){

        sonidos.innerHTML = '<audio src="bgm.mp3" autoplay></audio>';
        //musica.play();
    }
})
