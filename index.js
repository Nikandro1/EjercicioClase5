function validar(){
    var nombre = document.getElementById("nombre").value
    var email = document.getElementById("mail").value
    var mensaje = document.getElementById("mensaje").value

    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert("Campo Nombre incompleto");
        return false
    }
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
        alert("Campo email incompleto o incorrecto");
        return false;
    }
    if (mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)) {
        alert("Campo mensaje incompleto");
        return false
    }
}