import { Magias } from '../classRPG.js';

export const magiasEncantamento  = [
    // Ciclo 0
    new Magias(
        "encantamento", "0", "Palavra Amistosa", "súbita",
        "Nenhum",
        "Concede uma leve influência sobre um alvo, tornando-o amigável por uma rodada. Não afeta criaturas hostis."
    ),
    new Magias(
        "encantamento", "0", "Brilho Fascinante", "rápida",
        "Nenhum",
        "Faz os olhos do conjurador brilharem com uma luz encantadora, distraindo uma criatura próxima."
    ),
    new Magias(
        "encantamento", "0", "Calma Instantânea", "súbita",
        "Nenhum",
        "Reduz o nível de agressividade de um alvo por um turno, dificultando ataques diretos."
    ),
    // Ciclo 1
    new Magias(
        "encantamento", "1", "Encantar Pessoa", "súbita",
        "Nenhum",
        "Faz com que uma criatura humanoide se torne sua aliada por até 10 minutos ou até que seja atacada."
    ),
    new Magias(
        "encantamento", "1", "Sugestão Simples", "súbita",
        "Nenhum",
        "Implanta uma ideia simples na mente de um alvo, que tenta realizá-la caso seja razoável."
    ),
    new Magias(
        "encantamento", "1", "Cativar", "rápida",
        "Nenhum",
        "Faz com que todos os alvos próximos olhem para o conjurador, perdendo uma ação no próximo turno."
    ),
    // Ciclo 2
    new Magias(
        "encantamento", "2", "Linguagem Persuasiva", "rápida",
        "Encantar Pessoa.",
        "Permite influenciar uma negociação ou conversa, dobrando a margem de sucesso em interações sociais."
    ),
    new Magias(
        "encantamento", "2", "Coro da Harmonia", "lenta",
        "Nenhum",
        "Concede a aliados próximos bônus em resistência mental e aumenta a eficácia de ações conjuntas."
    ),
    new Magias(
        "encantamento", "2", "Compulsão Menor", "súbita",
        "Sugestão Simples.",
        "Força um alvo a executar uma ação específica, desde que não coloque sua vida em risco direto."
    ),
    // Ciclo 3
    new Magias(
        "encantamento", "3", "Encantar Monstro", "súbita",
        "Encantar Pessoa.",
        "Domina temporariamente a vontade de uma criatura monstruosa, tornando-a um aliado por 5 rodadas."
    ),
    new Magias(
        "encantamento", "3", "Aura Inspiradora", "rápida",
        "Coro da Harmonia.",
        "Cria uma aura que inspira aliados próximos, concedendo vantagens em ações de ataque e defesa por 3 rodadas."
    ),
    new Magias(
        "encantamento", "3", "Inibição Mental", "súbita",
        "Compulsão Menor.",
        "Dificulta as ações de um alvo, impondo desvantagens em testes mentais por 3 rodadas."
    ),
    // Ciclo 4
    new Magias(
        "encantamento", "4", "Ressonância Emocional", "lenta",
        "Coro da Harmonia.",
        "Amplifica emoções em um grupo, tornando aliados mais corajosos ou inimigos mais receosos."
    ),
    new Magias(
        "encantamento", "4", "Ordem Irresistível", "súbita",
        "Compulsão Menor.",
        "Implanta uma ordem específica que o alvo deve seguir, desde que não seja suicida."
    ),
    new Magias(
        "encantamento", "4", "Redoma de Serenidade", "rápida",
        "Aura Inspiradora.",
        "Cria uma bolha de calma ao redor do conjurador, protegendo aliados contra efeitos de medo e desespero por 5 rodadas."
    ),

    // Ciclo 5
    new Magias(
        "encantamento", "5", "Dominação Mental", "lenta",
        "Encantar Monstro.",
        "Controla completamente a mente de uma criatura, permitindo que ela aja sob comando por até 5 rodadas."
    ),
    new Magias(
        "encantamento", "5", "Sinfonia Arcana", "lenta",
        "Coro da Harmonia.",
        "Conjura uma melodia mágica que fortalece aliados, concedendo bônus em todas as ações e imunidade temporária a medo."
    ),
    new Magias(
        "encantamento", "5", "Implantar Memória", "lenta",
        "Ordem Irresistível.",
        "Planta uma memória falsa na mente do alvo, que ele acredita ser real permanentemente."
    ),
    // Ciclo 6
    new Magias(
        "encantamento", "6", "Encantamento Supremo", "lenta",
        "Dominação Mental.",
        "Afeta até três criaturas, controlando suas ações por 5 rodadas sem resistência inicial."
    ),
    new Magias(
        "encantamento", "6", "Aura de Glória", "lenta",
        "Sinfonia Arcana.",
        "Concede vantagens aprimoradas a todos os aliados em um grande raio, além de imunidade a controle mental."
    ),
    new Magias(
        "encantamento", "6", "Palavra Aniquiladora", "súbita",
        "Ordem Irresistível.",
        "Impõe uma ordem final em uma criatura, forçando-a a abandonar a luta ou a se render."
    ),
    // Ciclo 7
    new Magias(
        "encantamento", "7", "Marionetes do Destino", "lenta",
        "Encantamento Supremo.",
        "Controla até cinco criaturas, comandando suas ações sem resistência por até 10 rodadas."
    ),
    new Magias(
        "encantamento", "7", "Harmonia Absoluta", "lenta",
        "Sinfonia Arcana.",
        "Une todos os aliados em perfeita sincronia, permitindo ações conjuntas devastadoras e bônus máximos em combate."
    ),
    new Magias(
        "encantamento", "7", "Controle da Realidade", "lenta",
        "Implantar Memória.",
        "Reescreve as memórias e a percepção de até três criaturas, manipulando-as para acreditar em uma realidade totalmente fictícia."
    ),
];