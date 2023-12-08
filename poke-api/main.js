import './style.css'

document.querySelector('#app').innerHTML = `
  <div>


  
  </div>
`

const getCharacters = async () =>{
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  const data = await response.json()
  console.log(data);
}

getCharacters()