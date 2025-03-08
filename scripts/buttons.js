const courses = [
    { id: "WDD 130", category: "WDD", credits: 3, completed: true },
    { id: "WDD 131", category: "WDD", credits: 3, completed: false },
    { id: "WDD 231", category: "WDD", credits: 3, completed: false },
    { id: "CSE 110", category: "CSE", credits: 2, completed: true },
    { id: "CSE 210", category: "CSE", credits: 3, completed: false },
    { id: "CSE 111", category: "CSE", credits: 2, completed: false },
];

// Función para generar la lista de cursos dinámicamente
function generateCourseList(category = "ALL") {
    const buttonsContainer1 = document.getElementById("buttonscontainer1");
    const buttonsContainer2 = document.getElementById("buttonscontainer2");

    buttonsContainer1.innerHTML = "";
    buttonsContainer2.innerHTML = "";

    let filteredCourses = courses;

    // Filtrar cursos según la categoría seleccionada
    if (category !== "ALL") {
        filteredCourses = courses.filter(course => course.category === category);
    }

    filteredCourses.forEach(course => {
        const button = document.createElement("button");
        button.textContent = `${course.id} (${course.credits} créditos)`;
        button.classList.add(course.category === "WDD" ? "coursebutton1" : "coursebutton2");

        // Marcar cursos completados
        if (course.completed) {
            button.classList.add("selected");
        }

        if (course.category === "WDD") {
            buttonsContainer1.appendChild(button);
        } else {
            buttonsContainer2.appendChild(button);
        }
    });

    // Calcular y mostrar los créditos filtrados
    calculateTotalCredits(filteredCourses);
}

// Función para calcular el total de créditos de los cursos filtrados
function calculateTotalCredits(filteredCourses) {
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("totalCredits").textContent = `Total Créditos: ${totalCredits}`;
}

// Eventos de botones para filtrar cursos y actualizar créditos
document.getElementById('wddbutton').addEventListener('click', function () {
    document.getElementById("buttonscontainer1").style.display = "block";
    document.getElementById("buttonscontainer2").style.display = "none";
    generateCourseList("WDD");
});

document.getElementById('csebutton').addEventListener('click', function () {
    document.getElementById("buttonscontainer1").style.display = "none";
    document.getElementById("buttonscontainer2").style.display = "block";
    generateCourseList("CSE");
});

document.getElementById('allbutton').addEventListener('click', function () {
    document.getElementById("buttonscontainer1").style.display = "block";
    document.getElementById("buttonscontainer2").style.display = "block";
    generateCourseList("ALL");
});

// Generar la lista de cursos y calcular créditos al cargar la página
generateCourseList();


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



