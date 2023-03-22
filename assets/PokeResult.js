var searchquerry = document.location.search.split("=").pop();
searchquerry = searchquerry.toLowerCase();
var urlhold = 'https://pokeapi.co/api/v2/pokemon/';
var submiturl = "";
var gifImage = $(".gif-image");
var TENOR_API_KEY = "AIzaSyAMxg6d2IH5__7rLo8TVcMFPgQKYM7ULPs"
//console.log(searchquerry)
console.log(gifImage[0].src);

function makeUrl () {submiturl = urlhold + searchquerry, testapi(submiturl)}

function testapi (submiturl) {
    
    fetch(submiturl)
    .then(response => response.json())
    
    .then(function (response) {
        console.log(response.name), 

        console.log(response.types[0].type.name)
        if (response.types.length > 1) {console.log("its long"), console.log(response.types[1].type.name)}
        else {console.log("Its short")}
        console.log(response)

    })

}
makeUrl()

fetch("https://tenor.googleapis.com/v2/search?key="+TENOR_API_KEY+"&q="+searchquerry+"&contentfilter=high&media_filter=gif")
.then(response => response.json())
.then (function(data) {
    var gif = data.results[0].media_formats.gif.url
    console.log(data)
    console.log(data.results[0].url)
    console.log(data.results[0].media_formats.gif.url)
    gifImage[0].src = gif;

})