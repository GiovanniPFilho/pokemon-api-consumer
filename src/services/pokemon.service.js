// Camada de serviço: faz a requisição à PokéAPI e trata os dados

export async function getPokemonByName(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`); // Faz a requisição HTTP com nome minúsculo
    
    if (!response.ok) {
        throw new Error('Pokémon não encontrado'); // Lida com resposta com status de erro (ex: 404)
    }
    
     const data = await response.json(); // Converte o corpo da resposta para JSON

    return {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map(t => t.type.name), // Extrai apenas os nomes dos tipos
        sprite: data.sprites.front_default // URL da imagem do pokémon
  };
}