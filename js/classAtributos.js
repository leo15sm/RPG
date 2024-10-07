export class Atributos{
    constructor(sab, int, car, des, forc, vit){
        this.sabedoria = sab;
        this.intelecto = int;
        this.carisma = car;
        this.destreza = des;
        this.forca = forc;
        this.vitalidade = vit;
    }
}
//add gold, elemento e pericias
export class Personagem{
    constructor(player, nome, filho, classe, oficio, xp, nivel, skill, upgrade, atributos){
        this.player = player;
        this.nome = nome;
        this.filho = filho;
        this.classe = classe;
        this.oficio = oficio;
        this.xp = xp;
        this.nivel = nivel;
        this.skill = skill;
        this.upgrade = upgrade;
        this.atributos = atributos; 
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