import {Magias} from './classAtributos.js';

export const escolas = [
    {
        lista: ["arcana", "vento", "agua", "terra", "fogo"],
    }
];


// "Escola", "Ciclo", "Nome", "acao", "requisito" "descricao"

export const listMagias = [
    // Ciclo 0
    new Magias(
     "arcana", "0", "Escrita Mágica", "súbita",
     "Nenhum",
     "Permite redigir textos coloridos em superfícies. Pode ser usado como uma ação bônus de conversação"
    ),
    new Magias(
     "arcana", "0", "Manifestar Magia", "rápida",
     "Nenhum",
     "Criação de uma poeira brilhante, representando a liberação de sua mana"
    ),
    // Ciclo 1
    new Magias(
        "arcana", "1", "Magia de Ataque", "lenta",
        "Nenhum",
        "Disparo de um ataque básico de energia arcana pura. Se usado com mana skim, o ataque ganha prioridade do elemento em questão."
    ),
    new Magias(
        "arcana", "1", "Magia de Defesa", "lenta",
        "Nenhum",
        "Materialização de um escudo mágico octogonal feito de energia mágica pura, serve para bloquear projéteis físicos. Se usado em conjunto com mana skim, a proteção consegue aparar golpes do mesmo elemento ou daqueles que possuem prioridade."
    ),
    // Ciclo 2
    new Magias(
        "arcana", "2", "Armadura Arcana", "rápido",
        "Nenhum",
        "Reverte o corpo com mana enrijecido, aumentando o reduto em 5 por 5 turnos."
    ),
    new Magias(
        "arcana", "2", "Impulso Arcano", "rápido",
        "Nenhum",
        "Gera um impulso de velocidade com o intuito de evadir de golpes, ganhando prioridade."
    ),
    new Magias(
        "arcana", "2", "Implemento Arcano", "rápido",
        "Nenhum",
        "Utiliza magia para fortalecer um golpe corpo a corpo, causando mais dano"
    ),
    // Ciclo 3
    new Magias(
        "arcana", "3", "Arma Arcana", "rápido",
        "Nenhum",
        "Criação de uma arma feita de energia mágica, dura apenas uma ação e causa o dano equivalente ao item criado."
    ),
    // Ciclo 4
    new Magias(
        "arcana", "4", "Runas de Criatura", "súbita",
        "Nenhum",
        "Criação de uma runa que concentra a essência de alguma criatura mágica."
    ),
     /*###########################################*/
];