/*
Quando clicar no Pokémon da listagem temos que esconder o cartão Pokémon aberto e mostrar o cartão Pokémon correspondente so que foi selecionado na listagem.

Para isso precisamos criar dois elementos:
1 - Listagem
2 - Cartão Pokemon

Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela.

Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem do Windows.

Vamos precisar com um evento de clique feito pelo usuário na listagem de Pokémons:

- Remover a Classe aberto só do cartão que está aberto;
- Ao clicar em um Pokémon da listagem pegamos o id desse Pokémon para saber quel cartão mostrar;
- Remover a Classe ativa que marca o Pokémon selecionado;
- Adicional a Classe ativa no item da lista selecionado.

*/

// Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll ('.pokemon')
const pokemonsCard = document.querySelectorAll ('.cartao-pokemon')

//Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem do Windows.
listaSelecaoPokemons.forEach (pokemon => {
    pokemon.addEventListener('click',() => {
        console.log(pokemon)
        //Remover a Classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //Ao clicar em um Pokémon da listagem pegamos o id desse Pokémon para saber quel cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value


        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
        
        //Remover a Classe ativa que marca o Pokémon selecionado (listagem)
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem =document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

        //teste commit

    })
})