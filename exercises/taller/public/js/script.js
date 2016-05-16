console.log("se cargo!");
var get = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(window.location.origin + '/api/libros'));
    xhr.onload = function() {
        console.log(xhr.responseText);
    };
    xhr.send();
}

var post = function(nombre, anio, autor){
    var xhr = new XMLHttpRequest();
    xhr.open('POST',encodeURI(window.location.origin + '/api/libros'));
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("Peticion exitosa " + xhr.responseText);
        }
        else if (xhr.status !== 200) {
            console.log("Peticion rechazada");
        }
    };
    xhr.send(encodeURI('nombre=' + nombre+'&anio=' + anio +'&autor='+autor));
}

var put = function(id, nombre) {
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', window.location.origin + '/api/libros/' + id);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    };
    //xhr.send(JSON.stringify({
    //    nombre : nombre
    //}));
    xhr.send(encodeURI('nombre=' + nombre));
}

var remove = function(id) {
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', encodeURI(window.location.origin + '/api/libros/' + id));
    xhr.onload = function() {
        console.log(xhr.responseText);
    };
    xhr.send();
}
