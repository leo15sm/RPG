import { Atributos, Bild, Progresso, Personagem } from './classAtributos.js';

export const atributos = [
    {
        colunas: ["atributos", "valores", "mod"],
        linhas: ["forca", "vitalidade", "destreza", "intelecto", "sabedoria",  "carisma"],
    },
];
//nivel, xp, skill, upgrade, missao, gold
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
        new Bild("Delfos", "Feiticeiro", "Sacerdote lv1", "Oráculo", "Cor Laranja"),
        new Atributos(10, 12, 20, 15, 17, 14),
        new Progresso(5, 136, 35.1, 1, 82, 33.00),
       ),
    /*###########################################*/
    new Personagem(
        "Davizinho", "---", 
        new Bild("Harpocretes", "Ladino", "---", "---", "---"),
        new Atributos(14, 16, 20, 14, 10, 12),
        new Progresso(0, 177, 35.4, 0, 0, 0.50),
       ),
    /*###########################################*/
    new Personagem(
        "Ernani", "Necron", 
        new Bild("Thanatos", "Mago", "Arcanista lv5", "Morte", "Combustão"),
        new Atributos(8, 10, 12, 20, 14, 14),
        new Progresso(0, 884, 23.1, 2, 33, 25.48),
       ),
    /*###########################################*/
    //nivel, xp, skill, upgrade, missao, gold
    new Personagem(
        "Joãozinho", "Tayson", 
        new Bild("Tritão", "Druida", "Arcanista lv2", "Tritão Lagosta", "Vapor"), //Domador lv 1
        new Atributos(16, 12, 14, 14, 20, 10),
        new Progresso(0, 353, 26.8, 1, 6, 1.50),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas Black", "Naguine", 
        new Bild("Medusa", "Druida", "Domador lv2", "Górgona", "Veneno"),
        new Atributos(10, 14, 12, 14, 20, 16),
        new Progresso(0, 655, 7, 6, 12, 91.28),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas White", "Enel", 
        new Bild("Tempesta", "Feiticeiro", "Arcanista lv3", "Ninfa do Raio", "Raio Vermelho"),
        new Atributos(12, 14, 20, 16, 14, 10),
        new Progresso(1, 460, 1.6, 1, 23, 1.00),
       ),
    /*###########################################*/
    new Personagem(
        "Lyann Black", "Lucius", 
        new Bild("Delfos", "Arqueiro", "Caçador lv2", "Oráculo", "Cor Vermelha"),
        new Atributos(10, 12, 20, 14, 16, 14),
        new Progresso(1, 475, 22.8, 3, 11, 21.50),
       ),
    /*###########################################*/
    new Personagem(
        "Lyann Nix", "Neko", 
        new Bild("Nike", "Mago", "Acadêmico lv10", "Vitória", "Madeira"), //Arcanista Lv7 +2
        new Atributos(8, 10, 14, 20, 17, 13),
        new Progresso(4, 584, 30.2, 3, 60, 14.20),
       ),
    /*###########################################*/
    new Personagem(
        "Niket", "Kazuma", 
        new Bild("Ígnea", "Lanceiro", "Armeiro lv3", "Ninfa do Fogo", "Plasma"),
        new Atributos(10, 14, 20, 12, 14, 16),
        new Progresso(2, 107, 23.3, 2, 39, 72.00),
       ),
    /*###########################################*/
    new Personagem(
        "Uilian", "---", 
        new Bild("Eros", "Espadachim", "Artista", "---", "Som"),
        new Atributos(14, 14, 16, 12, 10, 20),
        new Progresso(0, 177, 35.4, 0, 0, 0.50),
       ),
    /*###########################################*/
    //dia 60 -> 177 XP e 35.4 Skill 
];

//player, nome, bild, atributos, progresso
//forc, vit, des, int, sab, car
//ascendente, classe, oficio, dominio, elemento
//nivel, xp, skill, upgrade, missao, gold
