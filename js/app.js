//console.log("hello")
//https://api.punkapi.com/v2/beers

const divBeers = document.querySelector(".beers")

async function getBeers() {
    // à l'intérieur on fait notre fetch, puis on attend la réponse
    const response = await fetch("https://api.punkapi.com/v2/beers");
    //   console.log(response);

    //   une fois la réponse reçue, on peut la traiter et récupérer les données
    const beers = await response.json();

    console.table(beers);

    for (let beer of beers) {
        divBeers.innerHTML += `
        <div class="card">
            <h2> ${beer.name} </h2>
            <h3> ${beer.tagline} </h3>
            <img src="${beer.image_url}">
            <p> ${beer.description} </p>
            <h5>Volume :</h5>
            <p> ${beer.volume.value} ${beer.volume.unit}</p>
            <h5>Food pairing :</h5>
            <p> ${beer.food_pairing} </p>
            <h5>Brewers tips :</h5>
            <p> ${beer.brewers_tips} </p>
            </div>
            `
        // <h5>First brew :</h5>
        // <p> ${beer.first_brewed} </p>

    }
}
// j'appelle la fonction pour qu'elle soit éxécutée.
getBeers()