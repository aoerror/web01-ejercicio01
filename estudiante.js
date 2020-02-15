var db = require('./db_conexion.js');

Estudiante.getEstudiantes = function (resultado) {
db.query("Select * from estudiante", function (err, res) {             
        if(err) {
            console.log("error: ", err);
            return null;
        }
        else{
            return res;
        }
    });   
};

Estudiante.getEstudiantesId = function (estudianteId,resultado) {
    db.query("Select * from estudiante ?", estudianteId,  function (err, res) {             
            if(err) {
                console.log("error: ", err);
                return null;
            }
            else{
                return res;
            }
        });   
    };
    



module.exports = Estudiante;