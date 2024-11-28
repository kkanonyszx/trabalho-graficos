
async function quantidadeJogadores() {
    const url = 'https://raw.githubusercontent.com/Akiovictor/trabalho_json_grafico/refs/heads/main/disciplina.json'
    const res = await fetch(url)
    const dados = await res.json()
    const disciplina = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            x: jogos, 
            y: jogadores, 
            type: 'bar'
        }
    ]

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

quantidadeJogadores()
