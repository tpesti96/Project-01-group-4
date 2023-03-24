var searchquerry = document.location.search.split("=").pop();
searchquerry = searchquerry.toLowerCase();
var urlhold = 'https://pokeapi.co/api/v2/pokemon/';
var submiturl = "";
var gifImage = $("#gif-image");
var TENOR_API_KEY = "AIzaSyAMxg6d2IH5__7rLo8TVcMFPgQKYM7ULPs"
var searchquerry = document.location.search.split("=").pop()
var urlhold = 'https://pokeapi.co/api/v2/pokemon/'
var submiturl = ""
var Sprite = $("#Sprite")

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

        var spriteurl = response.sprites.front_default;    
        console.log(response.name); 
        if (response.types.length > 1) {console.log("the pokemon is ", response.types[0].type.name, " Type and ", response.types[1].type.name, " Type")}
        
        console.log("the pokemon is ", response.height / 10 .toFixed(1), " meters tall");
        console.log("the pokemon weighs ", response.weight / 10 .toFixed(1), " Kilograms");

        console.log(response);
    
        Sprite.attr("src", spriteurl);
    
    
    
    })
}
makeUrl()

fetch("https://tenor.googleapis.com/v2/search?key="+TENOR_API_KEY+"&q="+searchquerry+"&contentfilter=high&media_filter=gif")
.then(response => response.json())
.then (function(data) {
    var gif = data.results[0].media_formats.gif.url
    var about = data.results[0].content_description
    console.log(data)
    console.log(data.results[0].url)
    console.log(data.results[0].media_formats.gif.url)
    gifImage[0].src = gif;
    gifImage[0].alt = about;    

})