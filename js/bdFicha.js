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
     ['Escrita Mágica']
    ),
     /*###########################################*/
     new Personagem(
        "Breno", "Solon", 
        new Bild("Delfos", "Feiticeiro", "Sacerdote", "Oráculo", "Cor Laranja"),
        new Atributos(10, 12, 20, 14, 16, 14),
        new Progresso(0, 820, 9, 1, 21, 11.00),
       ),
    /*###########################################*/
    new Personagem(
        "Davizinho", "---", 
        new Bild("Harpocretes", "Ladino", "---", "---", "---"),
        new Atributos(0, 0, 0, 0, 0, 0),
        new Progresso(0, 87, 19.4, 0, 0, 0.50),
       ),
    /*###########################################*/
    new Personagem(
        "Ernani", "Necron", 
        new Bild("Thanatos", "Mago", "Arcanista", "Morte", "Combustão"),
        new Atributos(8, 10, 12, 20, 14, 14),
        new Progresso(0, 246, 8.4, 0, 9, 3.24),
       ),
    /*###########################################*/
    //nivel, xp, skill, upgrade, missao, gold
    new Personagem(
        "Joãozinho", "Tayson", 
        new Bild("Tritão", "Druida", "Militar", "Tritão Lagosta", "Vapor"),
        new Atributos(0, 0, 0, 0, 0, 0),
        new Progresso(0, 87, 19.4, 0, 0, 0.50),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas Black", "Naguine", 
        new Bild("Medusa", "Druida", "Domador", "Górgona", "Veneno"),
        new Atributos(10, 14, 12, 14, 20, 16),
        new Progresso(0, 340, 25, 0, 7, 22.28),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas White", "Kagaho", 
        new Bild("Hebe", "Espadachim", "Militar", "Fogo", "Raio"),
        new Atributos(20, 16, 10, 14, 12, 14),
        new Progresso(0, 205, 33.5, 2, 6, 10.20),
       ),
    /*###########################################*/
    new Personagem(
        "Lyann Black", "Lucius", 
        new Bild("Delfos", "Arqueiro", "Caçador", "Oráculo", "Cor Vermelha"),
        new Atributos(10, 12, 20, 14, 16, 14),
        new Progresso(0, 235, 33.5, 0, 7, 3.25),
       ),
    /*###########################################*/
    new Personagem(
        "Lyann Nix", "Neko", 
        new Bild("Nike", "Mago", "Acadêmico | Arcanista", "Vitória", "Madeira"),
        new Atributos(8, 10, 14, 20, 16, 12),
        new Progresso(0, 920, 8.6, 1, 26, 7.10),
       ),
    /*###########################################*/
    new Personagem(
        "Niket", "Kazuma", 
        new Bild("Ígnea", "Lanceiro", "Armeiro", "Ninfa do Fogo", "Plasma"),
        new Atributos(14, 12, 16, 20, 10, 14),
        new Progresso(0, 387, 5.9, 0, 3, 3.00),
       ),
    /*###########################################*/
];

//player, nome, bild, atributos, progresso
//sab, int, car, des, forc, vit
//ascendente, classe, oficio, dominio, elemento
//nivel, xp, skill, upgrade, missao, gold
