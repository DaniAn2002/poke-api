import './style.css'

document.querySelector('#app').innerHTML = `
  <div>


  
  </div>
`

const getCharacters = async () =>{
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const data = await response.json()
   data.results.map((character,index) =>{
      if (character.name === 'charmander')
        console.log(index)

   })
  


  console.log(data.results);
}




getCharacters()