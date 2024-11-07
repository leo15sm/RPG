import {Magias} from './classAtributos.js';

export const escolas = [
    {
        lista: ["arcana", "divinação", "vento", "agua", "terra", "fogo", "luz", "trevas", "fios",  
            "veneno", "raio", "natureza"],
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
    /*#####################################################################################*/
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

    // Ciclo 2
    new Magias(
        "agua", "2", "Arma Arcana da Água", "súbita",
        "Aqua Skim e Toque Húmido",
        "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque de água, por 10 rodadas."
    ),
    new Magias(
        "agua", "2", "Runa da Água", "súbita",
        "Glifo do Aprimoramento",
        "Runa mágica cravada em um local, gerando uma vantagem extra em habilidades de suporte e não consome mana ao usar."
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
        "Criação de um escudo octogonal composto de áurea da água, ativo por 5 rodadas ou enquanto um dano não destruir sua resistência, que é igual a 10 x mana gasto. Interações elementais se aplicam aqui, tendo armadura contra golpes de fogo e vulnerável a golpes de terra."
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

    // Ciclo 4
    new Magias(
        "agua", "4", "Armada dos Mares", "lenta",
        "Arma Arcana e Esfera de Água",
        "Criação de 1d4 armas feitas de áurea da água, que causam o dano do tipo de arma, mais os efeitos da esfera de água, permanecendo em campo por 5 rodadas."
    ),
    new Magias(
        "agua", "4", "Water Walk", "lenta",
        "Passo de Água e Prisão de Água",
        "Permite andar sobre a água durante 5 rodadas, usando o passo de água uma vez a cada rodada sem consumo extra de mana. Em combate, se o oponente estiver dentro da água, ganha-se 1 Vantagem Aprimorada de combate marítimo."
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
    /*#####################################################################################*/
    // Ciclo 0
    new Magias(
        "vento", "0", "Venti Skim", "súbita",
        "Nenhum",
        "Manifestação da essência do vento na forma de uma áurea que recobre o corpo do usuário reduzindo seu peso total em 10% e melhora sua respiração, não consome ação, pode ser usado uma mana skim por turno."
    ),
    // Ciclo 1
    new Magias(
        "vento", "1", "Toque Etéreo", "súbita",
        "Venti Skim.",
        "Gerar o efeito de contato do vento, sendo este impacto e interação com seres etérios."
    ),
    new Magias(
        "vento", "1", "Glifo da Expansão", "súbita",
        "Escrita mágica e Venti Skim.",
        "Escrita mágica que melhora em 50% o efeito de alcance de uma magia."
    ),
    new Magias(
        "vento", "1", "Criar Brisas", "rápida",
        "Manifestar Magia e Venti Skim.",
        "Criação de pequenas correntes de ar."
    ),
    // Ciclo 2
    new Magias(
        "vento", "2", "Arma Arcana do Vento", "súbita",
        "Venti Skim e Toque Etéreo.",
        "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque do vento, por 10 rodadas."
    ),
    new Magias(
        "vento", "2", "Runa do Vento", "súbita",
        "Glifo da Expansão.",
        "Runa mágica cravada em um local, gerando uma vantagem extra em habilidades de movimentação e não consome mana ao usar."
    ),
    new Magias(
        "vento", "2", "Magia de Levitação", "súbita",
        "Criar Brisas.",
        "Reverte um objeto com a áurea do vento para fazê-lo levitar."
    ),
    new Magias(
        "vento", "2", "Esfera de Vento", "lenta",
        "Venti Skim e Magia de Ataque.",
        "Canalização de toda áurea mágica em uma esfera, ganhando uma vantagem para o ataque e causando um dano que arremessa o alvo para muito longe, podendo acertar com o dobro da margem padrão."
    ),
    new Magias(
        "vento", "2", "Escudo de Vento", "lenta",
        "Venti Skim e Magia de Defesa.",
        "Criação de um escudo octogonal composto de áurea do vento, ficando ativo por 5 rodadas ou enquanto um dano não destruir a sua resistência que é igual a 10 x mana gasto. As interações elementais se aplicam aqui, tendo armadura a golpes de terra e vulnerável a golpes de fogo."
    ),
    // Ciclo 3
    new Magias(
        "vento", "3", "Magia de Voou", "súbita",
        "Magia de Levitação.",
        "Permite voar em uma altitude de até 10m por 10 rodadas, conta como uma magia de movimentação e concede as vantagens de combate aéreo."
    ),
    new Magias(
        "vento", "3", "Armadura de Vento Menor", "rápida",
        "Venti Skim e Armadura Arcana.",
        "Armadura de vento com as prioridades do Venti Skim, aumentando o 10 no redutor por 10 rodadas e dobrando o redutor contra danos de impacto. Enquanto estiver ativa a mana skim não poderá ser trocada."
    ),
    new Magias(
        "vento", "3", "Passo de Vento", "rápida",
        "Venti Skim e Impulso Arcano.",
        "Canalização da áurea mágica apenas para as pernas, com o intuito de gerar um impulso de velocidade, ganhando duas vantagens para esquiva e podendo se deslocar até o dobro de sua margem padrão."
    ),
    new Magias(
        "vento", "3", "Golpe de Vento", "lento",
        "Esfera de Vento e Arma Arcana do Vento.",
        "Cria uma projeção de vento do golpe de uma arma, causando os efeitos da esfera de vento e o dano da arma."
    ),
    new Magias(
        "vento", "3", "Rajada de Vento", "lento",
        "Esfera de Vento e Criar Brisas.",
        "Cria-se uma forte corrente de ar que arremessa o que for atingido para muito longe e causa danos cortantes."
    ),
    // Ciclo 4
    new Magias(
        "vento", "4", "Armada dos Céus", "lento",
        "Arma Arcana e Esfera de vento.",
        "Criação de 1d4 armas feitas de áurea do vento, que causam o dano do tipo de arma, mais os efeitos da esfera de vento, permanecendo em campo por 5 rodadas."
    ),
    new Magias(
        "vento", "4", "Sky Walk", "lento",
        "Passo de Vento e Magia de Voou.",
        "Permite andar no céu durante 5 rodadas, se valendo do passo de vento uma vez a cada rodada sem consumo extra de mana. Em combate, se o oponente não puder voar, as vantagens do passo de vento se tornam 1 Vantagem Aprimorada."
    ),
    // Ciclo 5
    new Magias(
        "vento", "5", "Criar Tornado", "lento",
        "Rajada de Vento.",
        "Cria-se várias correntes de ar em rotação para formar um tornado com 2,5 metros de altura e 1 metro de comprimento, podendo ser direcionado como um ataque."
    ),
    new Magias(
        "vento", "5", "Asas de Harpia", "Rápido",
        "Magia de voou e Runa da Harpia.",
        "Cria-se um par de asas funcionais, compostas de essência do vento, permitindo voar por longas distâncias e prioridade em combate aéreo."
    ),
    /*#####################################################################################*/
    // Ciclo 0
    new Magias(
        "terra", "0", "Geo Skim", "súbita",
        "Nenhum.",
        "Manifestação da essência da terra na forma de uma áurea que recobre o corpo do usuário tornando isolante elétrico e aumento de 10% no redutor."
    ),
    // Ciclo 1
    new Magias(
        "terra", "1", "Toque Petrificante", "súbita",
        "Geo Skim.",
        "Gerar o efeito de contato da terra, sendo esta petrificação."
    ),
    new Magias(
        "terra", "1", "Glifo da Defesa", "súbita",
        "Escrita mágica e Geo Skim.",
        "Escrita mágica que melhora em 50% o efeito de defesa de uma magia."
    ),
    new Magias(
        "terra", "1", "Geo Modelagem", "rápida",
        "Manifestar Magia e Geo Skim.",
        "Modelagem de rochas pequenas."
    ),
    // Ciclo 2
    new Magias(
        "terra", "2", "Arma Arcana da Terra", "súbita",
        "Geo Skim e Toque Petrificante.",
        "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque da terra, por 10 rodadas."
    ),
    new Magias(
        "terra", "2", "Runa da Terra", "súbita",
        "Glifo da Defesa.",
        "Runa mágica cravada em um local, gerando uma vantagem extra em habilidades defensivas e não consome mana ao usar."
    ),
    new Magias(
        "terra", "2", "Magia de Enrijecimento", "súbita",
        "Geo Modelagem.",
        "Reverte um objeto com rochas aprimorando o redutor em 5."
    ),
    new Magias(
        "terra", "2", "Esfera de Terra", "lenta",
        "Geo Skim e Magia de Ataque.",
        "Canalização de toda áurea mágica em uma esfera, ganhando uma vantagem para o ataque e causando um dano contundente."
    ),
    new Magias(
        "terra", "2", "Escudo de Terra", "lenta",
        "Geo Skim e Magia de Defesa.",
        "Criação de um escudo octogonal composto de áurea da terra, ficando ativo por 5 rodadas ou enquanto um dano não destruir a sua resistência que é igual a 15 x mana gasto. As interações elementais se aplicam aqui, tendo armadura a golpes de água e vulnerável a golpes de vento."
    ),
    // Ciclo 3
    new Magias(
        "terra", "3", "Casca de Rochas", "rápida",
        "Magia de Enrijecimento.",
        "Permite reverter o corpo com rochas muito rígidas, reduzindo 5 em destreza, mas dobrando o redutor por 1 turno."
    ),
    new Magias(
        "terra", "3", "Armadura de Terra Menor", "rápida",
        "Geo Skim e Armadura Arcana.",
        "Armadura da terra com as prioridades do Geo Skim, aumentando o 15 no redutor por 10 rodadas e dobrando o redutor contra danos de corte. Enquanto estiver ativa a mana skim não poderá ser trocada."
    ),
    new Magias(
        "terra", "3", "Passo de Terra", "rápida",
        "Geo Skim e Impulso Arcano.",
        "Canalização da áurea mágica apenas para as pernas, com o intuído de gerar um impulso de velocidade, ganhando uma vantagem para esquiva e podendo se deslocar em superfícies íngremes."
    ),
    new Magias(
        "terra", "3", "Golpe de Terra", "lento",
        "Esfera de Terra e Arma Arcana da Terra.",
        "Cria uma projeção de terra do golpe de uma arma, causando os efeitos da esfera de terra e o dano da arma."
    ),
    new Magias(
        "terra", "3", "Parede de Rocha", "lento",
        "Esfera de Terra e Magia de enrijecimento.",
        "Permite erguer do solo uma parede de 2 metros de altura e 2m de comprimento, com vantagem para defesa, tendo resistência equivalente ao solo."
    ),
    // Ciclo 4
    new Magias(
        "terra", "4", "Armada do Subterrâneo", "lenta",
        "Arma Arcana e Esfera de Terra.",
        "Criação de 1d4 armas feitas de rochas revertidas com áurea da terra, que causam o dano do tipo de arma, mais os efeitos da esfera de terra, permanecendo até serem desfeitas."
    ),
    new Magias(
        "terra", "4", "Geo Walk", "lenta",
        "Passo de Terra e Casca de Rochas.",
        "Permite andar em superfícies íngremes durante 5 rodadas, se valendo do passo de terra duas vezes a cada rodada sem consumo extra de mana, enquanto estiver no solo. Em combate se o oponente estiver em um local fechado com muitas rochas as vantagens do passe se tornam 1 Vantagem Aprimorada."
    ),
    // Ciclo 5
    new Magias(
        "terra", "5", "Pilar de Terra", "lenta",
        "Parede de Rocha.",
        "Cria-se vários pilares de terra saindo do solo em direção ao alvo, com o intuito de prendê-lo entre os pilares e modelar o campo."
    ),
    new Magias(
        "terra", "5", "Armadura de Myrmekos", "rápida",
        "Casca de Rochas e Runa da Myrmekos.",
        "Cria-se uma couraça feita de diversos minérios feitos de essência da terra com cartilagens rochosas permitindo movimentação, ganhando um redutor de armadura pesada, mas sem perder destreza."
    ),
    /*#####################################################################################*/
    // Ciclo 0
    new Magias(
        "fogo", "0", "Flama Skim", "súbito",
        "Nenhum.",
        "Manifestação da essência do fogo na forma de uma áurea que recobre o corpo do usuário gerando um impulso maior o que aumenta os danos físicos em 10%, além de gerar armadura contra o frio."
    ),
    // Ciclo 1
    new Magias(
        "fogo", "1", "Toque Flamejante", "súbito",
        "Flama Skim.",
        "Gerar o efeito de contato do fogo, sendo este de causar queimadura."
    ),
    new Magias(
        "fogo", "1", "Glifo do Ataque", "súbito",
        "Escrita mágica e Flama Skim.",
        "Escrita mágica que melhora em 50% o efeito ofensivo de uma magia."
    ),
    new Magias(
        "fogo", "1", "Fogos de Artifício", "rápido",
        "Manifestar Magia e Flama Skim.",
        "Cria-se fogos de artifício coloridos."
    ),
    // Ciclo 2
    new Magias(
        "fogo", "2", "Arma Arcana do Fogo", "súbito",
        "Flama Skim e Toque Flamejante.",
        "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque do fogo, por 10 rodadas."
    ),
    new Magias(
        "fogo", "2", "Runa do Fogo", "súbito",
        "Glifo do Ataque.",
        "Runa mágica cravada em um local, gerando uma vantagem extra em habilidades ofensivas e não consome mana ao usar."
    ),
    new Magias(
        "fogo", "2", "Mísseis Mágicos", "rápido",
        "Fogos de Artifício.",
        "Cria-se de 6 a 18 mísseis de mana imbuídos na essência mágica do fogo, causam danos leves, mas podem provocar queimaduras."
    ),
    new Magias(
        "fogo", "2", "Esfera de Fogo", "lento",
        "Flama Skim e Magia de Ataque.",
        "Canalização de toda áurea mágica em uma esfera, ganhando duas vantagens para o ataque e causando um dano explosivo que provoca queimadura."
    ),
    new Magias(
        "fogo", "2", "Escudo de Fogo", "lento",
        "Flama Skim e Magia de Defesa.",
        "Criação de um escudo octogonal composto de áurea do fogo, ficando ativo por 5 rodadas ou enquanto um dano não destruir a sua resistência que é igual a 10 x mana gasto. As interações elementais se aplicam aqui, tendo armadura a golpes de vento e vulnerável a golpes de água."
    ),

    // Ciclo 3
    new Magias(
        "fogo", "3", "Míssil de Fogo", "lento",
        "Mísseis Mágicos.",
        "Criação de um projétil de fogo, que ao travar um alvo o persegue até colidir com um objeto, tendo uma vantagem para o ataque."
    ),
    new Magias(
        "fogo", "3", "Armadura de Fogo Menor", "lento",
        "Flama Skim e Armadura Arcana.",
        "Armadura do fogo com as prioridades do Flama Skim, aumentando o 10 no redutor por 10 rodadas e causa o redutor como dano ao contato. Enquanto estiver ativa a mana skim não poderá ser trocada."
    ),
    new Magias(
        "fogo", "3", "Passo de Fogo", "rápido",
        "Flama Skim e Impulso Arcano.",
        "Canalização da áurea mágica apenas para as pernas, com o intuito de gerar um impulso de velocidade, ganhando uma vantagem para esquiva e pode ser usado como um ataque explosivo, convertendo a vantagem para ataque com Destreza."
    ),
    new Magias(
        "fogo", "3", "Golpe de Fogo", "lento",
        "Esfera de Fogo e Arma Arcana do Fogo.",
        "Cria uma projeção de fogo do golpe de uma arma, causando os efeitos da esfera de fogo e o dano da arma."
    ),
    new Magias(
        "fogo", "3", "Fogo da Raposa", "rápido",
        "Esfera de Fogo e Mísseis Mágicos.",
        "Permite criar 1d6 bolas de fogo que ficam circundando o usuário, podendo serem usadas individualmente a cada turno."
    ),
    // Ciclo 4
    new Magias(
        "fogo", "4", "Armada Incendiária", "lento",
        "Arma Arcana e Esfera de fogo.",
        "Criação de 1d4 armas feitas chamas, que causam o dano do tipo de arma, mais os efeitos da esfera de fogo, permanecendo até serem desfeitas."
    ),
    new Magias(
        "fogo", "4", "Flame Walk", "lento",
        "Passo de Fogo e Míssil de Fogo.",
        "Permite canalizar chamas nos pés durante 5 rodadas, se valendo do passo de fogo uma vez a cada rodada sem consumo extra de mana. Em combate sempre que usar o passo de fogo, poderá combiná-lo com um chute se valendo de 1 Vantagem Aprimorada no golpe."
    ),
    // Ciclo 5
    new Magias(
        "fogo", "5", "Rajada de Fogo", "lento",
        "Míssil de Fogo.",
        "Cria-se um disparo contínuo de fogo, consumindo mana total ao ativar e metade por turno ativo, se valendo de 2 vantagens no ataque."
    ),
    new Magias(
        "fogo", "5", "Lazer de Ciclope", "súbito",
        "Fogo da Raposa e Runa do Ciclope.",
        "Disparo de lazer dos olhos, como um turno extra de olho mágico, prioridade de ação, causando o mesmo dano de uma esfera de fogo, tendo suas 2 vantagens para ataque."
    ),
    /*#####################################################################################*/
    new Magias(
        "vento", "3", "Punho de Vento", "lento",
        "toque etéreo e implemento arcano",
        "Um golpe corpo a corpo imbuído com áurea do vento, causando o efeito de contato e ganhando prioridade na ação"
    ),
    new Magias(
        "agua", "3", "Punho de Agua", "lento",
        "toque húmido e implemento arcano",
        "Um golpe corpo a corpo imbuído com áurea da agua, causando o efeito de contato e ganhando prioridade na ação"
    ),
    new Magias(
        "terra", "3", "Punho de Terra", "lento",
        "toque petrificante e implemento arcano",
        "Um golpe corpo a corpo imbuído com áurea da terra, causando o efeito de contato e ganhando prioridade na ação"
    ),
    new Magias(
        "fogo", "3", "Punho de Fogo", "lento",
        "toque flamejante e implemento arcano",
        "Um golpe corpo a corpo imbuído com áurea do fogo, causando o efeito de contato e ganhando prioridade na ação"
    ),
    /*#####################################################################################*/
    new Magias(
        "raio", "0", "Eletro Skim", "súbita",
        "Nenhum",
        "Manifestação da essência do raio na forma de uma áurea que recobre o corpo do usuário, ganhando prioridade em todas as ações, além de reduzir as ações rápidas para súbitas."
    ),
    
    new Magias(
        "raio", "1", "Toque Elétrico", "súbita",
        "Eletro Skim",
        "Gerar o efeito de contato do raio, sendo este a paralisia."
    ),
    
    new Magias(
        "raio", "1", "Glifo da Aceleração", "súbita",
        "Escrita mágica e Eletro Skim",
        "Escrita mágica que acelera a ação de uma magia."
    ),
    
    new Magias(
        "raio", "1", "Glifo da Velocidade", "súbita",
        "Escrita mágica e Eletro Skim",
        "Escrita mágica que fornece prioridade de ação para uma magia."
    ),
    
    new Magias(
        "raio", "1", "Criar Corrente Elétrica", "rápida",
        "Manifestar Magia e Eletro Skim",
        "Criação de uma pequena corrente elétrica."
    ),
    
    new Magias(
        "raio", "2", "Arma Arcana do Raio", "súbita",
        "Eletro Skim e Toque Eletrico",
        "Reverte uma arma com a áurea mágica, fornecendo à mesma o efeito de contato da magia de toque do raio, por 10 rodadas."
    ),
    
    new Magias(
        "raio", "2", "Runa do Raio", "súbita",
        "Glifo da Aceleração ou Velocidade",
        "Runa mágica cravada em um local, gerando uma vantagem aprimorada em habilidades de movimentação e habilidades com prioridade de ação."
    ),
    
    new Magias(
        "raio", "2", "Eletrificar Objeto", "rápida",
        "Criar Corrente Elétrica",
        "Eletrifica um objeto, permitindo usar da estática para colá-lo em algum lugar."
    ),
    
    new Magias(
        "raio", "2", "Esfera de Raio", "lenta",
        "Eletro Skim e Magia de Ataque",
        "Canalização de toda áurea mágica em uma esfera, ganhando duas vantagens para o ataque e causando paralisia."
    ),
    
    new Magias(
        "raio", "2", "Escudo de Raio", "lenta",
        "Eletro Skim e Magia de Defesa",
        "Criação de um escudo octogonal composto de áurea do raio, ativo por 5 rodadas ou até que um dano não destrua sua resistência (10 x mana gasto). As interações elementais se aplicam aqui, tendo armadura a golpes de energia e vulnerável a golpes de terra."
    ),
    
    new Magias(
        "raio", "3", "Campo Estático", "lenta",
        "Eletrificar Objeto",
        "Permite eletrificar o chão em uma zona de 12.000 m², prendendo tudo que estiver em contato com o solo por 1d6 turnos."
    ),
    
    new Magias(
        "raio", "3", "Armadura de Raio Menor", "rápida",
        "Eletro Skim e Armadura Arcana",
        "Armadura de raio com as prioridades do Eletro Skim, aumentando o redutor em 10 por 10 rodadas e dobrando o redutor contra danos energéticos. Enquanto estiver ativa, a mana skim não poderá ser trocada."
    ),
    
    new Magias(
        "raio", "3", "Passo de Raio", "rápida",
        "Eletro Skim e Impulso Arcano",
        "Canalização da áurea mágica apenas para as pernas, gerando um impulso de velocidade, ganhando uma vantagem aprimorada para esquiva e ataques de investida."
    ),
    
    new Magias(
        "raio", "3", "Punho de Raio", "lenta",
        "Toque Elétrico e Implemento Arcano",
        "Um golpe corpo a corpo imbuído com áurea do raio, causando o efeito de contato e ganhando prioridade na ação."
    ),
    
    new Magias(
        "raio", "3", "Golpe de Raio", "lenta",
        "Esfera de Raio e Arma Arcana do Raio",
        "Cria uma projeção de raio do golpe de uma arma, causando os efeitos da esfera de raio e o dano da arma."
    ),
    
    new Magias(
        "raio", "3", "Globo Eletrificado", "lenta",
        "Esfera de Raio e Criar Corrente Elétrica",
        "Cria-se uma esfera de raios com tentáculos de energia, causando o mesmo dano em todos que forem acertados."
    ),
    
    new Magias(
        "raio", "4", "Armada de Raio", "lenta",
        "Arma Arcana e Esfera de Raio",
        "Criação de 1d4 armas feitas de áurea do raio, que causam o dano do tipo de arma, mais os efeitos da esfera de raio, permanecendo em campo por 5 rodadas."
    ),
    
    new Magias(
        "raio", "4", "Thunder Walk", "lenta",
        "Passo de Raio e Campo Estático",
        "Permite formar a zona eletrificada durante 5 rodadas, podendo usar a estática para realizar um passe de raio por turno sem custos adicionais. Em combate, se o oponente não puder se mover, o passe de raio terá 1 Vantagem Absoluta."
    ),
    
    new Magias(
        "raio", "5", "Corrente do Trovão", "rápida",
        "Campo Estático",
        "Ao acertar um golpe do elemento raio em um alvo, pode usar essa magia para propagar 50% do dano que este tomar para até 5 alvos dentro de 2m de raio, causando paralisia."
    ),
    
    new Magias(
        "raio", "5", "Ascenção do Grifo", "lenta",
        "Globo Eletrificado e Runa de Grifo",
        "Cria-se plumas e garras feitas da essência do raio, que causam o efeito de toque, permitindo voo e prioridades de combate aéreo."
    ),
    /*#####################################################################################*/
    // Ciclo 0
    new Magias(
        "divinação", "0", "Purificar Alimentos", "súbita",
        "Nenhum",
        "Remoção de impurezas em alimentos e líquidos, em quantidades pequenas."
    ),

    new Magias(
        "divinação", "0", "Magia de Iluminação", "súbita",
        "Nenhum",
        "Controle básico da essência prateada, para produzir uma iluminação mística sobre um local."
    ),

    // Ciclo 1
    new Magias(
        "divinação", "1", "Magia de Cura", "rápida",
        "Purificar Alimentos",
        "Estimula a recuperação de tecidos, curando 10% de HP por uso."
    ),

    new Magias(
        "divinação", "1", "Curar Ferimentos", "rápida",
        "Purificar Alimentos",
        "Remove efeitos negativos de ferimentos leves e graves por todo o corpo."
    ),

    new Magias(
        "divinação", "1", "Magia de Detecção", "rápida",
        "Magia de Iluminação",
        "Pode ser usado como uma lente perceptiva para detectar algo da seguinte lista: Magia, Venenos ou Mortos vivos."
    ),

    new Magias(
        "divinação", "1", "Magia de Orientação", "rápida",
        "Magia de Iluminação",
        "Garante proficiência III em testes de sobrevivência, para saber a direção de um caminho que já passou ou para se orientar em relação às cardinalidades."
    ),

    // Ciclo 2
    new Magias(
        "divinação", "2", "Regeneração", "lenta",
        "Magias de Cura e Curar Ferimentos",
        "Cria um pequeno véu prateado circundando o corpo, que restaura feridas leves e recupera 10% do HP por 5 turnos."
    ),

    new Magias(
        "divinação", "2", "Abençoar Água", "rápida",
        "Purificar Alimentos",
        "Abençoa um recipiente pequeno com água para criar água benta."
    ),

    new Magias(
        "divinação", "2", "Purificar Efeitos", "rápida",
        "Curar Ferimentos",
        "Remove efeitos negativos que ajam sobre a mente do alvo."
    ),

    new Magias(
        "divinação", "2", "Percepção Extra", "súbita",
        "Magias de Detecção",
        "Permite jogar um teste extra de percepção."
    ),

    new Magias(
        "divinação", "2", "Clarividência Menor", "lenta",
        "Magia de Orientação",
        "Permite vislumbrar no véu do destino uma indicação subjetiva para uma pergunta."
    ),

    new Magias(
        "divinação", "2", "Ler Magias", "súbita",
        "Magias de Detecção",
        "Permite decifrar escritas mágicas em objetos, cenários ou em pessoas, garantindo a identificação de habilidades mágicas ou runas."
    ),

    // Ciclo 3
    new Magias(
        "divinação", "3", "Ver o Futuro", "lento",
        "Clarividência Menor",
        "Permite vislumbrar um evento que pode ocorrer em breve."
    ),
    new Magias(
        "divinação", "3", "Criar Alimento", "lenta",
        "Magias de Regeneração",
        "Cria 1d4 frutos que servem para alimentação."
    ),
    new Magias(
        "divinação", "3", "Criar Água", "lenta",
        "Magias de Regeneração",
        "Cria água suficiente para preencher um cantil."
    ),
    new Magias(
        "divinação", "3", "Acalmar Animal", "rápida",
        "Purificar Efeitos",
        "Permite acalmar um animal que esteja enfurecido, podendo fazê-lo dormir."
    ),
    new Magias(
        "divinação", "3", "Compreender Idiomas", "rápida",
        "Ler Magias",
        "Permite entender um idioma que esteja sendo falado ou que esteja escrito, desde que este seja comum."
    ),

    new Magias(
        "divinação", "3", "Detecção Avançada", "lenta",
        "Magia de Detecção",
        "Permite identificar tudo que as magias de detecção encontram, mais esta lista: armadilhas, animais, bem, mal, ordem e caos."
    ),

    new Magias(
        "divinação", "3", "Visão da Morte", "lenta",
        "Magia de Detecção",
        "Permite vislumbrar como uma criatura ou animal pode ser morta ou seus pontos fracos."
    ),

    // Ciclo 4
    new Magias(
        "divinação", "4", "Romper Morto Vivo", "lenta",
        "Abençoar Água",
        "Libera um projétil sagrado que causa danos críticos em mortos vivos, magias de cura melhoram essa habilidade."
    ),

    new Magias(
        "divinação", "4", "Magia da Vitalidade", "rápida",
        "Purificar Efeitos",
        "Aumenta o HP em 10 pontos por 10 rodadas, se beneficiar de bônus de cura."
    ),

    new Magias(
        "divinação", "4", "Magia de Resistência", "rápida",
        "Purificar Efeitos",
        "Aumenta o redutor em 5 pontos por 10 rodadas, se beneficiar de bônus de cura."
    ),

    new Magias(
        "divinação", "4", "Purgar Ocultação", "rápida",
        "Detecção Avançada",
        "Permite anular efeitos de ocultação de ciclo equivalente."
    ),

    new Magias(
        "divinação", "4", "Proteger Visão", "rápida",
        "Detecção Avançada",
        "Permite jogar um teste de resistência contra efeitos de contato de olhos mágicos ou de coisas que afetem diretamente a percepção."
    ),

    new Magias(
        "divinação", "4", "Luz do dia", "lenta",
        "Romper mortos vivos",
        "Permite criar uma iluminação equivalente ao dia, afetando criaturas que tenham alguma interação com este clima."
    ),
    new Magias(
        "divinação", "4", "Clareza Mental", "súbita",
        "Ver o Futuro",
        "Aumenta a capacidade de foco, permitindo ter sucesso em um teste mental."
    ),
    // Ciclo 5
    new Magias(
        "divinação", "5", "Adivinhação", "lento",
        "Clareza Mental",
        "Permite consultar um ser superior para obter conselhos sobre o futuro."
    ),
    new Magias(
        "divinação", "5", "Visão do Passado", "lento",
        "Clareza Mental",
        "Permite reviver uma memória ou evento significativo que ocorreu no passado."
    ),
    new Magias(
        "divinação", "5", "Aura do Ser", "súbita",
        "Clareza Mental",
        "Revela a verdadeira natureza e intenções de uma criatura, mostrando sua aura mágica."
    ),
    // Ciclo 6
    new Magias(
        "divinação", "6", "Olho do Destino", "lenta",
        "Adivinhação",
        "Revela uma visão do futuro, mostrando possíveis desdobramentos de uma situação atual, permitindo ao usuário se preparar."
    ),
    new Magias(
        "divinação", "6", "Oração da Sabedoria", "lento",
        "Adivinhação",
        "Garante vantagem em testes de sabedoria por um breve período."
    ),
    new Magias(
        "divinação", "6", "Escuta do Além", "lenta",
        "Adivinhação",
        "Permite ouvir conversas ou sons em uma área distante, como se estivesse presente no local."
    ),
    new Magias(
        "divinação", "6", "Espelho da Verdade", "súbita",
        "Visão do Passado",
        "Permite ver uma verdade oculta sobre uma situação ou pessoa."
    ),
    // Ciclo 7
    new Magias(
        "divinação", "7", "Profecia", "lento",
        "Oração da Sabedoria",
        "Revela uma visão detalhada de um evento importante que está por vir."
    ),
    /*#####################################################################################*/
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
        "Runa mágica cravada em um local, gerando vantagem aprimorada em habilidades de movimentação e percepção."
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
        "Criação de um escudo octogonal composto de áurea da luz, com resistência de 15x mana gasto, ativo por 5 rodadas ou até ser destruído. As interações elementais se aplicam aqui, tendo armadura a golpes elementais básicos e vulnerável a golpes de trevas."
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
    /*#####################################################################################*/
    new Magias("natureza", "0", "Flora Skim", "súbita", "Nenhum", 
        "Manifestação da essência da natureza na forma de uma áurea que recobre o corpo do usuário melhorando em 20% toda cura recebida e toda criação de vida."),
    
    new Magias("natureza", "1", "Toque Natural", "súbita", "Flora Skim", 
        "Gera o efeito de contato da natureza, sendo este a criação espontânea de vida, podendo ser usado como uma manobra de agarrão."),
    
    new Magias("natureza", "1", "Glifo da Vitalização", "súbita", "Escrita mágica e Flora Skim", 
        "Escrita mágica que melhora em 50% todas as magias de cura."),
    
    new Magias("natureza", "1", "Glifo da Armadura", "súbita", "Escrita mágica e Flora Skim", 
        "Escrita mágica que melhora em 50% todas as magias de aprimoramento de redutor."),
    
    new Magias("natureza", "1", "Criar Flora", "Rápida", "Manifestar Magia e Flora Skim", 
        "Criação de algum tipo de forma de vida."),
    
    new Magias("natureza", "2", "Arma Arcana da Natureza", "súbita", "Flora Skim e Toque Natural", 
        "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque da natureza, por 10 rodadas."),
    
    new Magias("natureza", "2", "Runa da Natureza", "súbita", "Glifo da Vitalização ou Armadura", 
        "Runa mágica cravada em um local, gerando uma vantagem extra em habilidades de suporte e defensivas."),
    
    new Magias("natureza", "2", "Manifestar Raízes", "rápida", "Criar Flora", 
        "Criação de diversas raízes que aplicarão o efeito de contato da natureza."),
    
    new Magias("natureza", "2", "Esfera de Natureza", "lenta", "Flora Skim e Magia de Ataque", 
        "Canalização de toda áurea mágica em uma esfera, ganhando uma vantagem para o ataque e causando o efeito de agarrão da natureza."),
    
    new Magias("natureza", "2", "Escudo de Natureza", "lenta", "Flora Skim e Magia de Defesa", 
        "Criação de um escudo octogonal composto de áurea da natureza, ativo por 5 rodadas ou até a resistência se esgotar (20 x mana gasto). Resistente a líquidos e vulnerável ao fogo."),
    
    new Magias("natureza", "3", "Campo da Flora", "lenta", "Manifestar Raízes", 
        "Criação de diversas formas de vida no campo, com o intuito de ganhar a prioridade de terreno."),
    
    new Magias("natureza", "3", "Armadura de Natureza Menor", "rápida", "Flora Skim e Armadura Arcana", 
        "Armadura de natureza com prioridades do Flora Skim, aumentando o redutor em 10 por 10 rodadas e dobrando a resistência a líquidos."),
    
    new Magias("natureza", "3", "Passo de Natureza", "rápida", "Flora Skim e Impulso Arcano", 
        "Canalização da áurea mágica nas pernas para ganhar velocidade, com duas vantagens para esquiva e criação de vida ao passar."),
    
    new Magias("natureza", "3", "Punho de Natureza", "lenta", "Toque Natural e Implemento Arcano", 
        "Golpe corpo a corpo imbuído com áurea da natureza, causando o efeito de contato e com prioridade na ação de agarrão."),
    
    new Magias("natureza", "3", "Golpe de Natureza", "lenta", "Esfera de Natureza e Arma Arcana da Natureza", 
        "Projeção de natureza do golpe de uma arma, causando os efeitos da esfera e o dano da arma."),
    
    new Magias("natureza", "3", "Esfera Sanguessuga", "lenta", "Esfera de Natureza e Manifestar Raízes", 
        "Cria uma esfera de natureza que enraíza no local atingido e se alimenta do sangue do alvo."),
    
    new Magias("natureza", "4", "Armada de Natureza", "lenta", "Arma Arcana e Esfera de Natureza", 
        "Criação de 1d4 armas de áurea da natureza, causando dano do tipo da arma e permanecendo em campo por 5 rodadas."),
    
    new Magias("natureza", "4", "Flora Walk", "lenta", "Passo de Natureza e Campo da Flora", 
        "Forma uma zona de flora ativa por 5 rodadas, permitindo um uso de Passo de Natureza por turno sem custos adicionais."),
    
    new Magias("natureza", "5", "Diversidade da Natureza", "rápida", "Campo da Flora", 
        "Deve ser usada com Campo da Flora ativo. O conjurador pode gerar flora do seu tipo em todo o campo."),
    
    new Magias("natureza", "5", "Guardião da Flora", "lenta", "Esfera Sanguessuga e Runa do Ent", 
        "Cria cascas e galhos de essência da natureza, causando efeito de toque e funcionando como armadura, podendo manipular livremente a flora com conexão."),
    /*#####################################################################################*/
    new Magias("fios", 0, "Wires Skim", "Passivo", "", "Manifestação da essência dos fios na forma de uma áurea que recobre o corpo do usuário permitindo aumentar a durabilidade dos tecidos que esteja usando, ganhando +5 de redutor."),

    // Ciclo 1
    new Magias("fios", 1, "Toque Pegajoso", "Rápido", "Wires Skim", "Gerar o efeito de contato dos fios, sendo este a capacidade de grudar nos objetos, podendo usar para escalar objetos com facilidade."),
    new Magias("fios", 1, "Glifo do Aprimoramento Maior", "Súbito", "Escrita mágica e Wires Skim", "Escrita mágica que melhora em 100% o efeito de suporte de uma magia."),
    new Magias("fios", 1, "Criar Fios", "Rápido", "Manifestar Magia e Wires Skim", "Criação de um fluido que é tecido em fios de uma substância semelhante a seda."),

    // Ciclo 2
    new Magias("fios", 2, "Arma Arcana dos Fios", "Súbito", "Wires Skim e Toque Pegajoso", "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque de pegajoso, por 10 rodadas."),
    new Magias("fios", 2, "Arcano Dos Fios", "Súbito", "Glifo do Aprimoramento", "Runa mágica cravada em um local, gerando uma vantagem Aprimorada extra em habilidades de Suporte e não consome mana ao usar."),
    new Magias("fios", 2, "Criar Teias", "Rápido", "Criar Fios", "Cria-se 1d20 teias de até 20m de comprimento e 0,0015 milímetros de espessura que se espalham para todas direções."),
    new Magias("fios", 2, "Esfera de Fios", "Lento", "Wires Skim e Magia de Ataque", "Canalização de toda áurea mágica em uma esfera, ganhando duas vantagens para o ataque e causando um dano que prende o alvo em alguma superfície."),
    new Magias("fios", 2, "Escudo de Fios", "Lento", "Wires Skim e Magia de Defesa", "Criação de um escudo octogonal composto de áurea dos fios, ficando ativo por 5 rodadas ou enquanto um dano não destruir a sua resistência que é igual a 10 x mana gasto."),

    // Ciclo 3
    new Magias("fios", 3, "Casulo de Aranha", "Rápido", "Criar Teias", "Permite criar uma esfera de fios ao redor de um alvo preso em uma teia, causando danos de sufocamento."),
    new Magias("fios", 3, "Armadura de Fios Menor", "Rápido", "Wires Skim e Armadura Arcana", "Armadura arcana que aumenta em 10 o redutor por 10 rodadas e dobra o redutor contra danos de fluidos."),
    new Magias("fios", 3, "Passo de Fios", "Rápido", "Wires Skim e Impulso Arcano", "Canalização da áurea mágica para as pernas, gerando impulso de velocidade e vantagens para esquiva."),
    new Magias("fios", 3, "Golpe de Fios", "Lento", "Esfera de Fios e Arma Arcana dos Fios", "Cria uma projeção de fios do golpe de uma arma, causando os efeitos da esfera de fios e o dano da arma."),
    new Magias("fios", 3, "Teia de Aranha", "Rápido", "Esfera de Fios e Criar Teias", "Cria uma esfera de fios que se torna uma rede de fios semelhante a uma teia de aranha, prendendo o alvo por 1 turno."),

    // Ciclo 4
    new Magias("fios", 4, "Armada dos Aracnídeos", "Lento", "Arma Arcana e Esfera de Fios", "Criação de 1d4 armas feitas de áurea dos fios com os efeitos da esfera de fios."),
    new Magias("fios", 4, "Aracno Walk", "Lento", "Passo de Fios e Casulo de Aranha", "Espalha teias por todo o campo, permitindo o uso de passo de fios uma vez por rodada sem consumo extra de mana."),

    // Ciclo 5
    new Magias("fios", 5, "Ninho de Aranha", "Lento", "Casulo de Aranha", "Cria-se quatro vezes a quantidade de fios da magia criar teias, prendendo os alvos em um casulo de aranha ao expandir."),
    new Magias("fios", 5, "Teias de Aracne", "Rápido", "Criar Fios e Runa de Aracne", "Permite substituir teias comuns por teias de Aracne, com durabilidade equivalente a cabos de bronze e habilidades mágicas inatas."),

    // Ciclo 6
    new Magias("fios", 6, "Teias de Slime", "Rápido", "Teias de Aracne e Runa de Slime", "Permite usar teias combinadas com fluidos de slime, com resistência de cabos de aço e flexibilidade de grafeno."),
    /*#####################################################################################*/
];