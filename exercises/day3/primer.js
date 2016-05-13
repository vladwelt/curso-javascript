var persona = {
    nombre : "Vladimir",
    ap_paterno : "Cespedes",
    ap_materno : "Lopez",
    ci : 0,
    juguetes : ["yoyo","cartas","trompo"],
    nombre_completo : function(){
        console.log(this.nombre + " "
                + this.ap_paterno + " "
                + this.ap_materno );
    },
    agregar_juguete : function(nombre_juguete){
        this.juguetes.push(nombre_juguete);
    },
    imprimir_juguetes : function(){
        for(var i = 0; i<this.juguetes.length;i++){
            console.log(this.juguetes[i]);
        }
    },
    set_nombre : function(nombre){
        this.nombre = nombre;
    },
    get_nombre : function() {
        console.log(this.nombre);
    },
    set_ci: function(nuevo_ci) {
    }
}
persona.set_nombre("Juan");
persona.nombre_completo();



var Persona = function(nm, ap, am){
    var self = this;
    this.nombre = nm || "Vladimir";
    this.ap_paterno = ap || "Cespedes";
    this.ap_materno = am || "Lopez";
    this.juguetes = [];
    this.nombre_completo = function(){
        console.log(self.nombre + " " +
                    self.ap_paterno + " "+ 
                    self.ap_materno);
    }
    this.get_nombre = function() {
        return self.nombre;
    }
    this.set_nombre = function(nombre) {
        self.nombre = nombre;
    }
}
var yo = new Persona("Juan", "Perez");
yo.nombre_completo();
