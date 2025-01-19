import { ClasseRPG } from './classAtributos.js';

export const classeList = [
    //nome, hp, mana, estamina, redutor, atrF, atrM
    new ClasseRPG ("---", 0, 0, 0, 0, "forca", "intelecto"),

    new ClasseRPG ("Arqueiro", 8, 8, 8, 2, "destreza", "intelecto"),
    new ClasseRPG ("Atirador", 8, 8, 8, 2, "destreza", "intelecto"),
    new ClasseRPG ("Ladino", 8, 6, 10, 2, "destreza", "intelecto"),
    new ClasseRPG ("Lutador", 12, 8, 8, 4, "forca", "intelecto"),
    new ClasseRPG ("Barbaro", 10, 4, 12, 4, "forca", "intelecto"),
    new ClasseRPG ("Espadachim", 10, 6, 10, 4, "destreza", "intelecto"),
    new ClasseRPG ("Lanceiro", 10, 6, 10, 4, "destreza", "intelecto"),
    new ClasseRPG ("Bastiao", 12, 8, 8, 4, "vigor", "intelecto"),
    
    new ClasseRPG ("Mago", 4, 12, 4, 1, "forca", "intelecto"),
    new ClasseRPG ("Bardo", 6, 8, 8, 1, "forca", "carisma"),
    new ClasseRPG ("Feiticeiro", 6, 10, 6, 1, "forca", "carisma"),
    new ClasseRPG ("Druida", 8, 8, 8, 2, "forca", "sabedoria"),
    new ClasseRPG ("Clerigo", 6, 8, 8, 2, "forca", "sabedoria"),
    new ClasseRPG ("Bruxo", 8, 8, 8, 2, "forca", "sabedoria"),
]
