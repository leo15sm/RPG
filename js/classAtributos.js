export class Atributos{
    constructor(sab, int, car, des, forc, ess, con){
        this.sabedoria = sab;
        this.intelecto = int;
        this.carisma = car;
        this.destreza = des;
        this.forca = forc;
        this.essencia = ess;
        this.controle = con;
    }
}

export class Raca{
    constructor(nome, atributos){
        this.nome = nome;
        this.atributos = atributos;
    }
}

export class Classe{
    constructor(nome, tipos, atributos){
        this.nome = nome;
        this.tipos = Array.isArray(tipos) ? tipos : [tipos];
        this.atributos = atributos;
    }
}

export class Personagem{
    constructor(nome, raca, classes = []){
        this.nome = nome;
        this.raca = raca.nome;
        this.classes = classes.map(classe => classe.nome); // Array com os nomes das classes
        this.racaAtributos = raca.atributos; // Atributos da raça
        this.classesAtributos = classes.map(classe => classe.atributos); 
        this.escala = 1;
        this.nivel = 1;
    }

    calcularAtributos() {
        // Inicia os atributos com os valores da raça
        let sabedoria = this.racaAtributos.sabedoria;
        let intelecto = this.racaAtributos.intelecto;
        let carisma = this.racaAtributos.carisma;
        let destreza = this.racaAtributos.destreza;
        let forca = this.racaAtributos.forca;
        let essencia = this.racaAtributos.essencia;
        let controle = this.racaAtributos.controle;

        // Soma os atributos de todas as classes
        this.classesAtributos.forEach(atributos => {
            sabedoria += atributos.sabedoria;
            intelecto += atributos.intelecto;
            carisma += atributos.carisma;
            destreza += atributos.destreza;
            forca += atributos.forca;
            essencia += atributos.essencia;
            controle += atributos.controle;
        });

        // Retorna o objeto Atributos com os valores somados
        return new Atributos(
            sabedoria,
            intelecto,
            carisma,
            destreza,
            forca,
            essencia,
            controle
        );
    }

    calcularAtrCombate() {
        const atributos = this.calcularAtributos();

        const HP = this.nivel * this.escala * atributos.essencia * 10;
        const ataque = this.escala + (atributos.forca / 2);
        const defesa = this.escala + ((atributos.forca + atributos.essencia) / 2);
        const especialAtaque = this.escala + ((atributos.intelecto + atributos.destreza) / 2);
        const especialDefesa = this.escala + ((atributos.carisma + atributos.essencia) / 2);
        const reflexo = this.escala + ((atributos.sabedoria + atributos.destreza) / 2);
        const velocidade = this.escala + ((atributos.sabedoria + atributos.forca) / 2);
        const instinto = this.escala + ((atributos.carisma + atributos.destreza) / 2);
        const mobilidade = this.escala + ((atributos.destreza + atributos.forca) / 2);
        const pontaria = 5 + (atributos.destreza + atributos.intelecto);
        const precisao = 5 + (atributos.destreza + atributos.controle) / 2;

        return {
            HP,
            ataque,
            defesa,
            especialAtaque,
            especialDefesa,
            reflexo,
            velocidade,
            instinto,
            mobilidade,
            pontaria,
            precisao
        };
    }
}