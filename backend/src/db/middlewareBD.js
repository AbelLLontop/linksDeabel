const connectionBD = require('./config');

const middlewareBd = (req, res, next) => {
    connectionBD.then((db) => {
        console.log("HUBO UNA CONEXION A LA BASE DE DATOS")
      next();
    })
    .catch((err) => {
      res.json({error:'HUBO UN ERROR AL CONECTAR LA BASE DE DATOS'});
})};

module.exports = middlewareBd;