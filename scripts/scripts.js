let cyear = new Date()
let mydate = cyear.getFullYear();
document.getElementById("theyear").textContent = mydate;

document.getElementById("lastu").textContent = "Last Updated: " + document.lastModified;




document.getElementById('cseButton').addEventListener('click', function () {
    // Obtener todos los botones de curso CSE
    const courseButtons = document.querySelectorAll('.courseButton2');

    // Recorrer y agregarles o quitarles la clase 'selected2'
    courseButtons.forEach(button => {
        button.classList.toggle('selected2');
    });
});

document.getElementById('wddButton').addEventListener('click', function () {
    // Obtener todos los botones de curso WDD
    const courseButtons = document.querySelectorAll('.courseButton1');

    // Recorrer y agregarles o quitarles la clase 'selected1'
    courseButtons.forEach(button => {
        button.classList.toggle('selected1');
    });
});

document.getElementById('allButton').addEventListener('click', function () {
    // Seleccionar todos los botones de ambos grupos (WDD y CSE)
    const buttons = document.querySelectorAll('.courseButton1, .courseButton2');

    // Verificar si todos los botones ya están seleccionados (si tienen la clase 'selected')
    let allSelected = true;
    buttons.forEach(button => {
        if (!button.classList.contains('selected')) {
            allSelected = false;
        }
    });

    // Si no todos están seleccionados, los seleccionamos, si ya lo están, los deseleccionamos
    buttons.forEach(button => {
        if (allSelected) {
            button.classList.remove('selected'); // Deseleccionamos todos
        } else {
            button.classList.add('selected'); // Seleccionamos todos
        }
    });
});


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('_______', () => {
    navigation._______.toggle('_______');
    hamButton.classList.toggle('open');
});
