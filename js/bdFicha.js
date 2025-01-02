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
        new Bild("Delfos", "Feiticeiro", "Atleta Lv 5", "Oráculo", "Cor Azul"),
        //Acadêmico Bastião, Sacerdote lv10
        new Atributos(18, 22, 20, 20, 20, 20),
        new Progresso(8, 707, 2.6, 23, 122, 1113.00),
       ),
    /*###########################################*/
    new Personagem(
        "Ernani", "Necron", 
        new Bild("Thanatos", "Mago", "Arcanista lv10", "Morte", "Chama Sombria"),
        new Atributos(8, 10, 12, 20, 14, 14),
        new Progresso(4, 358, 4, 3, 54, 1105.48),
       ),
    /*###########################################*/
    //nivel, xp, skill, upgrade, missao, gold
    new Personagem(
        "João do Caos", "Tayson", 
        new Bild("Tritão", "Druida", "Atleta lv 10", "Tritão Lagosta", "Vapor e Fluidos"), 
        //Arcanista lv10, Domador lv 10, Box M10
        new Atributos(16, 12, 14, 14, 20, 10),
        new Progresso(1, 182, 0, 1, 10, 1.50),
       ),
    /*###########################################*/
    new Personagem(
        "Luket", "Naguine", 
        new Bild("Medusa", "Druida", "Domador lv5", "Górgona", "Veneno"),
        new Atributos(10, 14, 12, 14, 20, 16),
        new Progresso(1, 136, 5, 22, 16, 230.00),
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
        new Progresso(3, 383, 3, 16, 29, 1000.00), 
        //Maestria 10 Arco
       ),
    /*###########################################*/
    new Personagem(
        "Nix", "Neko", 
        new Bild("Nike", "Mago", "Domador de Criaturas lv4", "Vitória", "Madeira"), 
        //Arcanista Lv10, Acadêmico lv10, Domador lv10
        new Atributos(8, 10, 14, 20, 17, 13),
        new Progresso(9, 371, 2, 1, 128, 1080.00),
       ),
    /*###########################################*/
    new Personagem(
        "Yori Niket", "Kazuma", 
        new Bild("Ígnea", "Lanceiro", "Oficial de Elite Lv3", "Ninfa do Fogo", "Flama"),
        //Arcanista Lv10, Militar Lv10, Cavalaria Lv10 e Atleta Lv10
        //M10 em armadura, Lança e Pistola
        new Atributos(18, 20, 20, 20, 20, 23),
        new Progresso(6, 157, 0, 1, 81, 1150.00),
       ),
    /*###########################################*/
    new Personagem(
        "Uilian", "Aldritch", 
        new Bild("Eros", "Atirador", "Militar Lv1", "Carisma", "Ether Caos"),
        new Atributos(14, 20, 20, 12, 14, 21),
        new Progresso(1, 789, 19, 5, 13, 1000.00),
       ),
    /*###########################################*/
    //dia 120

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
