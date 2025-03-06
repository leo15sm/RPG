import { Magias } from '../classRPG.js';

export const magiasInvocação  = [
    // Deve ter
    new Magias(
        "invocação", "3", "Realocação Espacial", "rápida",
        "Nenhum",
        "Permite se teleportar para alguma possição, consome o turno de deslocamento se usado no turno e a distância é equivalente ao deslocamento total."
    ),
    new Magias(
        "invocação", "4", "Realocação Lenta", "Lenta",
        "Realocação Espacial",
        "Permite se teleportar para alguma possição de até 1km por atributo de conjuração."
    ),
    new Magias(
        "invocação", "5", "Realocação Instatânea", "súbta",
        "Realocação Lenta",
        "Permite se teleportar para alguma possição de até 1m por modificador de conjuração, se usado em reação garante um ataque básico extra."
    ),
    new Magias(
        "invocação", "6", "Realocação Por Marca", "rápida",
        "Realocação Instatânea",
        "Permite teleportar pessoas ou objetos marcados para perto de si ou para perto de outra marca, com limite de 100m."
    ),
    new Magias(
        "invocação", "7", "Magia de Troca", "súbta",
        "Realocação Por Marca",
        "Permite teleportar pessoas ou objetos marcados entre si, trocando assim suas posições, com limite de 20m."
    ),
    // Ciclo 0
    new Magias(
        "invocação", "0", "Conjuração Menor", "rápida",
        "Nenhum",
        "Conjura uma pequena criatura elemental ou um objeto mágico simples que dura pouco tempo."
    ),
    new Magias(
        "invocação", "0", "Chamado de Animais", "rápida",
        "Nenhum",
        "Invoca um pequeno animal, como um pássaro ou roedor, para cumprir uma tarefa simples."
    ),
    new Magias(
        "invocação", "0", "Portal de Brisa", "súbita",
        "Nenhum",
        "Cria um pequeno portal que permite invocar um vento suave para afastar poeira ou desviar um objeto leve."
    ),
    // Ciclo 1
    new Magias(
        "invocação", "1", "Invocação de Familiar", "rápida",
        "Conjuração Menor.",
        "Invoca um familiar (geralmente um animal mágico) para ajudar o conjurador em suas tarefas diárias."
    ),
    new Magias(
        "invocação", "1", "Chamado Elemental", "rápida",
        "Chamado de Animais.",
        "Invoca uma criatura elemental (4 básicos) para executar uma tarefa simples."
    ),
    new Magias(
        "invocação", "1", "Portal Dimensional", "súbita",
        "Portal de Brisa.",
        "Cria um pequeno portal para o plano elemental, permitindo a invocação de uma criatura elementar menor."
    ),
    // Ciclo 2
    new Magias(
        "invocação", "2", "Aliado Espiritual", "rápida",
        "Invocação de Familiar.",
        "Invoca uma entidade espiritual, como um espírito protetor ou uma alma ancestral, para auxiliar o conjurador."
    ),
    new Magias(
        "invocação", "2", "Invocação de Guardião", "súbita",
        "Chamado Elemental.",
        "Convoca um guardião elemental menor que atua como um protetor temporário do conjurador."
    ),
    new Magias(
        "invocação", "2", "Invocar Elemental Menor", "lenta",
        "Portal Dimensional.",
        "Invoca 1d10 criaturas elemental menor para lutar ao lado do conjurador por 3 rodadas."
    ),
    // Ciclo 3
    new Magias(
        "invocação", "3", "Conjuração de Monstro", "súbita",
        "Aliado Espiritual.",
        "Convoca uma criatura mítica ou monstruosa para combater ao lado do conjurador por 5 rodadas."
    ),
    new Magias(
        "invocação", "3", "Proteção do Guardião", "rápida",
        "Invocação de Guardião.",
        "Invoca um guardião elemental maior  para proteger a área ao redor do conjurador, bloqueando ataques."
    ),
    new Magias(
        "invocação", "3", "Exército Elemental", "lenta",
        "Invocar Elemental Menor.",
        "Invoca uma pequena legião de criaturas elementares para realizar tarefas ou combater inimigos em uma área."
    ),
    // Ciclo 4
    new Magias(
        "invocação", "4", "Invocação de Fogo Infernal", "rápida",
        "Conjuração de Monstro.",
        "Conjura um monstro de fogo, como um elemental de fogo, que pode causar danos consideráveis aos inimigos."
    ),
    new Magias(
        "invocação", "4", "Barreira Elemental", "súbita",
        "Proteção do Guardião.",
        "Invoca uma barreira protetora composta de elementos (4 base) que bloqueia ataques mágicos e físicos."
    ),
    new Magias(
        "invocação", "4", "Chamada dos Titãs", "lenta",
        "Exército Elemental.",
        "Invoca uma criatura colossal elemental, que tem grande força física e resistência."
    ),
    // Ciclo 5
    new Magias(
        "invocação", "5", "Invocação de Demônio", "súbita",
        "Invocação de Fogo Infernal.",
        "Conjura um demônio menor para realizar tarefas perigosas ou lutar ao lado do conjurador por um curto período."
    ),
    new Magias(
        "invocação", "5", "Exército de Sombras", "rápida",
        "Barreira Elemental.",
        "Invoca uma horda de criaturas sombrias que atacam os inimigos com rapidez, mas desaparecem quando derrotadas."
    ),
    new Magias(
        "invocação", "5", "Invocação de Celestial", "lenta",
        "Chamada dos Titãs.",
        "Conjura um ser celestial para proteger ou atacar em nome do conjurador, sendo um aliado temporário muito poderoso."
    ),
    // Ciclo 6
    new Magias(
        "invocação", "6", "Chama do Abismo", "lenta",
        "Invocação de Demônio.",
        "Invoca um ser demoníaco poderoso que pode realizar ataques devastadores, mas exige grande controle do conjurador."
    ),
    new Magias(
        "invocação", "6", "Mestre Elemental", "súbita",
        "Exército de Sombras.",
        "Conjura um mestre elemental que pode controlar todos os aspectos de um tipo específico de elemento em grande escala."
    ),
    new Magias(
        "invocação", "6", "Conjuração de Titãs", "rápida",
        "Invocação de Celestial.",
        "Invoca um titã de grande porte, que possui uma força incomparável e habilidades mágicas poderosas."
    ),
    // Ciclo 7
    new Magias(
        "invocação", "7", "Convocação do Caos", "lenta",
        "Chama do Abismo.",
        "Convoca uma criatura de um plano caótico, que possui poder imenso, mas com total imprevisibilidade."
    ),
    new Magias(
        "invocação", "7", "Grande Invocação Celestial", "rápida",
        "Mestre Elemental.",
        "Invoca um ser celestial de poder supremo para auxiliar o conjurador, curar aliados ou eliminar grandes ameaças."
    ),
    new Magias(
        "invocação", "7", "Exército das Profundezas", "lenta",
        "Conjuração de Titãs.",
        "Invoca um exército de criaturas poderosas do abismo ou das profundezas, prontas para devastar qualquer inimigo."
    ),
];