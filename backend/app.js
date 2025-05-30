const express = require('express');
const cors = require('cors');
const sequelize = require('./conexion');
const Usuario = require('./models/usuarios');
const PORT = 3001;
const app = express();

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

//permitir comunicacion entre front y back
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

sequelize.sync().then(() => {
  console.log("Base de datos conectado y modelo sincronizado");
});

// CREATE
app.post('/usuarios', async (req, res) => {
  const data = await Usuario.create(req.body);
  res.send(data);
});

// READ
app.get('/usuarios', async (req, res) => {
  const data = await Usuario.findAll();
  res.send(data);
});

// UPDATE
app.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  const data = await Usuario.update(req.body, { where: { id } });
  res.send(data);
});

// DELETE
app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  const data = await Usuario.destroy({ where: { id } });
  res.send({ eliminado: data > 0 });
});

