const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir que a API processe dados no formato JSON
app.use(express.json());

// Base de dados simulada (mock) de clientes
const clientes = [
    { id: 1, nome: 'Ana Silva', email: 'ana.silva@email.com', telefone: '(16) 99999-1111', status: 'ativo' },
    { id: 2, nome: 'Carlos Oliveira', email: 'carlos.o@email.com', telefone: '(16) 99999-2222', status: 'ativo' },
    { id: 3, nome: 'Beatriz Souza', email: 'beatriz.s@email.com', telefone: '(16) 99999-3333', status: 'inativo' }
];

/**
 * Rota: GET /clientes
 * Descrição: Retorna a lista completa de clientes.
 * Suporta filtros opcionais por Query Parameters (ex: /clientes?nome=Ana ou /clientes?status=ativo)
 */
app.get('/clientes', (req, res) => {
    try {
        const { nome, status } = req.query;
        let resultado = clientes;

        // Filtro opcional por nome (busca parcial, case-insensitive)
        if (nome) {
            resultado = resultado.filter(cliente => 
                cliente.nome.toLowerCase().includes(nome.toLowerCase())
            );
        }

        // Filtro opcional por status (ativo/inativo)
        if (status) {
            resultado = resultado.filter(cliente => 
                cliente.status.toLowerCase() === status.toLowerCase()
            );
        }

        // Retorna status HTTP 200 (OK) e o array de clientes em JSON
        return res.status(200).json(resultado);
    } catch (error) {
        // Tratamento de exceções
        return res.status(500).json({ 
            erro: 'Erro interno ao processar a solicitação de clientes.',
            detalhes: error.message 
        });
    }
});

// Inicializa o servidor HTTP na porta configurada
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📍 Teste o endpoint em: http://localhost:${PORT}/clientes`);
});