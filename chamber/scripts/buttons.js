document.getElementById('wddbutton').addEventListener('click', function () {
    // Obtener todos los botones WDD
    const wddButtons = document.querySelectorAll('.coursebutton1');

    // Alternar la clase 'selected' en cada botón WDD
    wddButtons.forEach(button => {
        button.classList.toggle('selected');
    });
});

// Seleccionar los botones CSE
document.getElementById('csebutton').addEventListener('click', function () {
    // Obtener todos los botones CSE
    const cseButtons = document.querySelectorAll('.coursebutton2');

    // Alternar la clase 'selected' en cada botón CSE
    cseButtons.forEach(button => {
        button.classList.toggle('selected');
    });
});
// Seleccionar todos los botones (ALL)
document.getElementById('allbutton').addEventListener('click', function () {
    // Obtener todos los botones WDD y CSE
    const allButtons = document.querySelectorAll('.coursebutton1, .coursebutton2');

    // Verificar si todos los botones están seleccionados
    const allSelected = Array.from(allButtons).every(button => button.classList.contains('selected'));

    // Alternar la clase 'selected' en todos los botones
    allButtons.forEach(button => {
        button.classList.toggle('selected', !allSelected); // Si están todos seleccionados, los deseleccionamos, si no, los seleccionamos
    });
});
