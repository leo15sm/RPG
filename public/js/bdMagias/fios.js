import { Magias } from '../classRPG.js';

export const magiasFios  = [
    new Magias("fios", 0, "Wires Skim", "Passivo", "", "Manifestação da essência dos fios na forma de uma áurea que recobre o corpo do usuário permitindo aumentar a durabilidade dos tecidos que esteja usando, ganhando +5 de redutor."),

    // Ciclo 1
    new Magias("fios", 1, "Toque Pegajoso", "Rápido", "Wires Skim", "Gerar o efeito de contato dos fios, sendo este a capacidade de grudar nos objetos, podendo usar para escalar objetos com facilidade."),
    new Magias("fios", 1, "Glifo do Aprimoramento Maior", "Súbito", "Escrita mágica e Wires Skim", "Escrita mágica que melhora em 100% o efeito de suporte de uma magia."),
    new Magias("fios", 1, "Criar Fios", "Rápido", "Manifestar Magia e Wires Skim", "Criação de um fluido que é tecido em fios de uma substância semelhante a seda."),

    // Ciclo 2
    new Magias("fios", 2, "Arma Arcana dos Fios", "Súbito", "Wires Skim e Toque Pegajoso", "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque de pegajoso, por 10 rodadas."),
    new Magias("fios", 2, "Runa Dos Fios", 
        "Súbito",
        "Glifo do Aprimoramento", "Runa mágica cravada em um local, gerando uma vantagem Aprimorada extra em habilidades de Suporte e o consumo de mana é um redutor fixo no mana máximo equivalente ao ciclo."),
    new Magias("fios", 2, "Criar Teias", "Rápido", "Criar Fios", "Cria-se 1d20 teias de até 20m de comprimento e 0,0015 milímetros de espessura que se espalham para todas direções."),
    new Magias("fios", 2, "Esfera de Fios", 
        "Lento", "Wires Skim e Magia de Ataque", 
        "Canalização de toda áurea mágica em uma esfera, ganhando duas vantagens para o ataque e causando um dano que prende o alvo em alguma superfície."),
    new Magias("fios", 2, "Escudo de Fios", 
        "Lento", "Wires Skim e Magia de Defesa", 
        "Criação de um escudo octogonal composto de áurea dos fios, ficando ativo por 5 rodadas ou equanto não for destruido por uma interação elemental."),

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
];