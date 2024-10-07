import { players } from './bdFicha.js';

export function selectJogadores(List, SectionId) {
    const selectElement = document.getElementById(SectionId);

    // Limpa o conteúdo atual do select
    selectElement.innerHTML = '';

    // Itera sobre o array de personagens e cria uma opção para cada jogador
    players.forEach(List => {
        const option = document.createElement("option");
        option.value = List.player;
        option.text = List.player;
        selectElement.appendChild(option);
    });

    /*###########################################################################*/
    const jogadorSelecionado = selectElement.value;

    // Busca o personagem correspondente ao jogador selecionado
    const personagem = players.find(p => p.player === jogadorSelecionado);

    if (personagem) {
        // Preenche os campos com os dados do personagem
        document.getElementById("nome").value = personagem.nome;
        document.getElementById("filho").value = personagem.filho;
        document.getElementById("classe").value = personagem.classe;
        document.getElementById("xp").value = personagem.xp;
        document.getElementById("nivel").value = personagem.nivel;
        document.getElementById("skill").value = personagem.skill;
        document.getElementById("upgrade").value = personagem.upgrade;
    } else {
        // Se o personagem não for encontrado, limpa os campos
        document.getElementById("nome").value = '';
        document.getElementById("filho").value = '';
        document.getElementById("classe").value = '';
        document.getElementById("xp").value = '';
        document.getElementById("nivel").value = '';
        document.getElementById("skill").value = '';
        document.getElementById("upgrade").value = '';
    }
}
export function criarTabela(dados, idTabela) {
    const tabela = document.getElementById(idTabela);

    // Limpar o conteúdo da tabela
    tabela.innerHTML = '';

    // Adicionar cabeçalho
    const thead = tabela.createTHead();
    const headerRow = thead.insertRow();
    
    // Adiciona cabeçalhos dinamicamente baseado nas colunas
    dados.colunas.forEach(coluna => {
        const th = document.createElement('th');
        th.textContent = coluna.charAt(0).toUpperCase() + coluna.slice(1);
        // th.classList.add(`th-${coluna}`); // Adiciona a classe 'th-coluna'
        headerRow.appendChild(th);
    });

    // Adicionar corpo da tabela
    const tbody = tabela.createTBody();
    dados.linhas.forEach(linha => {
        const tr = tbody.insertRow();
        const nomeAtributo = linha.charAt(0).toUpperCase() + linha.slice(1);

        // Adicionar células para cada coluna especificada
        dados.colunas.forEach(coluna => {
            const td = tr.insertCell();
            if (coluna === 'atributos') {
                td.textContent = nomeAtributo; // Nome do atributo para a coluna 'atributos'
            } else {
                const input = document.createElement('input');
                input.type = 'number';
                input.name = `${coluna}_${linha}`;
                input.readOnly = true;
                td.appendChild(input);
            }
        });
    });
}