class Cliente {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}

let arrayClientes = [];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");

let nombreI = formulario.cliente[1].value;
let emailI = formulario.cliente[3].value;
let passwordI = formulario.cliente[5].value;

let contenedor = document.querySelector("#clienteIngresado");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

miFormulario.addEventListener("submit", agregarClientes);
btnMostrar.addEventListener('click', MostrarTodosClientes);

inputNombre.focus();

function validarForm() {
    nombreI = formulario.cliente[1].value;
    emailI = formulario.cliente[3].value;
    passwordI = formulario.password[5].value;
    console.log(nombreI);
    console.log(emailI);
    console.log(passwordI);

    if (nombreI == '' || emailI == '' || passwordI == '') {
        alert('ERROR - Debe completar todos los campos para continuar');
        bandera = false;
    } else {
        bandera = true;
    }
}

function agregarClientes(e) {
    e.preventDefault();
    validarForm();
    if (bandera == true) {
        let opcion = confirm("Esta seguro de inscribirse como Cliente?");
        if (opcion == true) {
            let formulario = e.target
            arrayClientes.push(new Cliente(nombreI, emailI, passwordI));
        } else {
            alert('No se agregará el usuario');
        }

        formulario.cliente[1].value = '';
        formulario.cliente[3].value = '';
        formulario.cliente[5].value = '';
        contenedor.innerHTML = '';
        AgregarAlDom();
        inputNombre.focus();
    } else {
        inputNombre.focus();
    }
}

function AgregarAlDom() {
    contenedor.innerHTML = `<h3> Ultimo cliente ingresado: </h3>
    <p><strong> Nombre: </strong> ${nombreI}</p>
    <p><strong> Email: </strong> ${emailI}</p>
    <p><strong> Password: </strong> ${passwordI}</p>
    <hr>`;
}

function MostrarTodosClientes(e) {
    e.preventDefault();
    let i = 0;
    displayTodos.innerHTML = '<h3> Listado de Clientes: </h3>';
    for (const cliente of arrayClientes) {
        displayTodos.innerHTML += `
        <p><strong> Nombre: </strong> ${cliente.nombre}</p>
        <p><strong> Email: </strong> ${cliente.email}</p>
        <p><strong> Password: </strong> ${cliente.password}</p>
        <hr>`
    }
}