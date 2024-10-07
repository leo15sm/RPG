import { Atributos, Personagem } from './classAtributos.js';

export const atributos = [
    {
        colunas: ["atributos", "valores", "mod"],
        linhas: ["sabedoria", "intelecto", "carisma", "destreza", "forca", "vitalidade"],
    },
];

export const players = [
    new Personagem("", "", "", "", 0, 0, 0, 0, new Atributos(0, 0, 0, 0, 0, 0)),
    new Personagem("Breno", "", "", "", 0, 0, 0, 0, new Atributos(0, 0, 0, 0, 0, 0)),
    new Personagem("João", "", "", "", 0, 0, 0, 0, new Atributos(0, 0, 0, 0, 0, 0)),
    new Personagem("Lucas Black", "Naguine", "Medusa", "Druida", 130, 0, 4, 1, new Atributos(20, 14, 16, 12, 10, 14)),
    new Personagem("Lucas White", "", "", "", 0, 0, 0, 0, new Atributos(0, 0, 0, 0, 0, 0)),
    new Personagem("Lyann Black", "", "", "", 0, 0, 0, 0, new Atributos(0, 0, 0, 0, 0, 0)),
    new Personagem("Lyann White", "", "", "", 0, 0, 0, 0, new Atributos(0, 0, 0, 0, 0, 0)),
    new Personagem("Willian", "", "", "", 0, 0, 0, 0, new Atributos(0, 0, 0, 0, 0, 0)),
];

//player, nome, filho, classe, xp, nivel, skill, upgrade, atributos
//sab, int, car, des, forc, vit