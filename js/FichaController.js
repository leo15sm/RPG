import { atributos, racas, classes } from './bdFicha.js';
import { criarTabela, insertValues } from './fichaFunctions.js';

// Chamar a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    criarTabela(atributos[0], 'atributos');
    criarTabela(atributos[1], 'atrCombate');
    insertValues(racas, classes, 'selectRaca', 
        ['selectClasse1', 'selectClasse2', 'selectClasse3', 'selectClasse4']);
});