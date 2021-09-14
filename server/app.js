
const express = require('express');
const app = express();
const sequelize = require('./database/db');
const { Pruebauser } = require('./database/models/Pruebauser');

//setting
const port = 3000 || process.env.PORT

//Middleware express para llenar el body
app.use(express.json());
app.use(express.urlencoded({extended: false}))



//importar las rutas creadas
app.get('/', (req, res) => {
     res.json({
    msg: "text"
  })
//   Pruebauser.create({
//     firstName:'cesar',
//     lastName: 'caviedes'  })
//       .then(user => {
//           res.json(user);
//       })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);

  //conectar base de datos
  sequelize.sync( {force: false}).then(() => {
      console.log('Conection to the DB Success');
  }).catch(error => {
      console.log('An error has been found: ',error)
  })
})
