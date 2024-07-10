



async function fetchData () {
    try {
        const pokemonName  = document.getElementById("pokemonName").value.toLowerCase() ;
        const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const PokeImage = document.getElementById("PokeImage");
        if (!responce.ok) {
            throw new Error("Not found Pokemon");
        }
        const data = await responce.json() ;
        const pokeapi = data.sprites.front_default;
        PokeImage.src = pokeapi ;
        PokeImage.style.display = "block" ;
        
    } catch (error) {
        console.error(error);
        PokeImage.src = PokeImage.alt ;
        PokeImage.style.display = "none";
    }
}