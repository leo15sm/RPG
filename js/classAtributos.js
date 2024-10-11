export class Atributos{
    constructor(forc, vit, des, int, sab, car){
        this.forca = forc;
        this.vitalidade = vit;
        this.destreza = des;
        this.intelecto = int;
        this.sabedoria = sab;
        this.carisma = car;
    }
}

export class Bild{
    constructor(ascendente, classe, oficio, dominio, elemento){
        this.ascendente = ascendente;
        this.classe = classe;
        this.oficio = oficio;
        this.dominio = dominio;
        this.elemento = elemento;
    }
}


export class Progresso{
    constructor(nivel, xp, skill, upgrade, missao, gold){
        this.nivel = nivel;
        this.xp = xp;
        this.skill = skill;
        this.upgrade = upgrade;
        this.missao = missao;
        this.gold = gold;
    }
}

export class Personagem{
    constructor( player, nome, bild, atributos, progresso){
        this.player = player;
        this.nome = nome;
        this.bild = bild;
        this.atributos = atributos; 
        this.progresso = progresso;
    }

      // Método para calcular o modificador de um único atributo
      calcularMod(atributo) {
        if (this.atributos.hasOwnProperty(atributo)) {
            const valor = this.atributos[atributo];
            return Math.floor((valor - 10) / 2);
        } else {
            throw new Error(`Atributo "${atributo}" não encontrado.`);
        }
    }
}