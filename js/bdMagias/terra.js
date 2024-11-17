import { Magias } from '../classAtributos.js';

export const magiasTerra  = [
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
        "Arma Arcana e Toque Petrificante.",
        "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque da terra, por 10 rodadas."
    ),
    new Magias(
        "terra", "2", "Runa da Terra", "súbita",
        "Glifo da Defesa.",
        "Runa mágica cravada em um local, gerando uma vantagem extra em habilidades defensivas e o consumo de mana é um redutor fixo no mana máximo equivalente ao ciclo."
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
        "Criação de um escudo octogonal composto de áurea da terra, ficando ativo por 10 rodadas ou equanto não for destruido por uma interação elemental."
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
    new Magias(
        "terra", "3", "Punho de Terra", "lento",
        "toque petrificante e implemento arcano",
        "Um golpe corpo a corpo imbuído com áurea da terra, causando o efeito de contato e ganhando prioridade na ação"
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
];