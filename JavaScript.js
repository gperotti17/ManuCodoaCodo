const ticket = 200;

let dtoEstudiante, dtoTrainee, dtoJunior;

dtoEstudiante = 0.80;
dtoTrainee = 0.50;
dtoJunior = 0.15;

let formulario,nombre,apellido,correo,cantidad,categoria,total_p,btnBorrar,btnResumen;

formulario = document.querySelector('#formulario');
cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
total_p = document.querySelector('#totalAPagar');
btnResumen = document.querySelector('#resumen');
btnBorrar = document.querySelector('#borrar');

function calcularPago(){

    let total = cantidad.value * ticket;
    switch (categoria.value){
        case "estudiante":
        total = total - (total * dtoEstudiante)
        break;

        case "trainee":
        total = total - (total * dtoTrainee)
        break;

        case "junior":
        total = total - (total * dtoJunior)
        break;
          }

          total_p.innerHTML = `Total a Pagar: $ ${total}`;

}

btnResumen.addEventListener('click', (event) => {
    event.preventDefault();
    calcularPago();
})


/*const botonEnviar = document.querySelector('#boton');

function mostrarAlerta (){
    alert ('hola mundo')
}


botonEnviar.addEventListener('click', mostrarAlerta)*/



