function verificarCaptcha3(respuesta) {
    let res_correcta = 720;
    respuesta = parseInt(respuesta);
    return (res_correcta == respuesta);
}