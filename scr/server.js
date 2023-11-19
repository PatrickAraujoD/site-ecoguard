const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Configurar o pool do PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para processar os dados do formulário
app.post('/inserir-dados', async (req, res) => {
  try {
    const { denuncia, data, relato, logradouro, complemento, cidade, bairro, descricaoLocal, contatos } = req.body;

    // Conectar ao banco de dados
    const client = await pool.connect();

    // Inserir dados na tabela
    await client.query(
      'INSERT INTO formulario_denuncia.denuncias (tipo_de_denuncia, data_do_ocorrido, relato, logradouro, complemento, cidade, bairro, descricao_do_local, contato) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [denuncia, data, relato, logradouro, complemento, cidade, bairro, descricaoLocal, contatos]
    );

    res.status(201).json({ message: 'Registro inserido com sucesso!' });

    // Liberar conexão
    client.release();
  } catch (error) {
    console.error('Erro ao inserir registro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
