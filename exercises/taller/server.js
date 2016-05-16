var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;

var router = express.Router();

var Biblioteca = require('./models/biblioteca');

router.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

router.route('/libros')
    // POST http://localhost:8080/api/libros
    .post(function(req, res) {
        
        Biblioteca.agregar(req.body.nombre, req.body.anio, req.body.autor);
        
        res.json({ message: 'libro agregado' });
    })
    // GET http://localhost:8080/api/libros
    .get(function(req, res) {
        res.json(Biblioteca.libros);
    });

router.route('/libros/:libro_id')

    // GET http://localhost:8080/api/libros/:libro_id
    .get(function(req, res) {
        var _id = parseInt(req.params.libro_id);

        res.json(Biblioteca.buscar(_id));
    })
    .put(function(req, res) {
        var _id = parseInt(req.params.libro_id);

        var respuesta = Biblioteca.actualizar(_id, req.body.nombre);
        if(respuesta) {
            res.json({ message: 'Libro actualizado' });
        } else {
            res.json({ message: 'Libro no encontrado' });
        }
    })
    .delete(function(req, res) {
        var _id = req.params.libro_id;
        var respuesta = Biblioteca.eliminar(_id);
        if(respuesta) {
            res.json({ message: 'libro eliminado' });
        } else {
            res.json({ message: 'Libro no encontrado' });
        }
    });

app.use('/api', router);

app.listen(port);
console.log('El server esta corriendo en el puerto : ' + port);
