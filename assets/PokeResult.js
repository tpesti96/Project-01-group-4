var searchquerry = document.location.search.split("=").pop()
searchquerry = searchquerry.toLowerCase();
var urlhold = 'https://pokeapi.co/api/v2/pokemon/'
var submiturl = ""
//console.log(searchquerry)





function makeUrl () {submiturl = urlhold + searchquerry, testapi(submiturl)}



function testapi (submiturl) {
    
    fetch(submiturl)
    .then(response => response.json())
    
    .then(function (response) {
        console.log(response.name), 
        
        
        
        
        console.log(response.types[0].type.name); 
        if (response.types.length > 1) {console.log("its long"), console.log(response.types[1].type.name)}
        else {console.log("Its short")}
        console.log(response)
    
    
    
    
    
    })

}
makeUrl()

const TENOR_API_KEY = "AIzaSyAMxg6d2IH5__7rLo8TVcMFPgQKYM7ULPs"

fetch("https://tenor.googleapis.com/v2/search?key="+TENOR_API_KEY+"&q="+searchquerry+"&contentfilter=high&media_filter=gif")
.then(response => response.json())
.then (function(data) {
    console.log(data)
    console.log(data.results[0].url)
    console.log(data.results[0].media_formats.gif.url)
    // document.getElementById("pokemon-pic").src = data.results[0].media_formats.gif.url
})