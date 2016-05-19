var get = function(ejecutor) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(window.location.origin + '/api/libros'));
    xhr.onload = function() {
        console.log("GET");
        ejecutor(xhr.responseText);
    };
    xhr.send();
}

var post = function(nombre, anio, autor, ejecutor){
    var xhr = new XMLHttpRequest();
    xhr.open('POST',encodeURI(window.location.origin + '/api/libros'));
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            ejecutor(xhr.responseText);
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
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    };
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

var milista = document.getElementById("milista");
var boton_formulario = document.getElementById("submit");

var show  = function() {
    get(function(datos) {
        milista.innerHTML = "";
        var data = JSON.parse(datos);
        for(var i=0; i<data.length; i++){
            var libro = data[i];
            var item = document.createElement("li");
            item.innerHTML = libro.nombre 
                + '<button class="item" id="'
                + libro.id +'" >x</button>';
            milista.appendChild(item);
        }
        var buttons = document.getElementsByClassName("item");
        for(var i=0; i< buttons.length; i++) {
            buttons[i].onclick = function() {
                var self = this;
                var id = this.getAttribute("id");
                remove(id, function() {
                   self.parentNode.outerHTML = "";
                });
            }
        }
    });

}

boton_formulario.onclick = function() {
    var datos = document.forms["miform"].elements;
    var nombre = datos.nombre.value; 
    var anio = datos.anio.value;
    var autor = datos.autor.value;
    post(nombre, anio, autor, function() {
        document.forms["miform"].elements.nombre.value = "";
        document.forms["miform"].elements.anio.value = "";
        document.forms["miform"].elements.autor.value = "";
        console.log("exitosa!");
        show();
    });
}
//Hay muchas formas de resolver....
