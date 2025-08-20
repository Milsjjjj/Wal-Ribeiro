const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'clients.json');

// Função para ler clientes do arquivo
function readClients() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return data ? JSON.parse(data) : [];
}

// Função para salvar clientes no arquivo
function saveClients(clients) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(clients, null, 2));
}

let clients = readClients();

// Listar todos os clientes
app.get('/api/clients', (req, res) => {
  res.json(clients);
});

// Adicionar novo cliente
app.post('/api/clients', (req, res) => {
  const client = req.body;
  client.id = Date.now(); // Gera um id único
  clients.push(client);
  saveClients(clients);
  res.json(client);
});

// Remover cliente
app.delete('/api/clients/:id', (req, res) => {
  const id = Number(req.params.id);
  clients = clients.filter(c => c.id !== id);
  saveClients(clients);
  res.json({ success: true });
});

// Editar cliente
app.put('/api/clients/:id', (req, res) => {
  const id = Number(req.params.id);
  const updatedClient = req.body;
  clients = clients.map(c => (c.id === id ? updatedClient : c));
  saveClients(clients);
  res.json(updatedClient);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});