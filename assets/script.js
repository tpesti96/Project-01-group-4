var requesturl = 'https://pokeapi.co/api/v2/pokemon/ralts'

function testapi (requesturl) {
    fetch(requesturl)
    .then(response => response.json())
    
    
    .then(function (response) {console.log(response.name), console.log(response.types[0].type.name)})





}




testapi (requesturl)