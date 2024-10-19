function validar() {
    let nombre = validarNombre();
    let edad = validarEdad();
    let email = validarEmail();
    let profesion = validarProfesion();

    if (nombre && edad && email && profesion) {
        document.frm.submit();
    }
}

function mostrar_error(elem, id, msg){
    elem.classList.remove('is-valid');
    elem.classList.add('is-invalid');
    document.getElementById(id).innerHTML = msg;    
}

function validarNombre() {
    let elem = document.frm.nombre;
    if (elem.value == 0){
        mostrar_error(elem, 'feedback-nombre', 'Debe ingresar su nombre!');
        return false;
    }

    if (!isNaN(elem.value)){
        mostrar_error(elem, 'feedback-nombre', 'Nombre inválido!');
        return false;
    }
    

    if (elem.value.length < 3){
        mostrar_error(elem, 'feedback-nombre', 'Su nombre debe tener por lo menos 3 caracteres!');
        return false;
    }

    elem.classList.add('is-valid');
    elem.classList.remove('is-invalid');
    return true;
}

function validarEdad() {
    let elem = document.frm.edad;
    if (elem.value.length == 0) {
        mostrar_error(elem, 'feedback-edad', 'Debe ingresar su edad!');
        return false;
    }

    if (elem.value < 18) {
        mostrar_error(elem, 'feedback-edad', 'Debe ser mayor de edad para registrarse!');
        return false;
    }

    if (elem.value >= 100) {
        mostrar_error(elem, 'feedback-edad', 'Su edad debe ser menor a 100 años!');
        return false;
    }
    
    elem.classList.add('is-valid');
    elem.classList.remove('is-invalid');
    return true;
}

function validarEmail() {
    let elem = document.frm.email;
    if (elem.value.length == 0) {
        mostrar_error(elem, 'feedback-email', 'Debe ingresar su email!');
        return false;
    }

    if (!isNaN(elem.value)){
        mostrar_error(elem, 'feedback-email', 'Email inválido!');
        return false;
    }
    
    elem.classList.add('is-valid');
    elem.classList.remove('is-invalid');
    return true;
}

function validarProfesion() {
    let elem = document.frm.profesion;
    if (elem.value.length == 0) {
        mostrar_error(elem, 'feedback-profesion', 'Debe ingresar su profesión!');
        return false;
    }

    if (!isNaN(elem.value)){
        mostrar_error(elem, 'feedback-profesion', 'Profesión inválida!');
        return false;
    }
    
    elem.classList.add('is-valid');
    elem.classList.remove('is-invalid');
    return true;
}

(function() {
    const btnEliminar = document.querySelectorAll('.btnEliminar');

    btnEliminar.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const confirmacion = confirm('¿Está seguro de eliminar este usuario?');
            if (!confirmacion) {
                e.preventDefault();
            }
        });
    });
})();