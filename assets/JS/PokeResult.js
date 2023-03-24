var searchquerry = document.location.search.split("=").pop()
var urlhold = 'https://pokeapi.co/api/v2/pokemon/'
var submiturl = ""
var Sprite = $("#Sprite")
var TENOR_API_KEY = "AIzaSyAMxg6d2IH5__7rLo8TVcMFPgQKYM7ULPs"
var gifImage = $("#gif-image")
//var poketype = $(".pokemon-type")
//var pokename = $(".pokemon-name")
var stats = [$("#S0"), $("#S1"), $("#S2"), $("#S3"), $("#S4"), $(".pokemon-name"), $(".pokemon-type"), $(".pokemon-logo")]

//console.log(searchquerry)






function makeUrl () {submiturl = urlhold + searchquerry, check404(submiturl), testapi(submiturl)}


function check404 (submiturl) {

    fetch(submiturl)

    .then(function (response) {
        
    
    if (response.status !== 200) {location.assign("./404.html")}
    
    
    
    
    } );

}

function testapi (submiturl) {
    


    fetch(submiturl)
    
    .then(response => response.json())
    
    .then(function (response) {
        
        

        var spriteurl = response.sprites.front_default;    
        stats[5].text(response.name.charAt(0).toUpperCase() + response.name.slice(1)); 
        if (response.types.length > 1) {stats[6].text(response.types[0].type.name + "/" + response.types[1].type.name)}
        else {stats[6].text(response.types[0].type.name)};

        if (response.abilities.length === 1) {stats[2].text("Ability: " + response.abilities[0].ability.name)}
        else if (response.abilities.length === 2) {stats[2].text("Ability: " + response.abilities[0].ability.name), stats[3].text("Hidden ability: " + response.abilities[1].ability.name)}
        else if (response.abilities.length === 3) {stats[2].text("Ability 1: " + response.abilities[0].ability.name), stats[3].text("Ability 2: " + response.abilities[1].ability.name), stats[4].text("Hidden ability: " + response.abilities[2].ability.name)}




        stats[7].text("Index No. " + response.id)
        stats[0].text("Height: " + response.height / 10 .toFixed(1) +  "m");
        stats[1].text("Weight: " +  response.weight / 10 .toFixed(1) + "kg");
        
        console.log(response);
    
        Sprite.attr("src", spriteurl);
    
        
    
    })
}

$(function () {
makeUrl()
})

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