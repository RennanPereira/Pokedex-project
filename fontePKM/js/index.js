const MenuPokemonSelection = document.querySelectorAll('.pokemon')

MenuPokemonSelection.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const pokemonCardOpened = document.querySelector('.aberto')
        pokemonCardOpened.classList.remove('aberto')

        const pokemonIdSelected = pokemon.attributes.id.value
        
        const pokemonIdToOpen = 'card-' + pokemonIdSelected
        const pokemonCardToOpen = document.getElementById(pokemonIdToOpen)
        pokemonCardToOpen.classList.add('aberto')

        const pokemonActive = document.querySelector('.ativo')
        pokemonActive.classList.remove('ativo')

        const pokemonToActivate = document.getElementById(pokemonIdSelected)
        pokemonToActivate.classList.add('ativo')
    })
})