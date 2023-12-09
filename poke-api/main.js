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

const getCharacters = async (contenidoInput = '') => {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${contenidoInput}`)
  const data = await response.json()
  console.log(data.results);

  const pokemonsCardContainer = document.querySelector('#pokemon-card')
  pokemonsCardContainer.innerHTML = ''

  data.results.map((char) => {
    const pokemonCard = document.createElement('div')
    pokemonCard.classList.add('col-sm-12', 'col-md-4')

    pokemonCard.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/frqhrdp5vycaa7fux6gi" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${char.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
    pokemonsCardContainer.appendChild(pokemonCard)
 })
}

document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault()
  const search = document.getElementById('pokemonsearch').value
  getCharacters(search)
})

getCharacters()


