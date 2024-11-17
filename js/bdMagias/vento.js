import { Magias } from '../classAtributos.js';

export const magiasVento  = [
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
        "Arma Arcana e Toque Etéreo.",
        "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque do vento, por 10 rodadas."
    ),
    new Magias(
        "vento", "2", "Runa do Vento", "súbita",
        "Glifo da Expansão.",
        "Runa mágica cravada em um local, gerando uma vantagem extra em habilidades de movimentação e o consumo de mana é um redutor fixo no mana máximo equivalente ao ciclo."
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
        "Criação de um escudo octogonal composto de áurea do vento, ficando ativo por 5 rodadas ou equanto não for destruido por uma interação elemental."
    ),
    // Ciclo 3
    new Magias(
        "vento", "3", "Magia de Voou maior", "súbita",
        "Magia de Levitação e Magia de Voou",
        "Permite voar em uma altitude de até 20m por 10 rodadas, conta como uma magia de movimentação e concede as vantagens de combate aéreo."
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
    new Magias(
        "vento", "3", "Punho de Vento", "lento",
        "toque etéreo e implemento arcano",
        "Um golpe corpo a corpo imbuído com áurea do vento, causando o efeito de contato e ganhando prioridade na ação"
    ),
];