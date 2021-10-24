function validar_telefono(telefono) {
    let validacion = false;
    console.log(telefono.valueOf());
    if (telefono.length > 6 && telefono.length <= 10) {
        const patron = /^[0-9]*$/;
        validacion = patron.test(telefono);
    }
    return validacion;
}

function validar_direccion(direccion) {
    let validacion = false;
    console.log(direccion.valueOf());
    if (direccion.length >= 7 && direccion.length <= 30) {
        validacion = direccion.indexOf("Carrera") === 0 || direccion.indexOf("Transversal") === 0 || direccion.indexOf("Circular") === 0 || direccion.indexOf("Calle") === 0 && direccion.indexOf("#") > -1 ? true : false;
    }
    return validacion;
}

module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion;