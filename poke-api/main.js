import 'bootstrap/dist/css/bootstrap.min.css'

document.querySelector('#app').innerHTML = `

 <section>
<div class="container">
  <form id="searchForm" class="my-4">
    <div class="form-group"> <label for="searchInput">Buscar personaje:</label> <input type="text"
        class="form-control" id="pokemon-search" placeholder="Ingrese el nombre del personaje"> </div> <button
      type="submit" class="btn btn-primary">Buscar</button>
  </form>
  <div class="row" id="pokemon-card"></div>
</div>
</section> 
`

const getCharacters = async (contenidoInput = '') => {
/*   let contenidoInput = document.getElementById("pokemon-name").value;
 */  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${contenidoInput}`)
  const data = await response.json()
  console.log(data);

  data.results.map((char) => {
    const pokemonCard = document.createElement('div')

    pokemonCard.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${char.url}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${char.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `

    document.querySelector('#pokemon-card').appendChild(pokemonCard)
  })
}

document.getElementById('searchForm').addEventListener('click', (event) => {
  event.preventDefault()
  const search = document.getElementById('pokemon-search').value
  getCharacters(search)
})

getCharacters()


