import { Raca, Classe, Atributos } from './classAtributos.js';

export const atributos = [
    {
        colunas: ["atributos", "valores", "mod"],
        linhas: ["sabedoria", "intelecto", "carisma", "destreza", "forca", "essencia", "controle"],
    },
    {
        colunas: ["atributos", "valores"],
        linhas: ["HP","ataque", "defesa", "especialAtaque", "especialDefesa", "reflexo",
             "velocidade", "instinto", "mobilidade", "pontaria", "precisao"],
    },
];

export const racas = [
    new Raca("", new Atributos(0, 0, 0, 0, 0, 0, 0)),
    new Raca("Humano", new Atributos(2, 2, 2, 2, 2, 2, 2)),
    new Raca("Canção", new Atributos(5, 3, 10, 4, 2, 4, 2)),
    new Raca("Furia", new Atributos(4, 3, 3, 4, 10, 6, 1)),
    new Raca("Herudita", new Atributos(5, 10, 4, 3, 2, 3, 4))
];

export const classes = [
    new Classe("",["", ""], new Atributos(0, 0, 0, 0, 0, 0, 0)),
    new Classe("Mago",["Conjurador"], new Atributos(1, 4, 1, 0, 0, 0, 1)),
    new Classe("Druida",["Conjurador", "Mana"], new Atributos(4, 0, 0, 0, 0, 2, 2)),
    new Classe("Ninja",["Geral", "Assassino"], new Atributos(0, 3, 3, 3, 1, 0, 0)),
];

//sabedoria-intelecto-carisma-destreza-forca-essencia-controle