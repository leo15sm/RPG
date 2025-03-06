import { Magias } from '../classRPG.js';

export const magiasRaio  = [
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
        "Runa mágica cravada em um local, gerando uma vantagem aprimorada em habilidades de movimentação, habilidades com prioridade de ação e e o consumo de mana é um redutor fixo no mana máximo equivalente ao ciclo."
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
        "Criação de um escudo octogonal composto de áurea do raio, ativo por 5 rodadas ou equanto não for destruido por uma interação elemental."
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
];