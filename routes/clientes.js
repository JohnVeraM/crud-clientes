const express = require('express');
const router = express.Router();

let clientes = [];

// Crear nuevo cliente
router.post('/', (req, res) => {
  const cliente = req.body;
  clientes.push(cliente);
  res.redirect('/clientes/vista');
});

// Listar como JSON
router.get('/', (_req, res) => {
  res.json(clientes);
});

// Mostrar vista principal con EJS
router.get('/vista', (_req, res) => {
  res.render('index', { clientes });
});

// Mostrar formulario para editar
router.get('/:cedula/edit', (req, res) => {
  const cliente = clientes.find(c => c.cedula === req.params.cedula);
  res.render('edit', { cliente });
});

// Actualizar cliente
router.put('/:cedula', (req, res) => {
  const { cedula } = req.params;
  const idx = clientes.findIndex(c => c.cedula === cedula);
  if (idx === -1) return res.status(400).send('Cliente no encontrado');
  clientes[idx] = req.body;
  res.redirect('/clientes/vista');
});

// Eliminar cliente
router.delete('/:cedula', (req, res) => {
  const { cedula } = req.params;
  clientes = clientes.filter(c => c.cedula !== cedula);
  res.redirect('/clientes/vista');
});

module.exports = router;
