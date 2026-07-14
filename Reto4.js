const pantalla = document.getElementById('ID');

function boton(valor) {
    pantalla.value += valor;
}

function borrar() {
    pantalla.value = '';
}

function resultado() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = 'Error';
        setTimeout(borrar, 1000);
    }
}

function resultado() {
    try {
        let res = eval(pantalla.value);
        
        // Verificamos si el resultado es Infinity o -Infinity
        if (res === Infinity || res === -Infinity) {
            pantalla.value = 'Error';
            setTimeout(borrar, 1000);
        } else {
            pantalla.value = res;
        }
    } catch (error) {
        pantalla.value = 'Error';
        setTimeout(borrar, 1000);
    }
}