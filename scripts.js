function calcularPromedio() {
    const numAlumnos = 3;
    const numAsignaturas = 3;

    const tabla = document.getElementById('tabla-promedio').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';

    for (let i = 0; i < numAlumnos; i++) {
        let sumaNotas = 0;

        let row = tabla.insertRow();
        let cellAlumno = row.insertCell(0);
        cellAlumno.textContent = `Alumno ${i + 1}`;

        for (let j = 0; j < numAsignaturas; j++) {
            let nota = parseFloat(prompt(`Ingrese la nota del Alumno ${i + 1} en la Asignatura ${j + 1}:`));

            if (isNaN(nota)) {
                alert('Por favor, ingrese un número válido.');
                return;
            }

            sumaNotas += nota;

            let cellNota = row.insertCell(j + 1);
            cellNota.textContent = nota;
        }

        let promedio = sumaNotas / numAsignaturas;
        let cellPromedio = row.insertCell(numAsignaturas + 1);
        cellPromedio.textContent = promedio.toFixed(2);
    }
}
