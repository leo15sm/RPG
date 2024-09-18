import { raca } from './bdRaca.js';
import { atributos } from './bdFicha.js';

// Chamar a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    criarTabela(atributos[0], 'atributos');
    criarTabela(atributos[1], 'atr-combate');
    controler(raca, 'raca-select');
});

function controler(dadosImport, SectionId){
    const racaSelect = document.getElementById(SectionId);
    
    // Verifica a existência do ID
    if (!racaSelect) {
        console.error(`Elemento com id ${sectionId} não encontrado.`);
        return;
    }
    
    // Cria as opções e adiciona ao select
    dadosImport.forEach(dados => {
        const option = document.createElement('option');
        option.value = dados.nome;
        option.textContent = dados.nome;
        racaSelect.appendChild(option);
    });

    // Adiciona evento de mudança ao select
    racaSelect.addEventListener('change', function() {
        const selectedRaca = dadosImport.find(r => r.nome === racaSelect.value);
        if (selectedRaca) {
            updateFields(selectedRaca);
        }
    });

    updateFields(dadosImport[0])
}

function updateFields(raca) {
    // Atualiza os campos da tabela de atributos
    atributos[0].linhas.forEach(linha => {
        document.querySelector(`input[name="valores_${linha}"]`).value = raca[linha] * 10;
        document.querySelector(`input[name="mod_${linha}"]`).value = raca[linha];
    });
    
    // Obtém os valores dos campos de entrada
    const nivel = parseFloat(document.getElementById('nivel').value) || 0;
    const escala = parseFloat(document.querySelector('escala').value) || 0;
}

function criarTabela(dados, idTabela) {
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

