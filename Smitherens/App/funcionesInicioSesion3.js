function buscarDominio(arreglo) {
    var correosupb = []
    for (var i in arreglo) {
        if (arreglo[i].correo.includes("upb.edu.co")) {
            correosupb.push(arreglo[i])
        }
    }
    correosupb.push('upb.edu.co')
    return correosupb
}


function verificarInicioSesion3(correo, contrasena, arreglo) {
    for (var i in arreglo) {
        if ((arreglo[i].correo == correo) || (arreglo[i].contrasena == contrasena)) {
            var resultado = prompt("¿Cusanto es 321 - 16?");
            verificarCaptcha3(resultado);
        }
        return true
    }
}

function verificarCaptcha3(respuesta) {
    if (respuesta == 305) {
        return true
    }
    return false
}


module.exports.verificarInicioSesion3 = verificarInicioSesion3
module.exports.verificarCaptcha3 = verificarCaptcha3
module.exports.buscarDominio = buscarDominio