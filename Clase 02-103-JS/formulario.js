// Almancenar variables en un arreglo

let frutas = ["Manzana", "Pera"];

frutas.push("Naranja");

console.log(frutas);

let verduras = ["Apio", "Lechuga"];

verduras.unshift("Repollo");

console.log(verduras);


// const mensaje = document.getElementById("mensaje");
// //mensaje.innerHTML = "<h1> Bienvenidos a Frontend</h1>";
// mensaje.innerHTML = `<h2> Bienvenidos a Frontend</h2>
//                      <p>Nombre: Eric</p>
//                      <p>Asignatura: Frontend</p>`;


const btnValidar = document.getElementById("btnValidar");
const contenedorErrores = document.getElementById("errores");


btnValidar.addEventListener("click", () => {

    //Limpiar contenedor
    contenedorErrores.innerHTML = "";

    //Obtener valor campo nombre
    const nombre = document.getElementById("nombre").value.trim();
    console.log(nombre);
    const correo = document.getElementById("correo").value.trim();

    const carrera = document.getElementById("carrera").value;

    const semestre = document.getElementById("semestre").value;

    const promedio = document.getElementById("promedio").value;

    const fechaNacimiento = document.getElementById("fechaNacimiento").value;


    //arreglo vacio va almacenar los errores del usuario

    let errores = [];

    //Validaciones
    //Validacion nombre vacio
    if (nombre === "") {
        errores.push("Debes ingresar el nombre");
    }
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo === "") {
        errores.push("Debes ingresar un correo electrónico");
    }else if(!regexCorreo.test(correo)){
        errores.push("El correo es inválido");

    }

    if (carrera === "") {
        errores.push("Debes ingresar una carrera");
    }

    if(semestre ==="") {
        errores.push("Debes ingresar un semestre");
    }

    if(promedio ==="") {
        errores.push("Debes ingresar un promedio");
    }else if (parseFloat(promedio) < 1 || parseFloat(promedio) >7 ) {
        errores.push("El promedio debe estar entre 1.0 y 7.0");
    }

    if (fechaNacimiento ===""){
        errores.push("Debes seleccionar una fecha de nacimiento");
    }

    if(errores.length > 0){

        contenedorErrores.innerHTML = `
            <ul>
               ${errores.map(error => `<li>${error} </li>`).join("")} 
            </ul>

        `;

        return;
    }

    //Crear un objeto

    const alumno = {
        nombre, 
        correo, 
        carrera, 
        semestre, 
        promedio, 
        fechaNacimiento
    };

    //Guardar en Localstorage
    localStorage.setItem(
        "alumno",
        JSON.stringify(alumno)

       );

    window.location.href ="perfil.html"

});


