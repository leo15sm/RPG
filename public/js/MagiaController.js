import { selectMagias } from './fichaFunctions.js';
import { listMagias } from './bdMagias.js';

// Chamar a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    selectMagias(listMagias, 'selectEscola');
    
});


