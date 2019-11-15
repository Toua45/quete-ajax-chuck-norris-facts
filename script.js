function fetchChuckNorrisJokesJSON() {
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
        .then(function(response) {
            return response.data;
        })
        .then(function(jokes) {
            console.log('data decoded from JSON:', jokes);

            // Build a block of HTML
            const jokesHtml = `
            <p><strong>${jokes.value}</strong></p> <!--value correspond au blagues trouvées sur le code source de l'API https://api.chucknorris.io/jokes/random -->
            <img src="${jokes.icon_url}" />   <!--icon_url correspond à l'avatar de Chick Norris trouvé sur le code source de l'API https://api.chucknorris.io/jokes/random -->         
            `;
            document.querySelector('#chuck-norris').innerHTML = jokesHtml;
        });
}

let elementButton = document.getElementById('load');
elementButton.addEventListener('click', function() {
    fetchChuckNorrisJokesJSON();
});

fetchChuckNorrisJokesJSON();