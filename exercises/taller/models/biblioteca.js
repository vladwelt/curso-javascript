var biblioteca = {
    nombre : "La paz",
    libros : [{
        id : 1,
        nombre : "Good Parts",
        anio : 2009,
        autor : {
            nombre : "Douglas Croford"
        }
    },{
        id : 2,
        nombre : "Learn Javascript",
        anio : 2012,
        autor : {
            nombre : "Stoyan",
        }
    }],
    agregar : function(nombre, anio, autor) {
        var id = this.libros[this.libros.length-1].id + 1;
        var libro = {
            id : id,
            nombre : nombre,
            anio : anio,
            autor : {
                nombre : autor
            }
        }
        console.log("LIBRO CREADO");
        console.log(libro);
        this.libros.push(libro);
    },
    buscar : function(id) {
        var libro = {};
        for(var i = 0; i < this.libros.length ; i++) {
            if(this.libros[i].id === id){
                libro = this.libros[i];
                break;
            }
        }
        return libro;
    },
    actualizar : function(id, nombre) {
        for(var i = 0; i < this.libros.length ; i++) {
            if(this.libros[i].id === id){
                this.libros[i].nombre = nombre;
                return true;
            }
        }
        return false;
    },
    eliminar : function(id) {
        for(var i = 0; i < this.libros.length ; i++) {
            if(this.libros[i].id === id){
                this.libros.splice(i,1);
                return true;
            }
        }
        return false;
    }
}

module.exports = biblioteca;
