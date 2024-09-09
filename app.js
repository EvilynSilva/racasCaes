function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma raça</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

     // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let cores = ""; 
    let expectativaVida = ""; 
    let porte = ""; 
    let temperamento = ""; 
    let origem = ""; 
    let precoMedio = ""; 

    //para cada dado dentro da lista de dados

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        cores = dado.cores.toLowerCase()
        expectativaVida = dado.expectativaVida.toLowerCase()
        porte = dado.porte.toLowerCase()
        temperamento = dado.temperamento.toLowerCase()
        origem = dado.origem.toLowerCase()
        precoMedio = dado.precoMedio.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| cores.includes(campoPesquisa)||expectativaVida.includes(campoPesquisa)||porte.includes(campoPesquisa)||temperamento.includes(campoPesquisa)||origem.includes(campoPesquisa)||precoMedio.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p>
                    <img src=${dado.imagem} alt="${dado.titulo}"
                        class="imagem-raca">
                    <a href="#" target="_blank"></a>
                </p>
                <p>
                <h3>Características gerais</h3>
                <p class="descricao-meta">${dado.descricao}</p>
                <p>
                Porte: ${dado.porte}<br>
                Cores: ${dado.cores}<br>
                Temperamento: ${dado.temperamento}<br>
                Expectativa de vida: ${dado.expectativaVida}<br>
                Origem: ${dado.origem}<br>
                Preço Médio:${dado.precoMedio}
                </p>
                    <a href="${dado.link}" target="_blank">Quer saber mais? Clique aqui!</a>
                </p>
            </div>
            `;
        }
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
} 
