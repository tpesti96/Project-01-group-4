var searchquerry = document.location.search.split("=").pop()
var urlhold = 'https://pokeapi.co/api/v2/pokemon/'
var submiturl = ""
//console.log(searchquerry)



function makeUrl () {submiturl = urlhold + searchquerry, testapi(submiturl)}



function testapi (submiturl) {
    
    fetch(submiturl)
    .then(response => response.json())
    
    .then(function (response) {
        console.log(response.name), 
        
        
        
        
        console.log(response.types[0].type.name), 
        //console.log(response.types[1].type.name)
        console.log(response)
    
    
    
    
    
    })

}
makeUrl()