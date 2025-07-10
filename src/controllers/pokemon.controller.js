// Controlador que lida com a entrada da requisição e delega ao service

import { getPokemonByName } from '../services/pokemon.service.js'; // Importa a função de serviço que busca o pokémon

export async function getPokemon(req, res, next) {
    try {
        const { name } = req.params; // Extrai o parâmetro :name da URL
        const result = await getPokemonByName(name) // Chama o serviço para buscar os dados do pokémon
        res.json(result); // Envia os dados como json para o cliente
    } catch (error) {
        next(error) // Encaminha o erro para o manipulador
    }
};