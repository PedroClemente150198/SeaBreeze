// const personas = ["jane", "Pedro","Anthony","Kerly"];
// personas.forEach(function(personas){
//     console.log(`<li class"">${personas}</li>`);
// })
// const personas={
//     nombre: 'nombre',
//     apellido: 'apellido',
//     edad: 'edad',
//     pasatiempo: ["Correr", "Dibujar", "Programar"],
//     saluda(){
//         console.log(`Este es un saludo para ${this.nombre}`);
//     },
//     contacto: {
//         correo: '<EMAIL>',
//         telefono: '999999999',
//         facebook: '<EMAIL>',
//     }
// }
// console.log(personas);
// console.log(personas.pasatiempo);
// console.log(personas.saludar);
// console.log(personas.contacto);
// personas.saluda();

// ========================Metodo Rest=================
// function sumar(a, b, ...c){
//     let resultado =  a + b;
//     c.forEach(function(n){
//         resultado += n
//     });
//     return resultado;
// }
// console.log(sumar(23,65));
// console.log(sumar(23,65,500));

// // =======================================================
// <body>
//     <div id="drag-coontainer">
//         <div id="spin-container">
//             <img></img>
//             <img></img>
//             <img></img>
//             <img></img>
//             <img></img>
//             <img></img>

//             <video controls autoplay="autoplay" loop>
//                 <source src=""></source>
//             </video>

//             <P>SEABREAZE STUDIO 3D</P>
//         </div>
//     </div>
// </body>
// ========================================================
// *{
//     margin: 0;
//     padding: 0;
// }

// html, body {
//     height: 100%;
//     touch-action: none;
// }

// body {
//     overflow: hidden;
//     display: --webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     background: #111;
//     -webkit-transform-style: preserve-3d;
//     transform-style: preserve-3d;
// }

// #drag-coontainer, #spin-container{
//     position: relative;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     margin:auto;
//     -webkit-transform-style: preserve-3d;
//     transform-style: preserve-3d;
//     -webkit-transform:rotate(-10deg);
//     transform: rotate(-10deg);
// }

// #drag-coontainer img, #drag-container video{
//     -webkit-transform-style: preserve-3d;
//     transform-style: preserve-3d;
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     line-height: 100%;
//     font-size:50px;
//     text-align: center;
//     -webkit-box-shadow: 0 0 8px #fff;
//     box shadow: 0 0 #fff;
//     -webkit-box-reflect: below 10px linear-gradient(transparent, transparent,#0005);
// }

// #drag-container img:hover, #drag-container video:hover{
//     -webkit-box-shadow: 0 0 15px #fffd;
//     box-shadow: 0 0 #fffd;
//     -webkit-box-reflect: below 10px linear-gradient(transparent, transparent,#0007);
// }

// #drag-container p {
//     font-family: serif;
//     position: absolute;
//     top: 100%;
//     let = 50%;
//     -webkit-transform: translate(-50%, -50%) rotateX(90deg);
//     transform: translate(-50%, -50%) rotateX(90deg);
//     color: #fff;
// }

// #ground{
//     width:900px;
//     height:900px;
//     position: absolute;
//     top:100%;
//     left:50%;
//     -webkit-transform: translate(-50%, 50%) rotatex(90deg);
//     transform: translate(-50%, 50%) rotatex(90deg);
//     background: -webkit-radial-gradient(center center, farthest-side, #9993, transparent)
// }

// @-webkit-keyframes spin{
//     from{
//         -webkit-transform: rotateY(0deg);
//         transform: rotateY(0deg);
//     } to{
//         -webkit-transform: rotateY(360deg);
//         transform: rotateY(360deg);
//     }
// }

// @keyframes spin{
//     from{
//         -webkit-transform: rotateY(0deg);
//         -transform: rotateY(0deg);
//     }
//     to{
//         -webkit-transform: rotateY(360deg);
//         transform: rotateY(360deg);
//     }
// }

// @-webkit-keyframes spinRevert{
//     from{
//         -webkit-transform: rotateY(360deg);
//         -transform:rotateY(360deg);
//     }
//     to{
//         -webkit-transform: rotateY(0deg);
//         transform: rotateY(0deg);
//     }
// }

