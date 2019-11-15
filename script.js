function fetchChuckNorrisJokesJSON() {
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .then(function (jokes) {
            console.log('data decoded from JSON:', jokes);

            // Build a block of HTML
            const jokesHtml = `
            <p><strong>${jokes.value}</strong></p> 
            <img src="${jokes.icon_url}" />           
            `;
            document.querySelector('#chuck-norris').innerHTML = jokesHtml;
        });
}

let elementButton = document.getElementById('load');
elementButton.addEventListener('click', function () {
    fetchChuckNorrisJokesJSON();
});

fetchChuckNorrisJokesJSON();