document.addEventListener("DOMContentLoaded", function () {
    const characterList = document.getElementById("characterList");

    // Link da API do Star Wars para listar os personagens.
    fetch("https://swapi.dev/api/people/")
        .then(response => response.json())
        .then(data => {
            // lista de personagens com suas caracteristicas.
            data.results.forEach(character => {
                const characterCard = document.createElement("div");
                characterCard.classList.add("card");
                characterCard.innerHTML = `
                    <h2>${character.name}</h2>
                    <p>Massa: ${character.mass}</p>
                    <p>Cor do Cabelo: ${character.hair_color}</p>
                    <p>Cor da Pele: ${character.skin_color}</p>
                    <p>Cor dos Olhos: ${character.eye_color}</p>
                    <p>Ano de Nascimento: ${character.birth_year}</p>
                    <p>Sexo: ${character.gender}</p>
                `;
                characterList.appendChild(characterCard);
            });
        })
        //caso a Api não carregar
        .catch(error => console.error("Erro ao carregar personagens:", error));
});
