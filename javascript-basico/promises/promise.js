var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

buttonElement.onclick = buscarRepos;


function buscarRepos() {
    var user = inputElement.value;

    var api = 'https://api.github.com/users/' + user + '/repos';

    axios.get(api)
    .then(function(response) {
        //console.log(response.data)
        listarRepos(response)
    })
    .catch(function(error) {
        console.warn(error);
    })

}

function listarRepos(response) {
    listElement.innerHTML = '';

    var repos = response.data
    for (repo of repos) {
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(repo.name);

        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }
}

