import { Personagem } from './classAtributos.js';

export function insertValues(dadosImportRacas, dadosImportClasses, SectionIdRaca, SectionIdClasses) {
    const racaSelect = document.getElementById(SectionIdRaca);
    const classSelects = SectionIdClasses.map(id => document.getElementById(id));
    
    // Verifica a existência do ID da raça
    if (!racaSelect) {
        console.error(`Elemento com id ${SectionIdRaca} não encontrado.`);
        return;
    }

    // Verifica a existência dos IDs das classes
    classSelects.forEach((select, index) => {
        if (!select) {
            console.error(`Elemento com id ${SectionIdClasses[index]} não encontrado.`);
            return;
        }
    });

    // Cria as opções e adiciona ao select de raças
    dadosImportRacas.forEach(racaObj => {
        const option = document.createElement('option');
        option.value = racaObj.nome;
        option.textContent = racaObj.nome;
        racaSelect.appendChild(option);
    });

    // Cria as opções e adiciona aos selects de classes
    dadosImportClasses.forEach(classeObj => {
        classSelects.forEach(select => {
            const option = document.createElement('option');
            option.value = classeObj.nome;
            option.textContent = classeObj.nome;
            select.appendChild(option);
        });
    });

    // Função para atualizar os campos do personagem
    function updatePersonagem() {
        const selectedRaca = dadosImportRacas.find(r => r.nome === racaSelect.value);
        
        // Obtém as classes selecionadas a partir dos 4 selects
        const selectedClasses = classSelects.map(select => 
            dadosImportClasses.find(classe => classe.nome === select.value)
        ).filter(Boolean); // Filtra valores nulos

        if (selectedRaca) {
            // Cria o personagem com a raça e classes selecionadas
            const personagem = new Personagem("Nome do Personagem", selectedRaca, selectedClasses);
            const atributosFinais = personagem.calcularAtributos();
            const subatributosFinais = personagem.calcularAtrCombate(); // Chama a função para calcular subatributos

            // Atualiza os campos do formulário com os atributos calculados
            const linhas = ['sabedoria', 'intelecto', 'carisma', 'destreza', 'forca', 'essencia', 'controle'];
            linhas.forEach(linha => {
                document.querySelector(`input[name="valores_${linha}"]`).value = atributosFinais[linha] * 10;
                document.querySelector(`input[name="mod_${linha}"]`).value = atributosFinais[linha];
            });

            // Array para os subatributos
            const subatributos = [
                'HP', 
                'ataque', 
                'defesa', 
                'especialAtaque', 
                'especialDefesa', 
                'reflexo', 
                'velocidade', 
                'instinto', 
                'mobilidade', 
                'pontaria', 
                'precisao'
            ];

            // Atualiza os campos de subatributos
            subatributos.forEach(subatributo => {
                document.querySelector(`input[name="valores_${subatributo}"]`).value = subatributosFinais[subatributo];
            });
        }
    }

    // Adiciona eventos de mudança para atualizar o personagem ao mudar raça ou qualquer classe
    racaSelect.addEventListener('change', updatePersonagem);
    classSelects.forEach(select => {
        select.addEventListener('change', updatePersonagem);
    });

    // Inicializa os campos com a primeira raça e as classes por padrão
    updatePersonagem();
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