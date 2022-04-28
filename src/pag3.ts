const btnEnv = document.getElementById("btnEnviar");
const dato = document.getElementById("dato");
const dato2 = document.getElementById("dato2");
const dato3 = document.getElementById("dato3");

function montrarDatosIngresados() {
  let nombre = dato.value;
  let email = dato2.value;
  let comentario = dato3.value;
  console.log(nombre);
  console.log(email);
  console.log(comentario);
}

btnEnv.addEventListener("click", montrarDatosIngresados);
