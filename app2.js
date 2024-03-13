const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector("#copiar")
const copiarMensaje = document.querySelector("#copiarMensaje");
const pegar = document.querySelector("#btn-pegar");
const valorCopiado = document.querySelector("#text-area");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function encriptar(strigEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufar"]];
    strigEncriptada = strigEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (strigEncriptada.includes(matrizCodigo[i][0])) {
            strigEncriptada = strigEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return strigEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
}
function desencriptar(strigDesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufar"]];
    strigDesencriptada = strigDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (strigDesencriptada.includes(matrizCodigo[i][1])) {
            strigDesencriptada = strigDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return strigDesencriptada;
}

copiar.addEventListener('click', () => {
    navigator.clipboard.writeText(copiarMensaje.value);
  });

  pegar.addEventListener('click', () => {
    navigator.clipboard.readText().then(v => valorCopiado.value = v);
  });

  
