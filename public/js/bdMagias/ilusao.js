import { Magias } from '../classRPG.js';

export const magiasIlusao  = [
    // Ciclo 0
    new Magias(
        "ilusão", "0", "Imagem Mínima", "súbita",
        "Nenhum",
        "Cria uma pequena imagem ilusória que apenas o conjurador pode ver, sem efeitos físicos."
    ),
    new Magias(
        "ilusão", "0", "Disfarce Rápido", "rápida",
        "Nenhum",
        "Permite ao conjurador criar uma aparência ilusória para si mesmo, mudando sua aparência externa por um tempo limitado."
    ),
    new Magias(
        "ilusão", "0", "Ilusão de Luz", "súbita",
        "Nenhum",
        "Cria uma pequena fonte de luz ilusória que pode ser movida a curtas distâncias."
    ),
    // Ciclo 1
    new Magias(
        "ilusão", "1", "Imagem Persistente", "rápida",
        "Imagem Mínima.",
        "Cria uma imagem ilusória que persiste por 1 minuto, podendo ser usada para distrair ou confundir."
    ),
    new Magias(
        "ilusão", "1", "Silhueta Enganosa", "súbita",
        "Nenhum",
        "Cria uma sombra ou silhueta ilusória que segue os movimentos do conjurador, confundindo os inimigos."
    ),
    new Magias(
        "ilusão", "1", "Som Fantasma", "rápida",
        "Nenhum",
        "Cria um som ilusório em um local distante, enganando os inimigos quanto à origem do som."
    ),
    // Ciclo 2
    new Magias(
        "ilusão", "2", "Imagem Realista", "rápida",
        "Imagem Persistente.",
        "Cria uma ilusão visual extremamente realista, permitindo que objetos ou criaturas pareçam estar presentes."
    ),
    new Magias(
        "ilusão", "2", "Desorientação", "súbita",
        "Silhueta Enganosa.",
        "Causa confusão mental em um alvo, fazendo com que ele tenha dificuldade para distinguir a realidade da ilusão."
    ),
    new Magias(
        "ilusão", "2", "Voz Enganosa", "súbita",
        "Som Fantasma.",
        "Cria uma voz ilusória que imita a fala de qualquer ser ou cria uma mensagem para enganar os ouvintes."
    ),
    //Ciclo 3
    new Magias(
        "ilusão", "3", "Ilusão Maior", "rápida",
        "Imagem Realista.",
        "Cria uma ilusão visual e auditiva completa, permitindo que os alvos vejam, ouçam e até toquem uma cena que não existe."
    ),
    new Magias(
        "ilusão", "3", "Miragem", "lenta",
        "Desorientação.",
        "Causa uma ilusão visual de grande escala que pode afetar o ambiente ao redor, distorcendo a percepção do local."
    ),
    new Magias(
        "ilusão", "3", "Silêncio Enganoso", "rápida",
        "Voz Enganosa.",
        "Cria uma zona de silêncio ilusório, onde os sons são abafados ou distorcidos, confundindo os inimigos."
    ),
    // Ciclo 4
    new Magias(
        "ilusão", "4", "Visão Falsa", "lenta",
        "Ilusão Maior.",
        "Cria uma visão ilusória que engana até os sentidos mais aguçados, fazendo com que os alvos percebam uma falsa realidade."
    ),
    new Magias(
        "ilusão", "4", "Imagem Fantasmagórica", "súbita",
        "Miragem.",
        "Cria uma imagem ilusória de uma criatura ou ser muito realista, que parece estar fisicamente presente, mas não pode causar dano."
    ),
    new Magias(
        "ilusão", "4", "Encobrimento", "rápida",
        "Silêncio Enganoso.",
        "Cria uma ilusão que faz com que o conjurador e seus aliados se tornem invisíveis para os inimigos dentro de uma área restrita."
    ),
    // Ciclo 5
    new Magias(
        "ilusão", "5", "Invisibilidade Superior", "lenta",
        "Visão Falsa.",
        "Torna o conjurador e aliados invisíveis a todos os sentidos, inclusive à magia e percepção."
    ),
    new Magias(
        "ilusão", "5", "Pânico Ilusório", "rápida",
        "Imagem Fantasmagórica.",
        "Cria uma visão aterrorizante que induz um pânico profundo, forçando os alvos a fugirem ou se abaterem com medo."
    ),
    new Magias(
        "ilusão", "5", "Farsa Perfeita", "súbita",
        "Encobrimento.",
        "Cria uma ilusão perfeita de uma cena, incluindo pessoas, objetos e sons, fazendo com que os alvos acreditem ser real."
    ),
    // Ciclo 6
    new Magias(
        "ilusão", "6", "Ilusão de Grande Escala", "lenta",
        "Visão Falsa.",
        "Cria uma ilusão massiva que afeta grandes áreas, alterando a percepção de tudo e todos ao redor."
    ),
    new Magias(
        "ilusão", "6", "Sombra Conjurada", "rápida",
        "Pânico Ilusório.",
        "Convoca uma versão ilusória do conjurador, que pode agir de maneira limitada e confundir os inimigos."
    ),
    new Magias(
        "ilusão", "6", "Aparência Perfeita", "súbita",
        "Farsa Perfeita.",
        "Modifica a aparência de um alvo de maneira tão realista que até mesmo magias de detecção não conseguem perceber a ilusão."
    ),
    // Ciclo 7
    new Magias(
        "ilusão", "7", "Destruição Ilusória", "lenta",
        "Ilusão de Grande Escala.",
        "Cria uma ilusão tão poderosa e convincente que pode até causar danos psicológicos aos alvos que acreditam nela como real."
    ),
    new Magias(
        "ilusão", "7", "Rebelião dos Sentidos", "lenta",
        "Sombra Conjurada.",
        "Afeta todos os sentidos simultaneamente, causando um colapso na percepção da realidade de todos em uma área."
    ),
    new Magias(
        "ilusão", "7", "Mestre das Ilusões", "súbita",
        "Aparência Perfeita.",
        "Permite que o conjurador altere a percepção de todos ao seu redor, criando uma nova realidade para aqueles que o observam."
    ),
    new Magias(
        "ilusão", "7", "Magia Temática", "súbita",
        "Aparência Perfeita.",
        "Permite que o conjurador altere a percepção de todos ao seu redor em relação a magia que ira conjurar, fazendo parecer ser algo que não seja necessariamente, mas sempre ligado a um tema."
    ),
];