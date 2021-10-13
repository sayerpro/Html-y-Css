let arregloDominios = [];
let ocurrencias = 0;

function tomarDatosForm() {
    const nuevoArreglo = {
        nombre: document.getElementById("nombres_usuario").value,
        usuario: document.getElementById("usuario").value,
        contrasena: document.getElementById("contraseña").value,
        telefono: document.getElementById("telefono_usuario").value,
        direccion: document.getElementById("campoDireccion").value,
        email: document.getElementById("email_usuario").value,
        confirmacionEmail: document.getElementById("confirmar_email").value
    };
    ocurrencias = retornarCuenta(buscarDominio(nuevoArreglo));
}

function buscarDominio(registros) {
    if (registros.email.includes("upb.edu.co")) {
        arregloDominios.push(registros);
        console.table(arregloDominios);
    }
    return arregloDominios;
}

function retornarCuenta(datosForm) {
    let contador = 0;
    if (datosForm.length) {
        for (let i = datosForm.length - 1; i >= 0; i--) {
            contador = datosForm[i].nombre.includes("a") && datosForm[i].telefono.endsWith("4") || datosForm[i].telefono.endsWith("0") ? contador + 1 : contador;
        }
    }
    return contador;
}

module.exports.tomarDatosForm = tomarDatosForm;
module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;