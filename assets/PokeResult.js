var searchquerry = document.location.search.split("=").pop()
var urlhold = 'https://pokeapi.co/api/v2/pokemon/'
var submiturl = ""
var Sprite = $("#Sprite")
var poketype = $(".pokemon-type")
var stats = (".pokemon-stats > 0")

//console.log(searchquerry)






function makeUrl () {submiturl = urlhold + searchquerry, testapi(submiturl)}


function testapi (submiturl) {
    
    fetch(submiturl)
    .then(response => response.json())
    
    .then(function (response) {
        
        

        var spriteurl = response.sprites.front_default;    
        console.log(response.name); 
        if (response.types.length > 2) {poketype.text(response.types[0].type.name + " and ", response.types[1].type.name, " Type")}
        else {poketype.text(response.types[0].type.name)}
        console.log("the pokemon is ", response.height / 10 .toFixed(1), " meters tall");
        console.log("the pokemon weighs ", response.weight / 10 .toFixed(1), " Kilograms");

        console.log(response);
    
        Sprite.attr("src", spriteurl);
    
    
    
    })
}

$(function () {
makeUrl()
})