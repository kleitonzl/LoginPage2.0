const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/loginSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao banco de dados!'))
  .catch((err) => console.log('Erro ao conectar ao banco de dados:', err));

// Roteamento
app.use('/api/auth', authRoutes);

// Iniciar o servidor
const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
