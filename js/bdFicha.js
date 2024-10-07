import { Atributos, Personagem } from './classAtributos.js';

export const atributos = [
    {
        colunas: ["atributos", "valores", "mod"],
        linhas: ["sabedoria", "intelecto", "carisma", "destreza", "forca", "vitalidade"],
    },
];

export const players = [
    new Personagem("", "", "", "", "", 0, 0, 0, 0, new Atributos(0, 0, 0, 0, 0, 0)),
    new Personagem("Breno", "", "Delfos", "Arqueiro", "Domador", 0, 0, 0, 0, new Atributos(16, 14, 14, 20, 10, 12)),
    new Personagem("Ernani", "Necron", "Thanatos", "Mago", "Arcanista", 12, 0, 0.2, 0, new Atributos(14, 16, 14, 12, 8, 10)),
    new Personagem("João", "", "", "", "", 0, 0, 0, 0, new Atributos(0, 0, 0, 0, 0, 0)),
    new Personagem("Lucas Black", "Naguine", "Medusa", "Druida", "Domador", 130, 0, 4, 1, new Atributos(20, 14, 16, 12, 10, 14)),
    new Personagem("Lucas White", "Kagaho", "Hebe", "Espadachim", "Militar", 21, 0, 0, 0, new Atributos(12, 14, 14, 10, 20, 16)),
    new Personagem("Lyann Black", "", "", "", "", 0, 0, 0, 0, new Atributos(0, 0, 0, 0, 0, 0)),
    new Personagem("Lyann White", "Neko", "Nike", "Mago", "Acadêmico", 17, 0, 0.1, 0, new Atributos(16, 20, 12, 8, 14, 10)),
    new Personagem("Willian", "", "", "", "", 0, 0, 0, 0, new Atributos(0, 0, 0, 0, 0, 0)),
];

//player, nome, filho, classe, oficio, xp, nivel, skill, upgrade, atributos
//sab, int, car, des, forc, vit