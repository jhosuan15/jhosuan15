function actualizarClases() {
    const contenedores = document.querySelectorAll('.container');

    contenedores.forEach(contenedor => {
        const arrow = contenedor.querySelector('.arrow');

        if (window.innerWidth <= 767) {
            if (contenedor.classList.contains('left-container')) {
                contenedor.classList.remove('left-container');
                contenedor.classList.add('right-container');
                
                if (arrow.classList.contains('left-container-arrow')) {
                    arrow.classList.remove('left-container-arrow');
                    arrow.classList.add('right-container-arrow');
                }
            }
        } else {
          
        }
    });
}

// Llama a la función al cargar la página y al cambiar el tamaño de la pantalla
window.addEventListener('load', actualizarClases);
window.addEventListener('resize', actualizarClases);
