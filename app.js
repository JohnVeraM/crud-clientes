const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const clientesRoutes = require('./routes/clientes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use('/clientes', clientesRoutes);

app.get('/', (req, res) => {
  res.redirect('/clientes/vista');
});

app.listen(3000, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

