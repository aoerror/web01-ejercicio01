var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/listar/:id/:nombre', function(req, res, next) {
    var id = req.params.id;
    var nombre = req.params.nombre;
    console.log (id);
    
    res.format(
        {'text/html': function(){
            res.render('index', { title: 'Listar ' + id 
                        + "---"+ nombre }
                );
        },
    
        'application/json': function(){
            res.json(
                {"response": "Ok"}
            );
        }
    });
});

router.post('/nuevo', function(req, res, next) {
    //res.render('index', { title: 'Nuevo' });
    res.json(
            {"response": "Ok"}
        );
});

router.put('/actualizar', function(req, res, next) {
   // res.render('index', { title: 'Actualizar' });
   var id = req.body.id;
   var nombre = req.body.nombre;
   console.log (id);
    res.json(
        {   "id": id ,
            "message": "Se ha actualizado el dato"
        }
    );
});

router.delete('/borrar', function(req, res, next) {
    //res.render('index', { title: 'Borrar' });
    var id = req.body.id;
    console.log (id);
     res.json(
         {   "id": id ,
             "message": "Se ha borrado el dato"
         }
     );
});
             //   DOCKER > Agregar una imagen con 
             // NODEJS,
            //     EXPRESS,
            //    MongoDB /Postgresql 










module.exports = router;
