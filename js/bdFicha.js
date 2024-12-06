import { Atributos, Bild, Progresso, Personagem } from './classAtributos.js';

export const atributos = [
    {
        colunas: ["atributos", "valores", "mod"],
        linhas: ["forca", "vitalidade", "destreza", "intelecto", "sabedoria",  "carisma"],
    },
];
//nivel, xp, skill, upgrade, missao, gold
//forc, vit, des, int, sab, car
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
        "Drock Breno", "Solon", 
        new Bild("Delfos", "Feiticeiro", "Atleta Lv 5", "Oráculo", "Cor Laranja"),//Acadêmico Bastião, Sacerdote lv10
        new Atributos(10, 16, 18, 14, 20, 12),
        new Progresso(8, 667, 2.6, 12, 114, 1113.00),
       ),
    /*###########################################*/
    new Personagem(
        "Ernani", "Necron", 
        new Bild("Thanatos", "Mago", "Arcanista lv8", "Morte", "Combustão"),
        new Atributos(8, 10, 12, 20, 14, 14),
        new Progresso(2, 318, 8, 6, 46, 1105.48),
       ),
    /*###########################################*/
    //nivel, xp, skill, upgrade, missao, gold
    new Personagem(
        "João do Caos", "Tayson", 
        new Bild("Tritão", "Druida", "Arcanista lv7", "Tritão Lagosta", "Vapor"), //Domador lv 1
        new Atributos(16, 12, 14, 14, 20, 10),
        new Progresso(1, 142, 2, 6, 6, 1.50),
       ),
    /*###########################################*/
    new Personagem(
        "Luket", "Naguine", 
        new Bild("Medusa", "Druida", "Domador lv5", "Górgona", "Veneno"),
        new Atributos(10, 14, 12, 14, 20, 16),
        new Progresso(1, 96, 5, 11, 12, 230.00),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas Pix", "---", 
        new Bild("---", "---", "---", "---", "----"),
        new Atributos(20, 20, 20, 20, 20, 20),
        new Progresso(100, 0, 0, 0, 0, 1.00),
       ),
    /*###########################################*/
    new Personagem(
        "Polo", "Lucius", 
        new Bild("Delfos", "Arqueiro", "Caçador lv5", "Oráculo", "Cor Vermelha"),
        new Atributos(10, 12, 20, 14, 16, 14),
        new Progresso(3, 343, 3, 4, 25, 1000.00), //Maestria 10 Arco
       ),
    /*###########################################*/
    new Personagem(
        "Nix", "Neko", 
        new Bild("Nike", "Mago", "Domador lv1", "Vitória", "Madeira"), //Arcanista Lv10, Acadêmico lv10
        new Atributos(8, 10, 14, 20, 17, 13),
        new Progresso(9, 331, 2, 7, 120, 1080.00),
       ),
    /*###########################################*/
    new Personagem(
        "Yori Niket", "Kazuma", 
        new Bild("Ígnea", "Lanceiro", "Atleta Lv5", "Ninfa do Fogo", "Flama"),//Arcanista Lv5, Militar Lv5
        new Atributos(12, 20, 20, 15, 15, 21),
        new Progresso(5, 117, 1, 9, 73, 1150.00),
       ),
    /*###########################################*/
    new Personagem(
        "Uilian", "Aldritch", 
        new Bild("Eros", "Feiticeiro", "Artista", "Carisma", "Ether Caos"),
        new Atributos(14, 14, 16, 12, 10, 20),
        new Progresso(1, 709, 10, 5, 5, 1000.00),
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
