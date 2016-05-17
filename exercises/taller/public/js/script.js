var get = function(ejecutor) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(window.location.origin + '/api/libros'));
    xhr.onload = function() {
        console.log("GET");
        ejecutor(xhr.responseText);
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

var remove = function(id, ejecutor) {
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', encodeURI(window.location.origin + '/api/libros/' + id));
    xhr.onload = function() {
        ejecutor();
        console.log(xhr.responseText);
    };
    xhr.send();
}


var miboton = document.getElementById("miboton");
var milista = document.getElementById("milista");
var show  = function() {
    var buttons = document.getElementsByClassName("item");
    for(var i=0; i< buttons.length; i++) {
        buttons[i].onclick = function() {
            var self = this;
            var id = this.getAttribute("id");
            console.log(id);
            remove(id, function() {
               self.parentNode.outerHTML = "";
            });
        }
    }
}

miboton.onclick = function(){
    get(function(datos){
        milista.innerHTML = "";
        var data = JSON.parse(datos);
        console.log(data);
        for(var i=0; i<data.length; i++){
            var libro = data[i];
            console.log(data[i]);
            var item = document.createElement("li");
            item.innerHTML = libro.nombre +
                '<button class="item" id="'
                + libro.id +'" >x</button>';
            milista.appendChild(item);
        }
        show();
    });
}
