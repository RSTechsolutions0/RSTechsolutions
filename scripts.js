      function changePage(id) {
            var sections = document.getElementsByClassName('section');
            for (var i = 0; i < sections.length; i++) {
                sections[i].style.display = 'none';
                sections[i].classList.remove('active');
            }
            document.getElementById(id).style.display = 'block';
            document.getElementById(id).classList.add('active');
        }
        document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    this.reset(); // Limpia los campos del formulario
});
// Bloquear clic derecho en toda la página
document.addEventListener('contextmenu', event => event.preventDefault());

// Bloquear atajos de teclado comunes (F12, Ctrl+U, Ctrl+Shift+I)
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 123 || (event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.keyCode == 85)) {
        event.preventDefault();
        return false;
    }
});


function changePage(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}


