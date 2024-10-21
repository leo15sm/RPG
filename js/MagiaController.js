import {selectMagias} from './fichaFunctions.js';
import {escolas, listMagias} from './bdMagias.js';

// Chamar a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    selectMagias(escolas[0], listMagias, 'selectEscola');
});

