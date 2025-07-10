// Importa os módulos necessários
import dotenv from 'dotenv';   // Carrega variáveis do .env
import app from './src/app.js' // Importa o app configurado que está dentro de src

dotenv.config(); // Lê o arquivo .env e injeta no process.env

const PORT = process.env.PORT || 3000; // Define a porta do servidor, co fallback para 3000

// Inicia o servidor express e escuta na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`); // Exibe mensagem no terminal
});