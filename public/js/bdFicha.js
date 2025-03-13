import { Atributos, Bild, Progresso, Personagem } from './classRPG.js';
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
            ["Chama Dourada", "Vigor lv2"], 
            ["Elite 1", "Sacerdote 10", "Acadêmico 10", "Faz Tudo 5", "Atleta 10", "Astrologo 10"],
            ["Arco 10", "Escudo 10", "Armadura 10"]
        ),
        new Atributos(18, 30, 29, 30, 30, 21),
        new Progresso(11, 1021, 6, 1, 195, 2500.00)
    ),
    /*###########################################*/
    new Personagem(
        "Ernani", "Necron", 
        new Bild(
            "Thanatos", 
            getClasseByName("Mago"), 
            ["Morte"], 
            ["Chama Mágica"], 
            ["Arquimago 4"],
            ["Foice 5", "Arco 1"]
        ),
        new Atributos(18, 22, 18, 22, 18, 18),
        new Progresso(8, 520, 2, 12, 132, 1105.48)
    ),
    /*###########################################*/
    new Personagem(
        "João do Caos", "Tayson", 
        new Bild(
            "Tritão", 
            getClasseByName("Druida"), 
            ["Tritão Lagosta"], 
            ["Aqua"], 
            ["Olympico 4", "Arcanista 10", "Domador de Criaturas 1"],
            ["Combate 10"]
        ), 
        new Atributos(18, 22, 22, 30, 30, 18),
        new Progresso(7, 699, 8, 5, 84, 1200.00)
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
        new Progresso(8, 540, 3, 33, 128, 1000.00)
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
            ["Cor Vermelha", "Cor Laranja", "Cor Verde", "Chama Prateada"], 
            ["Caçador 10", "Domador 10", "Faz Tudo 10", "Atleta 10", "Arcanista 1"],
            ["Arco 10"]
        ),
        new Atributos(18, 18, 22, 18, 22, 18),
        new Progresso(8, 697, 7, 13, 126, 1000.00)
    ),
    /*###########################################*/
    new Personagem(
        "Nix", "Neko", 
        new Bild(
            "Nike", 
            getClasseByName("Mago"), // Passando o objeto da classe "Mago"
            ["Vitória"], 
            ["Madeira", "Chama Helênica"], 
            ["Domador de Criaturas 4", "Arquimago 4", "Faz tudo 10", "Atltelta 5"],
            ["fraco 100"]
        ),
        new Atributos(18, 19, 23, 30, 30, 18),
        new Progresso(11, 1720, 0, 42, 205, 1000.00)
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
            ["Elite 5", "Desafiante 5", "Atleta Olympico 5"],
            ["Lança 10", "Armadura 10", "Pistola 10"]
        ),
        new Atributos(18, 18, 30, 30, 22, 23),
        new Progresso(8, 571, 6, 0, 153, 1150.00)
    ),
    /*###########################################*/
    new Personagem(
        "Uilian", "Guilbert", 
        new Bild(
            "Eros", 
            getClasseByName("Feiticeiro"),
            ["Ninfa Raio"], 
            ["Raio Cosmico"], 
            ["Faz tudo 1", "Elite 5"],
            ["Alguma coisa 1"]
        ),
        new Atributos(22, 30, 20, 30, 21, 21),
        new Progresso(1, 234, 8, 1, 15, 1000.00)
    ),
    /*###########################################*/
       /*###########################################*/
       new Personagem(
        "Mayah", "Mayah", 
        new Bild(
            "Hera", 
            getClasseByName("Feiticeiro"),
            ["Mulheres", "Castidade"], 
            ["Flama", "Plasma", "Fogo"], 
            ["Alto Feiticeiro 5", "Atleta Olympico 1", "Faz tudo 10"],
            //elite [3], arquimago [2], feiticeiro [1], atleta olympico [3], explorador [2], 
            ["Todas as Armas 10", "Todas Armaduras 10", "Todos Combate 10"]
        ),
        new Atributos(20, 20, 20, 20, 20, 20),
        new Progresso(11, 0, 0, 0, 100, 1000.00)
    ),
    /*###########################################*/
    new Personagem(
        "Dômia", "Dômia", 
        new Bild(
            "Aracne", 
            getClasseByName("Mago"),
            ["Vitória", "Ether"], 
            ["Ether", "Fios"], 
            ["Arquimago 5", "Elite 5", "Atleta Olympico 5", "Explorador 5", "Desafiante 5"],
            //elite [5], arquimago [5], feiticeiro [5], atleta olympico [9], explorador [9], desafiante [8],  
            ["Bastão 10", "Fios 10", "Armadura 10"]
        ),
        new Atributos(18, 19, 23, 30, 30, 18),
        new Progresso(11, 1820, 7, 1, 225, 1100.00)
    ),
    /*###########################################*/
  
];
//dia 180 + 30
//player, nome, bild, atributos, progresso
//forc, vit, des, int, sab, car
//ascendente, classe, dominio, elemento, oficio, maestria
