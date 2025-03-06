import { Magias } from '../classRPG.js';

export const magiasAbjuração  = [
    // Ciclo 0
    new Magias(
        "abjuração", 0, "Proteção Arcana", "Rápida", "nenhum",
        "Gera uma barreira mágica leve ao redor do usuário, aumentando o redutor em 5."
    ),
    new Magias(
        "abjuração", 0, "Sentido Mágico", "Rápida", "nenhum",
        "Permite ao usuário detectar a presença de magia num raio de 5 metros, útil para detectar armadilhas ou encantamentos."
    ),
    new Magias(
        "abjuração", 0, "Resistência Menor", "Rápida", "nenhum",
        "Confere ao usuário resistência aumentada contra um tipo específico de dano mágico, redutor de +5."
    ),
    
    // Ciclo 1
    new Magias(
        "abjuração", 1, "Escudo de Dissipação", "Súbita", "Proteção Arcana",
        "Cria um escudo mágico que anula a primeira magia direcionada ao usuário, dissipando-a completamente, limitado ao ciclo."
    ),
    new Magias(
        "abjuração", 1, "Selo Arcano Menor", "Rápida", "Sentido Mágico",
        "Marca um alvo com um selo mágico que reduz em 10% a eficácia de qualquer magia utilizada pelo alvo, durante 3 turnos."
    ),
    new Magias(
        "abjuração", 1, "Campo de Desintegração Mágica", "Rápida", "Resistência Menor, Proteção Arcana",
        "Conjura uma área de 1 metro ao redor do usuário que interfere em habilidades mágicas, reduzindo sua potência em 10%."
    ),
    // Ciclo 2
    new Magias(
        "abjuração", 2, "Runa de Selamento", "Súbita", "Selo Arcano Menor",
        "Desenha uma runa mágica em uma superfície que pode selar a ativação de habilidades mágicas naquela área por 1 turno."
    ),
    new Magias(
        "abjuração", 2, "Campo Anulador", "Lenta", "Campo de Desintegração Mágica",
        "Estende uma área de interferência mágica em um raio de 3 metros, reduzindo em 20% a potência das magias lançadas."
    ),
    new Magias(
        "abjuração", 2, "Espelho de Reversão", "Rápida", "Escudo de Dissipação",
        "Cria uma barreira reflexiva que reverte uma magia lançada ao usuário, enviando-a de volta ao conjurador original, limitado ao ciclo."
    ),
    // Ciclo 3
    new Magias(
        "abjuração", 3, "Escudo Absoluto", "Rápida", "Escudo de Dissipação, Selo Arcano Menor",
        "Uma barreira mágica poderosa que anula qualquer magia de dano direto por 2 turnos, limitado ao ciclo."
    ),
    new Magias(
        "abjuração", 3, "Desencantamento Forçado", "Súbita", "Runa de Selamento",
        "Remove efeitos mágicos ativos em uma área de 5 metros, incluindo encantamentos e selos mágicos de ciclo menor."
    ),
    new Magias(
        "abjuração", 3, "Vínculo Arcano Negativo", "Rápida", "Campo Anulador",
        "Estabelece uma conexão mágica com um alvo que reverte metade do dano mágico recebido de volta ao lançador original."
    ),
    // Ciclo 4
    new Magias(
        "abjuração", 4, "Ruptura Dimensional", "Lenta", "Espelho de Reversão, Desencantamento Forçado",
        "Gera uma fenda que desestabiliza conjurações de teleportação e de invocação, impedindo-as de se manifestar por 5 rodadas em um raio de 10 metros."
    ),
    new Magias(
        "abjuração", 4, "Escudo de Resistência Total", "Rápida", "Escudo Absoluto",
        "Cria uma barreira temporária que concede resistência total a um tipo de dano mágico por 3 turnos."
    ),
    new Magias(
        "abjuração", 4, "Campo de Anulação Elemental", "Súbita", "Campo Anulador",
        "Diminui o efeito de magias elementares em uma área de 10 metros, anulando bônus elementares."
    ),
    // Ciclo 5
    new Magias(
        "abjuração", 5, "Selo de Interdição", "Súbita", "Vínculo Arcano Negativo, Desencantamento Forçado",
        "Cria uma área de interdição mágica de 5 metros em que habilidades mágicas não podem ser conjuradas por 3 rodadas."
    ),
    new Magias(
        "abjuração", 5, "Esfera de Contra-Magia", "Lenta", "Escudo de Resistência Total",
        "Conjura uma esfera mágica que anula todas as magias de um ciclo menor em um raio de 10 metros."
    ),
    new Magias(
        "abjuração", 5, "Teia de Anulação", "Rápida", "Ruptura Dimensional",
        "Lança uma rede de energia que suprime habilidades mágicas ao contato, prendendo e silenciando a magia do alvo."
    ),
    // Ciclo 6
    new Magias(
        "abjuração", 6, "Barreira de Supressão Total", "Lenta", "Esfera de Contra-Magia, Selo de Interdição",
        "Uma barreira de 20 metros que anula magias de ciclo menor, atuando como uma zona antimágica completa por 3 rodadas."
    ),
    new Magias(
        "abjuração", 6, "Dissipação de Aura Mágica", "Súbita", "Campo de Anulação Elemental",
        "Dissolve encantamentos e selos em um alvo, removendo completamente qualquer aura mágica de suporte ativa."
    ),
    new Magias(
        "abjuração", 6, "Cápsula do Esquecimento", "Lenta", "Selo de Interdição, Vínculo Arcano Negativo",
        "Encapsula um alvo em um selo poderoso, removendo sua capacidade de conjurar magias por 5 turnos."
    ),
    // Ciclo 7
    new Magias(
        "abjuração", 7, "Prisão Antimágica Eterna", "Lenta", "Cápsula do Esquecimento, Esfera de Contra-Magia",
        "Conjura uma prisão mágica em torno do alvo, selando permanentemente todas as capacidades mágicas do alvo enquanto a prisão se mantiver."
    ),
    new Magias(
        "abjuração", 7, "Runa da Neutralização Suprema", "Súbita", "Dissipação de Aura Mágica, Ruptura Dimensional",
        "Uma runa que anula qualquer efeito mágico em uma área de 50 metros por 1 turno, incluindo magias de qualquer ciclo."
    ),
    new Magias(
        "abjuração", 7, "Destino Silencioso", "Lenta", "Barreira de Supressão Total",
        "Imbuído em um alvo, este efeito faz com que o alvo perca todas as memórias e habilidades de uso de magia, tornando-o incapaz de conjurar permanentemente."
    ),
];