import { Magias } from '../classRPG.js';

export const magiasArcana  = [
    // Ciclo 0
    new Magias(
        "arcana", "0", "Escrita Mágica", "súbita",
        "Nenhum",
        "Ao canaligar energia mágica na ponta de uma superfície é possivel redigir textos coloridos em superfícies ou no ar."
    ),
    new Magias(
        "arcana", "0", "Manifestar Magia", "rápida",
        "Nenhum",
        "Criação de uma poeira brilhante partindo das mãos, representando a liberação de sua mana"
    ),
    // Ciclo 1
    new Magias(
        "arcana", "1", "Magia de Ataque", "lenta",
        "Manifestar Magia",
        "Canalização da energia mágica em um pequena esfera energética que pode ser disparada nos alvos como uma ação de ataque"
    ),
    new Magias(
        "arcana", "1", "Magia de Defesa", "lenta",
        "Manifestar Magia",
        "Materialização de um escudo mágico octogonal feito de energia mágica pura, anula completamente golpes físicos.  "
    ),
    // Ciclo 2
    new Magias(
        "arcana", "2", "Armadura Arcana", "rápido",
        "Nenhum",
        "Reverte o corpo com energia mágica enrijecida, aumentando o redutor em 5 por 5 turnos."
    ),
    new Magias(
        "arcana", "2", "Arma Arcana", "rápido",
        "Nenhum",
        "Reverte uma arma com energia mágica para primorar os efeitos inerentes desta"
    ),
    new Magias(
        "arcana", "2", "Impulso Arcano", "rápido",
        "Nenhum",
        "Canaliza a energia mágica na paerna para criar um impulso de velocidade com o intuito de evadir de golpes, ganhando prioridade."
    ),
    new Magias(
        "arcana", "2", "Implemento Arcano", "rápido",
        "Nenhum",
        "Canaliza a energia mágica em algum membro para fortalecer um golpe corpo a corpo, causando mais dano"
    ),
    // Ciclo 3
    new Magias(
        "arcana", "3", "Telecinese Arcana", "súbita",
        "Nenhum",
        "Reverte algum objeto com energia mágica o permitindo manipula-lo como uma tlecinese limitado a 10 kg, uma distãncia de 10m e 2m de altura"
    ),
    new Magias(
        "arcana", "3", "Magia de Voou", "rápido",
        "Nenhum",
        "Reverte o corpo com energia mágica permitindo voou de até 10m por 5 turnos"
    ),
    // Ciclo 4
    new Magias(
        "arcana", "4", "Runas de Criatura", "súbita",
        "Nenhum",
        "Criação de uma runa que concentra a essência de alguma criatura mágica."
    ),
    new Magias(
        "arcana", "4", "Runa de Slime", "súbita", 
        "Runa Arcana",
        "Uma runa que contem essência de slimes, deve ser usada para criar uma magia que utilize esta prioridade."
    ),
    // Ciclo 5
    new Magias(
        "arcana", "5", "Arma Energética", "lento",
        "Arma Arcana",
        "Criação de uma arma feita de energia mágica, dura apenas uma ação e causa o dano equivalente ao item criado."
    ),
    
];