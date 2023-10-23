const imagenes = document.querySelectorAll('.Galeria .contenedor-imagen');
const imagenModal = document.getElementById('imagen-modal');

imagenes.forEach((imagen)=>{
    imagen.addEventListener('click', ()=>{
        const ruta = imagen.querySelector('imagen').src;
        imagenModal.src = ruta;
    });
});