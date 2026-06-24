

const alumno = JSON.parse(localStorage.getItem("alumno"));



document.getElementById("nombreAlumno").textContent = alumno.nombre;

document.getElementById("correoAlumno").textContent = alumno.correo;

document.getElementById("carreraAlumno").textContent = alumno.carrera;

document.getElementById("semestreAlumno").textContent = alumno.semestre;

document.getElementById("promedioAlumno").textContent = alumno.promedio;

let estado = "";

if(parseFloat(alumno.promedio)>= 5.5){
    estado = "Alumno destacado";
}else if (parseFloat(alumno.promedio)>= 4.0) {  
    estado = "Alumno Regular";
}else {
    estado = "Alumno en riesgo académico";
}

document.getElementById("estadoAlumno").textContent = estado;

document.getElementById("btnCerrar").addEventListener("click", () => {
    localStorage.removeItem("alumno");
    window.location.href = "formulario.html";
});


document.getElementById("btnVolver").addEventListener("click", () => {
    window.location.href = "formulario.html";
});
