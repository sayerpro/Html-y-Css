function buscarDominio(arreglo) {
    let emailsFiltrados = []
    for (let i in arreglo) {
        if (arreglo[i].correo.includes("upb.edu.co")) {
            emailsFiltrados.push(arreglo[i])
        }
    }
    emailsFiltrados.push("upb.edu.co");
    return emailsFiltrados
}


function verificarInicioSesion3(correo, contrasena, arreglo) {
    for (let i in arreglo) {
        if (arreglo[i].correo === correo || arreglo[i].contrasena === contrasena) {
            return verificarCaptcha3(prompt("¿Cuál es el factorial de 6?"));
        }
    }
}

function verificarCaptcha3(respuesta) {
    return 720 === parseInt(respuesta);
}

module.exports.verificarInicioSesion3 = verificarInicioSesion3
module.exports.verificarCaptcha3 = verificarCaptcha3
module.exports.buscarDominio = buscarDominio