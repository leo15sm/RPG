import { Magias } from '../classRPG.js';

export const magiasAgua  = [
    // Ciclo 0
    new Magias(
        "agua", "0", "Aqua Skim", "súbita",
        "Nenhum",
        "Manifestação da essência da água na forma de uma áurea que recobre o corpo do usuário, dissipando efeitos energéticos, imunidade a efeitos de contato por fogo e garantindo o estado de estar submerso."
    ),

    // Ciclo 1
    new Magias(
        "agua", "1", "Toque Húmido", "súbita",
        "Aqua Skim",
        "Gerar o efeito de contato da água, sendo molhar objetos e interação com seres energéticos."
    ),
    new Magias(
        "agua", "1", "Glifo do Aprimoramento", "súbita",
        "Escrita Mágica e Aqua Skim",
        "Escrita mágica que melhora em 50% o efeito de suporte de uma magia."
    ),
    new Magias(
        "agua", "1", "Criar Água", "rápida",
        "Manifestar Magia e Aqua Skim",
        "Criação de uma pequena quantidade de água potável."
    ),
    new Magias(
        "agua", "1", "Toque Refrescante", "súbita",
        "Nenhum",
        "Um toque que alivia a fadiga, reduzindo a exaustão temporária e restaurando 5 de vigor ao alvo."
    ),

    // Ciclo 2
    new Magias(
        "agua", "2", "Arma Arcana da Água", "súbita",
        "Arma Arcana e Toque Húmido",
        "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque de água, por 10 rodadas."
    ),
    new Magias(
        "agua", "2", "Runa da Água", "súbita",
        "Glifo do Aprimoramento",
        "Runa mágica cravada em um local, gerando uma vantagem extra em habilidades de suporte e o consumo de mana é um redutor fixo no mana máximo equivalente ao ciclo."
    ),
    new Magias(
        "agua", "2", "Aqua Modelagem", "Rápida",
        "Criar Água",
        "Criar pequenos objetos compostos inteiramente de água."
    ),
    new Magias(
        "agua", "2", "Esfera de Água", "lenta",
        "Aqua Skim e Magia de Ataque",
        "Canalização de toda áurea mágica em uma esfera, ganhando uma vantagem para o ataque e causando um dano que enxarca o alvo."
    ),
    new Magias(
        "agua", "2", "Escudo de Água", "lenta",
        "Aqua Skim e Magia de Defesa",
        "Criação de um escudo octogonal composto de áurea da água, ativo por 5 rodadas ou equanto não for destruido por uma interação elemental."
    ),

    // Ciclo 3
    new Magias(
        "agua", "3", "Prisão de Água", "rápido",
        "Aqua Modelagem",
        "Permite criar uma esfera de água ao redor de um alvo molhado, usando o empuxo para mantê-lo preso com vantagem, causa danos por afogamento e conta como uma magia de suporte."
    ),
    new Magias(
        "agua", "3", "Armadura de Água Menor", "rápido",
        "Aqua Skim e Armadura Arcana",
        "Armadura de vento com as prioridades do Aqua Skim, aumentando em 10 no redutor por 10 rodadas e dobrando o redutor contra danos energéticos. Enquanto estiver ativa, a mana skim não poderá ser trocada."
    ),
    new Magias(
        "agua", "3", "Passo de Água", "rápido",
        "Aqua Skim e Impulso Arcano",
        "Canalização da áurea mágica apenas para as pernas, gerando um impulso de velocidade, ganhando vantagem para esquiva e podendo se deslocar sobre fluidos livremente."
    ),
    new Magias(
        "agua", "3", "Golpe de Água", "lenta",
        "Esfera de Água e Arma Arcana da Água",
        "Cria uma projeção de água do golpe de uma arma, causando os efeitos da esfera de água e o dano da arma."
    ),
    new Magias(
        "agua", "3", "Onda Menor", "lenta",
        "Esfera de Água e Aqua Modelagem",
        "Cria uma onda de 2 metros de altura que persegue o alvo até colidir com algo, causando danos e derrubando o alvo."
    ),
    new Magias(
        "agua", "3", "Punho de Agua", "lento",
        "toque húmido e implemento arcano",
        "Um golpe corpo a corpo imbuído com áurea da agua, causando o efeito de contato e ganhando prioridade na ação"
    ),
    
    // Ciclo 4
    new Magias(
        "agua", "4", "Armada dos Mares", "lenta",
        "Arma Arcana e Esfera de Água",
        "Criação de 1d4 armas feitas de áurea da água, que causam o dano do tipo de arma, mais os efeitos da esfera de água, permanecendo em campo por 5 rodadas."
    ),
    new Magias(
        "agua", "4", "Lâmina Aquática", "súbita",
        "Arma Arcana e Esfera de Água",
        "Conjura uma lâmina feita de água que corta como uma espada, concedendo uma vantagem para ataques de combate corpo a corpo."
    ),
    new Magias(
        "agua", "4", "Water Walk", "lenta",
        "Passo de Água e Prisão de Água",
        "Permite andar sobre a água durante 5 rodadas, usando o passo de água uma vez a cada rodada sem consumo extra de mana. Em combate, se o oponente estiver dentro da água, ganha-se 1 Vantagem Aprimorada de combate marítimo."
    ),
    new Magias(
        "agua", "4", "Respiração Aquática", "súbita",
        "Nenhum",
        "Permite que o usuário respire embaixo d'água por até 10 minutos."
    ),
    new Magias(
        "agua", "4", "Jato de Água", "súbita",
        "Esfera de Água",
        "Dispara um jato de água pressurizada contra um alvo, causando dano e empurrando-o alguns metros."
    ),
    new Magias(
        "agua", "4", "Mestre da Maré", "rápida",
        "onda menor",
        "Permite controlar a altura e o movimento de uma pequena massa de água por até 10 minutos."
    ),
    // Ciclo 5
    new Magias(
        "agua", "5", "Criar Lagoa Menor", "lenta",
        "Prisão de Água",
        "Cria várias ondas de água em todas as direções para preencher um local de até 1200 m², com uma profundidade de meio metro, conta como uma magia de suporte."
    ),
    new Magias(
        "agua", "5", "Arma de Tritão", "rápido",
        "Magia de Voo e Runa de Tritão",
        "Cria-se em um dos membros a arma natural, composta de essência da água, de algum tipo de tritão, ganhando as vantagens naturais destes, podendo ser usada para fazer guelras, permitindo respiração aquática."
    ),
    // Ciclo 6
    new Magias(
        "agua", "6", "Evocar Ondas", "lenta",
        "Mestre da Maré",
        "Permite produzir ondas de até 4 metros de altura e direcionar em um alvo, durante 3 turnos, servem tanro para defesa quanto para o atque."
    ),
    // Ciclo 7
    new Magias(
        "agua", "7", "Tsunami", "lenta",
        "Evocar Ondas",
        "Cria uma onda massiva que varre inimigos e causa dano extenso em uma grande área, com uma força imparável."
    ),
    new Magias(
        "agua", "7", "Avatar da Maré", "lenta",
        "---",
        "O conjurador assume a forma de um ser aquático gigante, ganhando força e resistência aumentadas, e ataques de água devastadores por 10 rodadas."
    ),
    // ciclo 8
    new Magias(
        "agua", "8", "Explosão do Mar Profundo", "lenta",
        "Tsunami.",
        "Desencadeia uma explosão de energia mágica da água que causa dano cataclísmico e atordoa todos os oponentes em uma grande área."
    ),
    // ciclo 9

    // ciclo 10
    new Magias(
        "agua", "10", "Dilúvio", "lenta",
        "---",
        "Gera uma inundação massiva que cobre toda a área de combate, submergindo inimigos e forçando-os a nadar ou sofrer os efeitos de afogamento."
    ),
];