// @keyframes spinRevert{
//     from{
//         -webkit-transform: rotateY(360deg);
//         -transform:rotateY(360deg);
//     }
//     to{
//         -webkit-transform: rotateY(0deg);
//         transform: rotateY(0deg);
//     }
// }

// ====================================================================
// var radius = 240;
// var autoRotate = true;
// var rotateSpeed = -60;
// var imgWidth = 120;
// var imgHeight = 170;


// ------------------------START----------------------
// setTimeout(init,1000);

// var odrag = document.getElementById("drag-container");
// var ospin = document.getElementById("spin-container");
// var aImg = ospin.getElementById("img");
// var aVid = ospin.getElementById("videoo");
// var aEle = [...aImg, ...aVid];

// ospin.style.width = imgWidth + "px";
// ospin.style.height = imgHeight + "px";

// var ground = document.getElementById("ground");
// ground.style.width = radius * 3 + "px";
// ground.style.height = radius * 3 + "px";

// function init(delayTime) {
//     for (var i = 0; i < aEle.length; i++) {
//         aEle[i].style.transform = "rotateY("+(i * (360 / aEle.length)) + "deg) translateZ("+ radius + "px)";
//         aEle[i].style.transition = "transform 1s";
//         aEle[i].style.transitionDelay = delayTime || (aEle-length - i) / 4 + "s";
//     }
// }

// function applyTransforms(obj) {
//     if(tY > 180)tY = 180;
//     if(tY < 0)tY = 0;

//     obj.style.transform = "rotateX("+(-tY) +"deg) rotateY("+(tX)+ "deg)";
// }

// function playSpin(yes){
//     ospin.style.animationPlayState = (yes ? "running" : "paused");
// }
// var sX, sY, nX, nY, desX = 0,
// desY = 0,
// tx = 0,
// ty = 10;

// if (autoRotate){
//     var animationName = (rotateSpeed > 0 ? 'spin': 'spinRevert');
//     onlostpointercapture.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
// }

// document.onpointerdown = function(e) {
//     clearInterval (odrag.timer);
//     e = e || window.event;
//     var sX = e.clientX,
//     sY = e.clientY;

//     this.onponintermove = function (e){
//         e = e || window.event;
//         var nX = e.clientX,
//         nY = e.clientY;
//         desX = nX - sX;
//         desY = nY - sY;
//         tX += desX * 0.1;
//         tY += desY * 0.1;
//         applyTransforms(odrag);
//         sX = nX;
//         sY = nY;
//     };

//     this.onpointerup = function () {
//         odrag.timer = setInterval(function(){
//             desX *= 0.95;
//             desY *= 0.95;
//             tX += desX * 0.1;
//             tY += desY * 0.1;
//             applyTransform(odrag);
//             playSpin(false);
//             if(Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5){
//                 clearInterval(odrag.timer);
//                 playSpin(true);
//             }
//         }, 17);
//         this.onponintermove = this.onpointerup = null;
//     };

//     return false
// };

// document.onmousewheel = function(e){
//     e = e || window.event;
//     var d = e.wheelDelta / 20 || -e.detail;
//     radius += d;
//     init(1);
// };

// =======================================================
// =======================================================
// =======================================================
// let fecha = "";
// let identificadorTiempoDeEspera;

// function temporizadorDeRetraso() {
// identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
// }

// function funcionConRetraso() {
// console.log("Han pasado 3 segundos.");
// }
// let identificadorIntervaloDeTiempo;

// function repetirCadaSegundo() {
//   identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1000);
// }

// function mandarMensaje() {
//   console.log("Ha pasado 1 segundo.");
// }
// let identificadorDeTemporizador;

// function temporizadorDeRetraso() {
//   identificadorDeTemporizador = setInterval(funcionConRetraso, 3000);
//   let segundo = setTimeout.repeat;
//   console.log(segundo);
// }

// function funcionConRetraso() {
//   console.log("Three seconds have elapsed.");
// }

