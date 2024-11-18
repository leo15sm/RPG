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
        new Progresso(4, 329, 1, 2, 54, 18.00),
       ),
    /*###########################################*/
    new Personagem(
        "Davizinho", "---", 
        new Bild("Harpocretes", "Ladino", "---", "---", "---"),
        new Atributos(14, 16, 20, 14, 10, 12),
        new Progresso(0, 114, 22.8, 0, 0, 0.50),
       ),
    /*###########################################*/
    new Personagem(
        "Ernani", "Necron", 
        new Bild("Thanatos", "Mago", "Arcanista", "Morte", "Combustão"),
        new Atributos(8, 10, 12, 20, 14, 14),
        new Progresso(0, 308, 16.8, 0, 11, 10.48),
       ),
    /*###########################################*/
    //nivel, xp, skill, upgrade, missao, gold
    new Personagem(
        "Joãozinho", "Tayson", 
        new Bild("Tritão", "Druida", "Domador", "Tritão Lagosta", "Vapor"),
        new Atributos(16, 12, 14, 14, 20, 10),
        new Progresso(0, 127, 11.6, 0, 5, 1.50),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas Black", "Naguine", 
        new Bild("Medusa", "Druida", "Domador", "Górgona", "Veneno"),
        new Atributos(10, 14, 12, 14, 20, 16),
        new Progresso(0, 403, 33.4, 0, 10, 31.28),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas White", "Enel", 
        new Bild("Tempesta", "Feiticeiro", "Arcanista", "Ninfa do Raio", "Raio Vermelho"),
        new Atributos(12, 14, 20, 16, 14, 10),
        new Progresso(1, 274, 16.4, 1, 17, 1.00),
       ),
    /*###########################################*/
    new Personagem(
        "Lyann Black", "Lucius", 
        new Bild("Delfos", "Arqueiro", "Caçador", "Oráculo", "Cor Vermelha"),
        new Atributos(10, 12, 20, 14, 16, 14),
        new Progresso(1, 349, 27.6, 1, 11, 6.50),
       ),
    /*###########################################*/
    new Personagem(
        "Lyann Nix", "Neko", 
        new Bild("Nike", "Mago", "Acadêmico lv10", "Vitória", "Madeira"),
        new Atributos(8, 10, 14, 20, 17, 13),
        new Progresso(4, 584, 30.2, 3, 60, 14.20),
       ),
    /*###########################################*/
    new Personagem(
        "Niket", "Kazuma", 
        new Bild("Ígnea", "Lanceiro", "Armeiro", "Ninfa do Fogo", "Plasma"),
        new Atributos(10, 14, 20, 12, 14, 16),
        new Progresso(1, 607, 3.1, 0, 19, 6.00),
       ),
    /*###########################################*/
    new Personagem(
        "Uilian", "---", 
        new Bild("Eros", "Espadachim", "Artista", "---", "Vento | Água"),
        new Atributos(14, 14, 16, 12, 10, 20),
        new Progresso(0, 114, 22.8, 0, 0, 0.50),
       ),
    /*###########################################*/
    //dia 38 -> 114 XP e 22.8 Skill 
];

//player, nome, bild, atributos, progresso
//forc, vit, des, int, sab, car
//ascendente, classe, oficio, dominio, elemento
//nivel, xp, skill, upgrade, missao, gold
