let objeto = [{
    nombre: "Sayer",
    usuario: "TheSrSmith",
    contrasena: "123",
    telefono: "0123456789",
    direccion: "Cra # 70 cakke 20",
    correo: "sayerpro.op7@upb.edu.co",
    confirmacionCorreo: "sayerpro.op7@upb.edu.co"
}];

function buscarDominio() {
    let arregloDominios = [];
    objeto.forEach(element => {
        if (element.correo.includes("@upb.edu.co") || element.correo.includes("upb.edu.co")) {
            arregloDominios.push(element);
        }
    });
    return arregloDominios;
}

function retornarCuenta(args) {
    let contador = 0;
    if (args.length) {
        for (let i = args.length - 1; i >= 0; i--) {
            contador = args[i].nombre.includes("a") && args[i].telefono.endsWith("4") || args[i].telefono.endsWith("0") ? contador + 1 : contador;
        }
    }
    return contador;
}

module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;