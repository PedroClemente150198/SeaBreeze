const botonMenu = document.getElementById('boton-menu');

const menuLista = document.getElementById('menu');
const barra = document.getElementById('bacground');

botonMenu.addEventListener('click', function() {
    menuLista.classList.toggle('active');
});
botonMenu.addEventListener('click', function() {
    barra.classList.toggle('active');
});