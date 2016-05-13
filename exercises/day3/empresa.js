var biblioteca = {
    nombre : "Biblioteca La paz",
    libros : {
        "D123" : {
            code : "D123",
            nombre : "Don quijote",
            anio : 2019,
            prestado : false,
        },
        "G001" : {
            code : "G001",
            nombre : "Good Parts",
            anio : 2010,
            prestado : false,
        }
    },
    agregar : function(nuevo_code, nuevo_nombre, nuevo_anio) {
        var nuevo_libro = {
            code : nuevo_code,
            nombre : nuevo_nombre,
            anio : nuevo_anio,
            prestado : false;
        }
        this.libros[nuevo_code] = nuevo_libro;
    },
    eliminar : function(code) {
        delete this.libros[code];
    },
    prestar : function(code) {
        this.libros[code].prestado = true;
    },
    estado_libro : function(code) {
        return this.libros[code].prestado;
    }
}
