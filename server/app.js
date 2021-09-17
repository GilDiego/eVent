
const express = require('express');
const cors = require('cors')
const app = express();
const sequelize = require('./database/db');
require('./database/relations');

//setting
const port = 3001 || process.env.PORT

//Middleware express para llenar el body
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())



//importar las rutas creadas
app.use('/test', require('./routes/rutaprueba'));//ruta de prueba

//Event Routes
app.use('/api', require('./routes/event'));

//Cloudinary Routes
app.use('/cloudinary',require('./routes/cloudinary'));




app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);

  //conectar base de datos
  sequelize.sync( {force: false}).then(() => {
      console.log('Conection to the DB Success');
  }).catch(error => {
      console.log('An error has been found: ',error)
  })
})
