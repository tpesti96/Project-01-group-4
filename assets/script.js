const TENOR_API_KEY = "AIzaSyAMxg6d2IH5__7rLo8TVcMFPgQKYM7ULPs"

document.cookie = "SameSite=None";

fetch("https://tenor.googleapis.com/v2/search?key="+TENOR_API_KEY+"&q=charmander&contentfilter=high&media_filter=gif", {
})
.then(function(response) {
    return response.json();
})
.then (function(data) {
    console.log(data)
    console.log(data.results[0].url)
    console.log(data.results[0].media_formats.gif.url)
    document.getElementById("pokemon-pic").src = data.results[0].media_formats.gif.url
})


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)
//         console.log(data.name);
//         console.log(data.types[0].type.name)
//         console.log(data.species.name)
//         console.log(data.held_items[0].item.name)
//     })

// fetch("https://pokeapi.co/api/v2/type/electric").then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data)
//     console.log(data.pokemon[22].pokemon.name);
// })