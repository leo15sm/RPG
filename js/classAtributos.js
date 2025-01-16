export class ClasseRPG{
    constructor(nome, hp, mana, estamina, redutor, atrF, atrM){
        this.nome = nome;
        this.hp = hp;
        this.mana = mana;
        this.estamina = estamina;
        this.redutor = redutor;
        this.atrF = atrF; //atributo físico
        this.atrM = atrM; //atributo mágico
    }
}

export class Atributos{
    constructor(forc, vig, des, int, sab, car){
        this.forca = forc;
        this.vigor  = vig;
        this.destreza = des;
        this.intelecto = int;
        this.sabedoria = sab;
        this.carisma = car;
    }
}

export class Bild {
    constructor(ascendente, classe, dominios = [], elementos = [], oficios = [], maestrias = []) {
        this.ascendente = ascendente;
        this.classe = classe;
        this.dominios = dominios; // Lista de dominios
        this.elementos = elementos; // Lista de elementos
        this.oficios = oficios; // Lista de ofícios
        this.maestrias = maestrias; // Lista de maestrias
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
    constructor(player, nome, bild, atributos, progresso){
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

    calcularAtributosDeCombate() {
        const classe = this.bild.classe;
        const nivel = this.progresso.nivel;
        const manaAtributo = this.atributos[classe.atrM]; // Usando o nome do atributo informado em atrM
        const estaminaAtributo = this.atributos[classe.atrF]; // Usando o nome do atributo informado em atrF

        // Calcular HP
        const hp = (this.atributos.vigor + (classe.mana * nivel)) * 10;

        // Calcular Mana (considerando atrM como o atributo a ser usado para cálculo de Mana)
        const mana = manaAtributo * classe.mana * nivel;

        // Calcular Estamina (considerando atrF como o atributo a ser usado para cálculo de Estamina)
        const estamina = estaminaAtributo * classe.estamina * nivel;

        // Calcular Redutor
        const modVigor = this.calcularMod("vigor");
        const redutor = modVigor * classe.redutor;

        // Retornar os resultados como um objeto
        return {
            hp: hp,
            mana: mana,
            estamina: estamina,
            redutor: redutor
        };
    }
}

export class Magias{
    constructor(escola, ciclo, nome, acao, requisito, descricao){
        this.escola = escola;
        this.ciclo = ciclo;
        this.nome = nome;
        this.acao = acao;
        this.requisito = requisito;
        this.descricao = descricao;
    }
}

