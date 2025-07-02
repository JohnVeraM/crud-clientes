const express = require('express');
const app = express();
const clientesRoutes = require('./routes/clientes');

app.use(express.json());
app.use('/api/clientes', clientesRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
