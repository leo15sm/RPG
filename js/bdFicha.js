import { Atributos, Bild, Progresso, Personagem } from './classAtributos.js';

export const atributos = [
    {
        colunas: ["atributos", "valores", "mod"],
        linhas: ["forca", "vitalidade", "destreza", "intelecto", "sabedoria",  "carisma"],
    },
];

export const players = [
    new Personagem(
     "Player", "Nome", 
     new Bild("", "", "", "", ""),
     new Atributos(0, 0, 0, 0, 0, 0),
     new Progresso(0, 0, 0, 0, 0, 0),
    ),
     /*###########################################*/
     new Personagem(
        "Breno", "Solon", 
        new Bild("Delfos", "Feiticeiro", "Sacerdote", "Oráculo", "Cor Laranja"),
        new Atributos(10, 12, 20, 14, 16, 14),
        new Progresso(0, 167, 3.5, 1, 5, 4.55),
       ),
    /*###########################################*/
    new Personagem(
        "Ernani", "Necron", 
        new Bild("Thanatos", "Mago", "Arcanista", "Morte", "Fogo | Vento"),
        new Atributos(8, 10, 12, 20, 14, 14),
        new Progresso(0, 185, 3.2, 0, 7, 1.32),
       ),
    /*###########################################*/
    //nivel, xp, skill, upgrade, missao, gold
    new Personagem(
        "Joãozinho", "Tayson", 
        new Bild("Tritão", "Druida", "Militar", "Tritão Lagosta", "Vapor"),
        new Atributos(0, 0, 0, 0, 0, 0),
        new Progresso(0, 66, 15.2, 0, 0, 0.50),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas Black", "Naguine", 
        new Bild("Medusa", "Druida", "Domador", "Górgona", "Veneno"),
        new Atributos(10, 14, 12, 14, 20, 16),
        new Progresso(0, 233, 13.6, 0, 7, 22.28),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas White", "Kagaho", 
        new Bild("Hebe", "Espadachim", "Militar", "Fogo", "Raio"),
        new Atributos(20, 16, 10, 14, 12, 14),
        new Progresso(0, 143, 15.6, 1, 4, 10.20),
       ),
    /*###########################################*/
    new Personagem(
        "Lyann Black", "Lucius", 
        new Bild("Delfos", "Arqueiro", "Caçador", "Oráculo", "Cor Vermelha"),
        new Atributos(10, 12, 20, 14, 16, 14),
        new Progresso(0, 182, 16.1, 1, 5, 3.25),
       ),
    /*###########################################*/
    new Personagem(
        "Lyann White", "Neko", 
        new Bild("Nike", "Mago", "Acadêmico", "Vitória", "Água | Terra"),
        new Atributos(8, 10, 14, 20, 16, 12),
        new Progresso(0, 246, 13.3, 2, 10, 3.05),
       ),
    /*###########################################*/
    new Personagem(
        "Samuel", "---'", 
        new Bild("Estéropes", "Bárbaro", "Arcanista", "Ciclope", "Fogo | Terra"),
        new Atributos(16, 20, 11, 14, 11, 12),
        new Progresso(0, 45, 9, 0, 0, 0.10),
       ),
    /*###########################################*/
    new Personagem(
        "Uilian", "hi'", 
        new Bild("Aracne", "Ladino", "Bandido", "Cromátula", "Veneno"),
        new Atributos(8, 16, 20, 10, 12, 14),
        new Progresso(0, 96, 13.6, 0, 3, 0.10),
       ),
];

//player, nome, bild, atributos, progresso
//sab, int, car, des, forc, vit
//ascendente, classe, oficio, dominio, elemento
//nivel, xp, skill, upgrade, missao, gold
