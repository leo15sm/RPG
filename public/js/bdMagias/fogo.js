import { Magias } from '../classRPG.js';

export const magiasFogo  = [
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
        "Arma Arcana e Toque Flamejante.",
        "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque do fogo, por 10 rodadas."
    ),
    new Magias(
        "fogo", "2", "Runa do Fogo", "súbito",
        "Glifo do Ataque.",
        "Runa mágica cravada em um local, gerando uma vantagem extra em habilidades ofensivas e o consumo de mana é um redutor fixo no mana máximo equivalente ao ciclo."
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
        "Criação de um escudo octogonal composto de áurea do fogo, ficando ativo por 5 rodadas ou equanto não for destruido por uma interação elemental."
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
    new Magias(
        "fogo", "3", "Punho de Fogo", "lento",
        "toque flamejante e implemento arcano",
        "Um golpe corpo a corpo imbuído com áurea do fogo, causando o efeito de contato e ganhando prioridade na ação"
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
];