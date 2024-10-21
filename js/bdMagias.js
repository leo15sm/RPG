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
        "Escrita mágica que melhora em 50% o efeito de suporte de uma magia, pode ser usado antes de conjurar uma magia."
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
        "agua", "2", "Arcano da Água", "súbita",
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
        "Escrita mágica que melhora em 50% o efeito de alcance de uma magia, pode ser usado antes de conjurar uma magia."
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
        "vento", "2", "Arcano do Vento", "súbita",
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
        "Escrita mágica que melhora em 50% o efeito de defesa de uma magia, pode ser usado antes de conjurar uma magia."
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
        "terra", "2", "Arcano da Terra", "súbita",
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
        "Escrita mágica que melhora em 50% o efeito ofensivo de uma magia, pode ser usado antes de conjurar uma magia."
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
        "fogo", "2", "Arcano do Fogo", "súbito",
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
];