const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');
const app = express();

// Configuração do CORS
app.use(cors());


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});


async function inserirResposta(denuncia, data, relato, logradouro, complemento, cidade, bairro, descricaoLocal, contatos) {
  const query = 'INSERT INTO denuncias (id, tipo_de_denuncia, data_do_ocorrido, relato, logradouro, complemento, cidade, bairro, descricao_do_local, contato) VALUES (DEFAULT,$1, $2, $3, $4, $5, $6, $7, $8, $9)';
  const values = [denuncia, data, relato, logradouro, complemento, cidade, bairro, descricaoLocal, contatos];

  try {
    const result = await pool.query(query, values);
    console.log('Resposta inserida com sucesso:', result);
  } catch (error) {
    console.error('Erro ao inserir resposta:', error);
  }
}

