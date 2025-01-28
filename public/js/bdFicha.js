import { Atributos, Bild, Progresso, Personagem } from './classAtributos.js';
import { classeList } from './bdClasse.js';

export const atributos = [
    {
        colunas: ["atributos", "valores", "mod"],
        linhas: ["forca", "vigor", "destreza", "intelecto", "sabedoria",  "carisma"],
    },
    {
        colunas: ["atributos", "valores"],
        linhas: ["hp", "mana", "estamina", "redutor"],
    },
];

// Função para obter uma classe pelo nome
function getClasseByName(nomeClasse) {
    return classeList.find(classe => classe.nome === nomeClasse);
}

//player, nome, bild, atributos, progresso
//forc, vit, des, int, sab, car
//ascendente, classe, dominio, elemento, oficio, maestria
export const players = [
    new Personagem(
        "Player", "---", 
        new Bild("", getClasseByName("---"), 
        [""], [""], [""], [""]),
        new Atributos(0, 0, 0, 0, 0, 0),
        new Progresso(0, 0, 0, 0, 0, 0)
    ),
    /*###########################################*/
    new Personagem(
        "Drock Breno", "Solon", 
        new Bild(
            "Delfos", 
            getClasseByName("Feiticeiro"), 
            ["Vigor"], 
            ["Chama Dourada"], 
            ["Elite 1", "Sacerdote 10", "Acadêmico 10", "Atleta 5", "Astrologo 5"],
            ["Arco 10", "Escudo 10", "Armadura 10"]
        ),
        new Atributos(20, 22, 30, 30, 22, 20),
        new Progresso(9, 201, 9, 0, 154, 1113.00)
    ),
    /*###########################################*/
    new Personagem(
        "Ernani", "Necron", 
        new Bild(
            "Thanatos", 
            getClasseByName("Mago"), 
            ["Morte"], 
            ["Chama Sombria"], 
            ["Arquimago 4"],
            ["Foice 5"]
        ),
        new Atributos(18, 22, 18, 22, 18, 18),
        new Progresso(6, 780, 2, 1, 92, 1105.48)
    ),
    /*###########################################*/
    new Personagem(
        "João do Caos", "Tayson", 
        new Bild(
            "Tritão", 
            getClasseByName("Druida"), 
            ["Tritão Lagosta"], 
            ["Aqua"], 
            ["Atleta 10", "Arcanista 10", "Domador de Criaturas 1"],
            ["Combate 10"]
        ), 
        new Atributos(18, 18, 18, 22, 22, 18),
        new Progresso(6, 644, 8, 11, 84, 10.00)
    ),
    /*###########################################*/
    //nivel, xp, skill, upgrade, missao, gold
    /*###########################################*/
    new Personagem(
        "Luket", "Naguine", 
        new Bild(
            "Medusa", 
            getClasseByName("Druida"), 
            ["Górgona"], 
            ["Veneno"], 
            ["Domador 5", "Faz tudo 10", "Atltelta 10"],
            ["Chicote 5"]
        ),
        new Atributos(18, 18, 18, 22, 22, 18),
        new Progresso(6, 720, 3, 22, 48, 230.00)
    ),
    /*###########################################*/
    new Personagem(
        "Lucas Pix", "---", 
        new Bild(
            "---", 
            getClasseByName("---"), 
            ["---"], 
            ["---"], 
            ["---"],
            ["---"]
        ),
        new Atributos(40, 40, 40, 40, 40, 40),
        new Progresso(100, 0, 0, 0, 0, 1.00)
    ),
    /*###########################################*/
    new Personagem(
        "Polo", "Lucius", 
        new Bild(
            "Delfos", 
            getClasseByName("Arqueiro"), 
            ["Oráculo"], 
            ["Cor Vermelha"], 
            ["Caçador 5", "Domador 10", "Faz Tudo 10", "Atleta 5"],
            ["Arco 10"]
        ),
        new Atributos(18, 18, 22, 18, 22, 18),
        new Progresso(6, 877, 1, 11, 86, 1000.00)
    ),
    /*###########################################*/
    new Personagem(
        "Nix", "Neko", 
        new Bild(
            "Nike", 
            getClasseByName("Mago"), // Passando o objeto da classe "Mago"
            ["Vitória"], 
            ["Madeira"], 
            ["Domador de Criaturas 4", "Arquimago 1", "Faz tudo 10", "Atltelta 5"],
            ["fraco 100"]
        ),
        new Atributos(18, 18, 23, 23, 18, 18),
        new Progresso(9, 865, 0, 16, 162, 1080.00)
    ),
    /*###########################################*/
    //nivel, xp, skill, upgrade, missao, gold
    /*###########################################*/
    new Personagem(
        "Yori Niket", "Kazuma", 
        new Bild(
            "Ígnea", 
            getClasseByName("Lanceiro"), 
            ["Ninfa do Fogo"], 
            ["Flama", "Plasma", "Fogo"], 
            ["Elite 3", "Atleta 10", "Faz Tudo 10"],
            ["Lança 10", "Armadura 10", "Pistola 10"]
        ),
        new Atributos(18, 18, 30, 30, 22, 23),
        new Progresso(6, 651, 0, 17, 113, 1150.00)
    ),
    /*###########################################*/
    new Personagem(
        "Uilian", "Aldritch", 
        new Bild(
            "Eros", 
            getClasseByName("Mago"), // Passando o objeto da classe "Atirador"
            ["Carisma"], 
            ["Ether", "Trevas"], 
            ["Militar 5", "Arcanista 10"],
            ["Espada 5"]
        ),
        new Atributos(22, 30, 20, 30, 21, 21),
        new Progresso(2, 283, 3, 11, 45, 1000.00)
    ),
    /*###########################################*/
  
];
  //dia 150
//player, nome, bild, atributos, progresso
//forc, vit, des, int, sab, car
//ascendente, classe, dominio, elemento, oficio, maestria
