
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Configuração do pool do PostgreSQL (substitua com suas credenciais)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecoguard',
  password: 'da612gEe*ed12fB24--eca1eAfFf62a2',
  port: 5432,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota para lidar com o envio de formulário
app.post('/enviar-formulario', async (req, res) => {
  try {
    const { denuncia, data, relato, logradouro, complemento, cidade, bairro, descricaoLocal, contatos } = req.body;
    
    console.log('Recebendo dados do formulário:', req.body);

    const result = await pool.query('INSERT INTO formulario_denuncia.denuncias (id, tipo_de_denuncia, data_do_ocorrido, relato, logradouro, complemento, cidade, bairro, descricao_do_local, contato) VALUES (DEFAULT,$1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [ denuncia, data, relato, logradouro, complemento, cidade, bairro, descricaoLocal, contatos]);

    res.status(200).send('Dados inseridos com sucesso!');
    
  
   } catch (error) {
    console.error('Erro ao inserir dados no banco de dados:', error);
    res.status(500).send('Erro interno do servidor');
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