// function borrarAlerta() {
//   clearTimeout(identificadorDeTemporizador);
// }
// // funcionConRetraso();
// // temporizadorDeRetraso();
// // repetirCadaSegundo();
// temporizadorDeRetraso();
// ================================================
// function iniciarTemporizador() {
//     var inicio = new Date().getTime(); // Obtiene la marca de tiempo actual
//     localStorage.setItem('inicioTemporizador', inicio); // Almacena la marca de tiempo en localStorage
//     actualizarTemporizador();
// }

// function actualizarTemporizador() {
//     var inicio = localStorage.getItem('inicioTemporizador'); // Obtiene la marca de tiempo almacenada
//     if (inicio) {
//         var tiempoActual = new Date().getTime();
//         var tiempoTranscurrido = tiempoActual - parseInt(inicio);
//         var segundosTranscurridos = Math.floor(tiempoTranscurrido / 1000);

//       // Muestra el tiempo transcurrido en el div
//         var contadorElement = document.getElementById('temporizador');
//         contadorElement.textContent = 'Tiempo transcurrido: ' + segundosTranscurridos + ' segundos';
//     }
// }

//   // Llama a la función de inicio cuando se carga la página por primera vez
//     if (!localStorage.getItem('inicioTemporizador')) {
//         iniciarTemporizador();
//     } else {
//         actualizarTemporizador(); // Actualiza el temporizador si ya está en progreso
//     }

//   // Actualiza el temporizador cada segundo (1000 milisegundos)
//     setInterval(actualizarTemporizador, 1000);

// ====================================================================================
//                                      Temporizador 
// function iniciarTemporizador() {
//     var tiempoInicial = 30 * 24 * 60 * 60; // 30 días en segundos
//     var tiempoRestante = localStorage.getItem('tiempoRestante');
    
//     if (!tiempoRestante) {
//         tiempoRestante = tiempoInicial;
//         localStorage.setItem('tiempoRestante', tiempoRestante);
//     }

//     actualizarTemporizador();
// }

// function actualizarTemporizador() {
//     var tiempoRestante = localStorage.getItem('tiempoRestante');

//     if (tiempoRestante > 0) {
//         tiempoRestante--;
//         localStorage.setItem('tiempoRestante', tiempoRestante);

//         var dias = Math.floor(tiempoRestante / (24 * 60 * 60));
//         var horas = Math.floor((tiempoRestante % (24 * 60 * 60)) / 3600);
//         var minutos = Math.floor((tiempoRestante % 3600) / 60);
//         var segundos = tiempoRestante % 60;

//         var contadorElement = document.getElementById('tiempo-restante');
//         contadorElement.textContent = `${dias} días ${horas < 10 ? '0' : ''}${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
//       setTimeout(actualizarTemporizador, 1000); // Llama a esta función nuevamente después de 1 segundo
//     } else {
//         localStorage.removeItem('tiempoRestante');
//         alert('¡Tiempo agotado!');
//     }
// }

//   // Llama a la función de inicio cuando se carga la página por primera vez
// if (!localStorage.getItem('tiempoRestante')) {
//     iniciarTemporizador();
// } else {
//     actualizarTemporizador(); // Actualiza el temporizador si ya está en progreso
// }
class Registrar {
    constructor(id, nombre, apellido, edad, ciudad, correo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad;
        this.correo = correo;
        this.activo = true;
    }
    activar() {
        this.activo = true;
    }
    desactivar() {
        this.activo = false;
    }
}
export function nuevo() {
    const personas = [
        new Registrar("1234567891","Kerly","Pozo",25,"Monte Verde","kerlyPozo@hotmail.com"),
        new Registrar("092708849-2","Pedro","Clemente",25,"Salinas","pedro_clemente48@hotmail.com"),
        new Registrar("1203264418","Anthony","Panchana",23,"Lbertad","Elhuevo@,xon")
    ]
    return personas
}

// Crea un Array de los objetos de las personas Registradas
let personas = nuevo();

const verRegistro = personas.forEach((a)=>console.log(`Su ID es: ${a.id} Su nombre es: ${a.nombre} Su apellido es: ${a.apellido} tiene la edad de ${a.edad} Vive en la ciudad de ${a.ciudad} y su correo es ${a.correo}`));
// console.log(personas);


// Funciones Anonimas
((function(d,w,c){
    console.log(d);
    console.log(w);
    console.log(c);
})(document,window,console));