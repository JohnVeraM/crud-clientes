const express = require('express');
const router = express.Router();

let clientes = [];


//cr4ear
router.post('', (req, res) => {
  const cliente = req.body;
  clientes.push(cliente);
  res.status(201).json(cliente);
});

//listar 
router.get('/', (_req, res) => {
  res.json(clientes);
});


 //ediatar
 
router.put('/:cedula', (req, res) => {
  const { cedula } = req.params;
  const idx = clientes.findIndex(c => c.cedula === cedula);

  if (idx === -1) return res.status(400).json({ error: 'Cliente no encontrado' });

  
  clientes[idx] = req.body;
  res.json(clientes[idx]);
});


 //Actualiza solo el campoq eus e envia

router.patch('/:cedula', (req, res) => {
  const { cedula } = req.params;
  const idx = clientes.findIndex(c => c.cedula === cedula);

  if (idx === -1) return res.status(400).json({ error: 'Cliente no encontrado' });

  clientes[idx] = { ...clientes[idx], ...req.body };
  res.json(clientes[idx]);
});


 //Elimina el cliente indicado                  

router.delete('/:cedula', (req, res) => {
  const { cedula } = req.params;
  const inicial = clientes.length;
  clientes = clientes.filter(c => c.cedula !== cedula);

  if (clientes.length === inicial)
    return res.status(400).json({ error: 'Cliente no encontrado' });

  res.status(204).send();
});

module.exports = router;
