import 'bootstrap/dist/css/bootstrap.min.css'

document.querySelector('#app').innerHTML = `

 <section>
       <div class="container">
        <form id="searchForm" class="my-4">
           <div class="form-group"> 
             <label for="searchInput">Buscar personaje:</label> 
             <input type="text" class="form-control" id="pokemonsearch" placeholder="Ingrese el nombre del personaje"> 
             </div> 
             <button type="submit" class="btn btn-primary">Buscar</button>
         </form>
       <div class="row" id="pokemon-card"></div>
      </div>
  </section> 
`
const getCharacters = async (contenidoInput = "") => {
  contenidoInput.toLowerCase()

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${contenidoInput}`)
  const data = await response.json()
  console.log(data);


  const pokemonsCardContainer = document.querySelector('#pokemon-card')
  pokemonsCardContainer.innerHTML = ''

  const pokemonCard = document.createElement('div')
  pokemonCard.classList.add('col-sm-12', 'col-md-4')

  const speciesUrl = data.species.url;
  const speciesResponse = await fetch(speciesUrl);
  const speciesData = await speciesResponse.json();

  const description = speciesData.flavor_text_entries.find(
    (entry) => entry.language.name === 'en'
  ).flavor_text;

  const pokes = {
    img: data.sprites.other.dream_world.front_default,
    name: data.name,
    abilitie: data.abilities[1].ability.name,
    description: description

  }

  pokemonCard.innerHTML = `
    <div class="card " style="width: 18rem;">
    <img src="${pokes.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pokes.name}</h5>
      <p class="card-text ">${pokes.description}.</p>
    </div>
  </div>
    `
  pokemonsCardContainer.appendChild(pokemonCard)


}

document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault()
  const search = document.getElementById('pokemonsearch').value
  getCharacters(search)
})

getCharacters()

