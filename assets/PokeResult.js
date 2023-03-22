var searchquerry = document.location.search.split("=").pop()
var urlhold = 'https://pokeapi.co/api/v2/pokemon/'
var submiturl = ""
var Sprite = $("#Sprite")



//console.log(searchquerry)






function makeUrl () {submiturl = urlhold + searchquerry, testapi(submiturl)}


function testapi (submiturl) {
    
    fetch(submiturl)
    .then(response => response.json())
    
    .then(function (response) {
        
        

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