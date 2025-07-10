// Arquivo que monta a aplicação Express com rotas e middlewares

import express from 'express'; // Importa o framework Express
import pokemonRoutes from './routes/pokemon.routes.js'; // Importa as rotas de pokemon
import { errorHandler } from './middlewares/errorHandler.js'; //Importa o manipulador de erros

const app = express(); // Inicializa o Express

//Rota raiz simples para testar se o servidor está online
app.get('/', (req, res) => {
    res.json('PokéAPI Consumer está rodando 🐭⚡🔋')
});

app.use('/pokemon', pokemonRoutes); // Usa as rotas de pokemon com prefixo /pokemon
app.use(errorHandler); // Manipulador global pra tratar erros

export default app; // Exporta para ser usado em index.js