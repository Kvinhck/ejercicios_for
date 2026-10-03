function validarNumero() {
  let texto = document.getElementById("txtNumero");
  let ayuda = document.getElementById("txtAyuda");
  let valorStr = texto.value.trim();
  let mensaje = "";

  if (valorStr.length === 0) {
    mensaje = "Falta escribir el número";
  } else if (isNaN(valorStr) || valorStr.indexOf(".") !== -1) {
    mensaje = "Solo se aceptan números enteros";
  } else {
    let valorNum = parseInt(valorStr);
    if (valorNum < 1 || valorNum > 100) {
      mensaje = "Debe estar entre 1 y 100";
    }
  }

  if (mensaje === "") {
    ayuda.textContent = "Número válido, listo para generar";
    ayuda.classList.remove("ayuda-error");
  } else {
    ayuda.textContent = mensaje;
    ayuda.classList.add("ayuda-error");
  }

  return mensaje === "";
}

function generarTablas() {
  if (!validarNumero()) {
    return;
  }
  let texto = document.getElementById("txtNumero");
  let textoStr = texto.value;
  let numTexto = parseInt(textoStr);
  let desde = 1;
  let hasta = 12;
  let conte = document.getElementById("txtTabla");
  let titulo = document.getElementById("txtTitulo");
  let contenido = "";

  titulo.innerHTML = "Tabla del " + numTexto;
  for (let i = desde; i <= hasta; i++) {
    let resultado = numTexto * i;
    contenido = contenido + "<tr><td> " + numTexto + " x " + i + " = " + resultado + " </tr></td>";
  }
  conte.innerHTML = contenido;
}
