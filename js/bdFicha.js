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
        new Bild("Delfos", "Feiticeiro", "Sacerdote lv6", "Oráculo", "Cor Laranja"),//+10 sacerdote
        new Atributos(10, 12, 20, 15, 17, 14),
        new Progresso(5, 457, 9.4, 1, 96, 83.00),
       ),
    /*###########################################*/
    new Personagem(
        "Ernani", "Necron", 
        new Bild("Thanatos", "Mago", "Arcanista lv5", "Morte", "Combustão"),
        new Atributos(8, 10, 12, 20, 14, 14),
        new Progresso(1, 613, 30, 3, 46, 75.48),
       ),
    /*###########################################*/
    //nivel, xp, skill, upgrade, missao, gold
    new Personagem(
        "Joãozinho", "Tayson", 
        new Bild("Tritão", "Druida", "Arcanista lv2", "Tritão Lagosta", "Vapor"), //Domador lv 1
        new Atributos(16, 12, 14, 14, 20, 10),
        new Progresso(0, 437, 35, 2, 6, 1.50),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas Black", "Naguine", 
        new Bild("Medusa", "Druida", "Domador lv2", "Górgona", "Veneno"),
        new Atributos(10, 14, 12, 14, 20, 16),
        new Progresso(0, 771, 28.8, 7, 12, 141.28),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas White", "Enel", 
        new Bild("Tempesta", "Feiticeiro", "Arcanista lv3", "Ninfa do Raio", "Raio Vermelho"),
        new Atributos(12, 14, 20, 16, 14, 10),
        new Progresso(1, 503, 6.1, 1, 23, 1.00),
       ),
    /*###########################################*/
    new Personagem(
        "Lyann Black", "Lucius", 
        new Bild("Delfos", "Arqueiro", "Caçador lv2", "Oráculo", "Cor Vermelha"),
        new Atributos(10, 12, 20, 14, 16, 14),
        new Progresso(1, 863, 10.4, 3, 25, 71.50), //Maestria 5 Arco
       ),
    /*###########################################*/
    new Personagem(
        "Lyann Nix", "Neko", 
        new Bild("Nike", "Mago", "Acadêmico lv10", "Vitória", "Madeira"), //Arcanista Lv10
        new Atributos(8, 10, 14, 20, 17, 13),
        new Progresso(5, 936, 17.0, 2, 102, 79.20),
       ),
    /*###########################################*/
    new Personagem(
        "Niket", "Kazuma", 
        new Bild("Ígnea", "Lanceiro", "Armeiro lv3", "Ninfa do Fogo", "Plasma"),
        new Atributos(10, 14, 20, 12, 14, 16),
        new Progresso(3, 97, 20.1, 1, 48, 122.00),
       ),
    /*###########################################*/
    new Personagem(
        "Uilian", "Aldritch", 
        new Bild("Eros", "Espadachim", "Artista", "Carisma", "Som"),
        new Atributos(14, 14, 16, 12, 10, 20),
        new Progresso(0, 229, 8.8, 1, 1, 0.50),
       ),
    /*###########################################*/
    //dia 74 -> 219 XP e 43.8 Skill 

    /*###########################################
    new Personagem(
        "Davizinho", "---", 
        new Bild("Harpocretes", "Ladino", "---", "---", "---"),
        new Atributos(14, 16, 20, 14, 10, 12),
        new Progresso(0, 219, 39.6, 0, 0, 0.50),
    ),*/
];

//player, nome, bild, atributos, progresso
//forc, vit, des, int, sab, car
//ascendente, classe, oficio, dominio, elemento
//nivel, xp, skill, upgrade, missao, gold
