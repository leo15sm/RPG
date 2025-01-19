import { Magias } from '../classAtributos.js';

export const magiasLuz  = [
   // Ciclo 0
    new Magias(
        "luz", "0", "Lumos Skim", "súbita",
        "Nenhum",
        "Manifestação da essência da luz na forma de uma áurea que recobre o corpo do usuário, ganhando imunidade a cegueira, removendo a sombra do usuário e melhoria de 10% em percepções."
    ),

    // Ciclo 1
    new Magias(
        "luz", "1", "Toque Luminoso", "súbita",
        "Lumos Skim",
        "Gerar o efeito de contato da luz, sendo este a santificação ou o dano radiante e cegueira."
    ),

    new Magias(
        "luz", "1", "Glifo da Percepção", "súbita",
        "Escrita mágica e Lumos Skim",
        "Escrita mágica que melhora em 50% as prioridades de percepção e pontaria."
    ),

    new Magias(
        "luz", "1", "Glifo da Radiância", "súbita",
        "Escrita mágica e Lumos Skim",
        "Escrita mágica que fornece prioridade de dano radiante ou efeito sagrado para magias."
    ),

    new Magias(
        "luz", "1", "Holograma", "rápida",
        "Manifestar Magia e Lumos Skim",
        "Criação de imagens de luz."
    ),

    // Ciclo 2
    new Magias(
        "luz", "2", "Arma Arcana do Luz", "súbita",
        "Lumos Skim e Toque Luminoso",
        "Reverte uma arma com a áurea mágica, fornecendo o efeito de contato da magia de toque da luz por 10 rodadas."
    ),

    new Magias(
        "luz", "2", "Runa do Luz", "súbita",
        "Glifo da Percepção ou Radiância",
        "Runa mágica cravada em um local, gerando vantagem aprimorada em habilidades de movimentação, percepção e o consumo de mana é um redutor fixo no mana máximo equivalente ao ciclo."
    ),

    new Magias(
        "luz", "2", "Magia de Miragem", "rápida",
        "Holograma",
        "Cria-se uma cópia sua para que imita seus movimentos para confundir o inimigo, dura 2 turnos."
    ),

    new Magias(
        "luz", "2", "Esfera de Luz", "lenta",
        "Lumos Skim e Magia de Ataque",
        "Canalização de toda áurea mágica em uma esfera, ganhando uma vantagem aprimorada para o ataque e causando cegueira."
    ),

    new Magias(
        "luz", "2", "Escudo de Luz", "lenta",
        "Lumos Skim e Magia de Defesa",
        "Criação de um escudo octogonal composto de áurea da luz, ativo por 5 rodadas ou equanto não for destruido por uma interação elemental."
    ),

    // Ciclo 3
    new Magias(
        "luz", "3", "Magia de Reflexão", "lenta",
        "Magia de Miragem",
        "Permite espelhar partes do cenário, confundindo o alvo."
    ),
    new Magias(
        "luz", "3", "Armadura de Luz Menor", "rápida",
        "Lumos Skim e Armadura Arcana",
        "Armadura de luz com prioridades do Lumos Skim, aumenta 10 no redutor por 10 rodadas e dobra o redutor contra danos de elementos básicos."
    ),
    new Magias(
        "luz", "3", "Passo de Luz", "rápida",
        "Lumos Skim e Impulso Arcano",
        "Canalização da áurea mágica apenas para as pernas, com o intuído de gerar um impulso de velocidade, ganhando duas vantagens aprimorada para esquiva e ataques de investida."
    ),
    new Magias(
        "luz", "3", "Punho de Luz", "lenta",
        "Toque elétrico e implemento arcano",
        "Um golpe corpo a corpo imbuído com áurea da luz, causando o efeito de contato e ganhando prioridade na ação."
    ),
    new Magias(
        "luz", "3", "Golpe de Luz", "lenta",
        "Esfera de Luz e Arma Arcana do Luz",
        "Cria uma projeção de luz de um golpe de uma arma, causando os efeitos da esfera de luz e o dano da arma."
    ),
    new Magias(
        "luz", "3", "Miragem Explosiva", "lenta",
        "Esfera de Luz e Magia de Reflexão",
        "Cria-se 1d8 miragens suas ou de construções no campo, onde podem ser usadas como minas, para explodir ao contato."
    ),
    // Ciclo 4
    new Magias(
        "luz", "4", "Armada de Luz", "lenta",
        "Arma Arcana e Esfera de luz",
        "Criação de 1d4 armas feitas de áurea da luz, que causam o dano da arma e os efeitos da esfera de luz, permanecendo em campo por 5 rodadas."
    ),
    new Magias(
        "luz", "4", "Lumos Walk", "lenta",
        "Passo de Luz e Magia de Reflexão",
        "Permite andar sobre feixes de luz por 5 rodadas, podendo usar o passe de luz sem custos uma vez na rodada. Em combate, concede vantagem absoluta ao passe de luz se o oponente não puder ver."
    ),
    // Ciclo 5
    new Magias(
        "luz", "5", "Lazer", "lenta",
        "Miragem Explosiva",
        "Dispara um feixe contínuo de luz por 2 rodadas, causando dano crítico de corte e cauterização, com mutilação certa."
    ),
    new Magias(
        "luz", "5", "Aspecto Solar", "lenta",
        "Magia de Reflexão e Runa do Sol",
        "Aprimora a áurea de luz para a áurea do sol, causando cegueira a quem olhar diretamente, pode ser mantido indefinidamente durante o dia, nesse estado as magias de luz são consideradas magias de fogo e a magias de fogo consideradas magias de luz"
    ),
];