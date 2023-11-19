const express = require('express');
const { Pool } = require('pg');
const path = require('path');  // Adicione esta linha para importar o módulo 'path'
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;


// Configuração do pool do PostgreSQL (substitua com suas credenciais)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecoguard',
  password: '2023',
  port: 5432,
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Rota para lidar com o envio de formulário
app.post('/enviar-formulario', async (req, res) => {
  try {
    const { denuncia, data, relato, logradouro, complemento, cidade, bairro, descricaoLocal, contatos } = req.body;
    
    console.log('Recebendo dados do formulário:', req.body);

    const result = await pool.query('INSERT INTO formulario_denuncia.denuncias (id, tipo_de_denuncia, data_do_ocorrido, relato, logradouro, complemento, cidade, bairro, descricao_do_local, contato) VALUES (DEFAULT,$1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [ denuncia, data, relato, logradouro, complemento, cidade, bairro, descricaoLocal, contatos]);

    console.log('Dados inseridos com sucesso:', result.rows[0]);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // Envie uma resposta com os dados inseridos
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir registro:', error);
    res.status(500).json({ error: 'Erro interno do servidor', details: error.message });
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
