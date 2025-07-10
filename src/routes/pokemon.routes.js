// Define as rotas da entidade 'pokémon'

import { Router } from "express"; // Importa o Router do Express para criar sub-rotas
import { getPokemon } from '../controllers/pokemon.controller.js';

const router = Router(); // Cria uma instância de router
router.get('/:name', getPokemon) // Define a rota GET /pokemon/:name para buscar um pokémon pelo nome

export default router; // Exporta o router para ser usado em app.js