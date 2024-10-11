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
        new Bild("Delfos", "Feiticeiro", "Domador", "Oráculo", "Cor: Laranja"),
        new Atributos(10, 12, 20, 14, 16, 14),
        new Progresso(0, 60, 7.8, 0, 1, 5.05),
       ),
    /*###########################################*/
    new Personagem(
        "Ernani", "Necron", 
        new Bild("Thanatos", "Mago", "Arcanista", "Morte", "Fogo | Vento"),
        new Atributos(8, 10, 12, 20, 14, 14),
        new Progresso(0, 68, 7.8, 0, 2, 1.24),
       ),
    /*###########################################*/
    new Personagem(
        "Joãozinho", "Tayson", 
        new Bild("Tritão", "Lutador", "", "Tritão", "Agua | ?"),
        new Atributos(0, 0, 0, 0, 0, 0),
        new Progresso(0, 45, 9, 1, 0, 0.05),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas Black", "Naguine", 
        new Bild("Medusa", "Druida", "Domador", "Górgona", "Veneno"),
        new Atributos(10, 14, 12, 14, 20, 16),
        new Progresso(0, 130, 9, 1, 3, 15.28),
       ),
    /*###########################################*/
    new Personagem(
        "Lucas White", "Kagaho", 
        new Bild("Hebe", "Espadachim", "Militar", "Fogo", "Raio"),
        new Atributos(20, 16, 10, 14, 12, 14),
        new Progresso(0, 65, 9, 1, 1, 10.20),
       ),
    /*###########################################*/
    new Personagem(
        "Lyann Black", "Lucius", 
        new Bild("Delfos", "Arqueiro", "Caçador", "Oráculo", "Cor: Vermelho"),
        new Atributos(10, 12, 20, 14, 16, 14),
        new Progresso(0, 80, 7.8, 0, 0, 5.05),
       ),
    /*###########################################*/
    new Personagem(
        "Lyann White", "Neko", 
        new Bild("Nike", "Mago", "Acadêmico", "Vitória", "Água | Terra"),
        new Atributos(8, 10, 14, 20, 16, 12),
        new Progresso(0, 112, 9, 2, 5, 3.05),
       ),
    /*###########################################*/
    new Personagem(
        "Willian", "---", 
        new Bild("Aracne", "Ladino", "", "Cromátula", "Veneno"),
        new Atributos(0, 0, 0, 0, 0, 0),
        new Progresso(0, 45, 9, 0, 0, 0.10),
       ),
];

//player, nome, bild, atributos, progresso
//sab, int, car, des, forc, vit
//ascendente, classe, oficio, dominio, elemento
//xp, nivel, skill, upgrade, missao, gold
