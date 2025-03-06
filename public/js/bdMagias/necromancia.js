import { Magias } from '../classRPG.js';

export const magiasNecromancia  = [
    // Ciclo 0
    new Magias(
        "necromancia", "0", "Toque Mortal", "rápida",
        "Nenhum",
        "O conjurador canaliza energia negativa em um toque, causando uma dor intensa que enfraquece temporariamente o alvo."
    ),
    new Magias(
        "necromancia", "0", "Visão dos Mortos", "rápida",
        "Nenhum",
        "Permite ao conjurador perceber e comunicar-se com os espíritos dos mortos nas proximidades, por um curto período."
    ),
    new Magias(
        "necromancia", "0", "Sopro Sombrio", "rápida",
        "Nenhum",
        "Emite uma onda de energia necromântica que afeta um pequeno grupo de inimigos, drenando sua força vital."
    ),
    // Ciclo 1
    new Magias(
        "necromancia", "1", "Criação de Esqueleto", "rápida",
        "Visão dos Mortos.",
        "Permite ao conjurador animar ossos de um cadáver para criar um esqueleto guerreiro que obedecerá suas ordens."
    ),
    new Magias(
        "necromancia", "1", "Toque da Morte", "súbita",
        "Toque Mortal.",
        "Causa um dano necromântico significativo em uma parte do corpo do alvo, podendo afetar seus órgãos internos ou seu sistema nervoso."
    ),
    new Magias(
        "necromancia", "1", "Luz Negra", "rápida",
        "Sopro Sombrio.",
        "Emite uma luz escura que enfraquece e desorienta os inimigos ao seu redor, deixando-os vulneráveis a ataques."
    ),

    // Ciclo 2
    new Magias(
        "necromancia", "2", "Reanimação", "rápida",
        "Criação de Esqueleto.",
        "Restaura a vida em um cadáver recentemente falecido, trazendo-o de volta como um zumbi obediente ao conjurador."
    ),
    new Magias(
        "necromancia", "2", "Pacto Sombrio", "súbita",
        "Toque da Morte.",
        "Concede ao conjurador um pacto com um espírito maligno, aumentando sua força e resistência enquanto absorve a vida de seus inimigos."
    ),
    new Magias(
        "necromancia", "2", "Sombras Invocadas", "súbita",
        "Luz Negra.",
        "Convoca sombras necromânticas que atacam os inimigos, drenando sua energia vital e deixando-os mais fracos e lentos."
    ),
    // Ciclo 3
    new Magias(
        "necromancia", "3", "Exército dos Mortos", "rápida",
        "Reanimação.",
        "Permite ao conjurador reanimar uma grande quantidade de cadáveres, criando um exército de mortos-vivos para obedecer suas ordens."
    ),
    new Magias(
        "necromancia", "3", "Manto da Morte", "rápida",
        "Pacto Sombrio.",
        "O conjurador se envolve em um manto sombrio que o protege de ataques, ao mesmo tempo em que fortalece suas habilidades necromânticas."
    ),
    new Magias(
        "necromancia", "3", "Toque da Corrupção", "súbita",
        "Sombras Invocadas.",
        "Corrompe a carne de um alvo com um toque, fazendo com que apodreça rapidamente e se transforme em uma criatura controlada pela necromancia."
    ),
    // Ciclo 4
    new Magias(
        "necromancia", "4", "Almas Perdidas", "súbita",
        "Exército dos Mortos.",
        "O conjurador invoca as almas dos mortos, que assombram e causam medo nos inimigos, enfraquecendo suas defesas."
    ),
    new Magias(
        "necromancia", "4", "Revolta dos Mortos", "rápida",
        "Manto da Morte.",
        "Revoca os pactos com os mortos, permitindo que o conjurador controle uma quantidade maior de mortos-vivos e absorva sua energia."
    ),
    new Magias(
        "necromancia", "4", "Chicote de Ossos", "súbita",
        "Toque da Corrupção.",
        "Transforma ossos de mortos em um chicote macabro, que o conjurador usa para atacar e drenar a vida de seus inimigos."
    ),
    // Ciclo 5
    new Magias(
        "necromancia", "5", "Ressurreição", "súbita",
        "Almas Perdidas.",
        "Restaura um aliado ou inimigo recentemente falecido, trazendo-o de volta à vida, porém com um vínculo sombrio ao conjurador."
    ),
    new Magias(
        "necromancia", "5", "Espírito de Vingança", "lenta",
        "Revolta dos Mortos.",
        "Convoca um espírito vingativo para assombrar um inimigo específico, drenando sua energia vital e causando-lhe danos ao longo do tempo."
    ),
    new Magias(
        "necromancia", "5", "Lamento dos Condenados", "súbita",
        "Chicote de Ossos.",
        "Uma onda de dor intensa que afeta os inimigos, fazendo-os sofrer ataques psíquicos e físicos enquanto eles são marcados pela necromancia."
    ),
    // Ciclo 6
    new Magias(
        "necromancia", "6", "Legião do Caos", "rápida",
        "Ressurreição.",
        "Convoca um exército de mortos-vivos, incluindo esqueletos, zumbis e outras criaturas da necromancia, para fazer a guerra em nome do conjurador."
    ),
    new Magias(
        "necromancia", "6", "Fúria da Morte", "lenta",
        "Espírito de Vingança.",
        "Libera uma onda de energia necromântica que aumenta a força dos mortos-vivos e enfraquece os vivos, causando grande dano a todos os inimigos ao redor."
    ),
    new Magias(
        "necromancia", "6", "Devorador de Almas", "lenta",
        "Lamento dos Condenados.",
        "O conjurador pode devorar a alma de um ser vivo, aumentando suas habilidades necromânticas e dando-lhe poder sobre a morte por um tempo limitado."
    ),
    // Ciclo 7 
    new Magias(
        "necromancia", "7", "Domínio da Morte", "lenta",
        "Legião do Caos.",
        "O conjurador ganha controle absoluto sobre a morte, podendo ressuscitar os mortos em qualquer forma desejada e ordenar suas ações."
    ),
    new Magias(
        "necromancia", "7", "Devorador de Vida", "lenta",
        "Fúria da Morte.",
        "Causa a morte instantânea de um inimigo, drenando toda a sua vida e energia para o conjurador, curando-o e aumentando seus poderes."
    ),
    new Magias(
        "necromancia", "7", "Ascensão do Imperador Morto", "lenta",
        "Devorador de Almas.",
        "O conjurador se torna um imperador necromântico, comandando um exército de mortos e absorvendo a vida e as almas ao seu redor para adquirir poderes divinos."
    ),          
];