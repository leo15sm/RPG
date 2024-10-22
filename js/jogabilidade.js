import { personalidades } from './bdNpc.js';
import { ascendentes } from './bdDeuses.js';

document.addEventListener("DOMContentLoaded", function() {
    sortear(personalidades, 'personalidade', 3);
    sortear(ascendentes, 'ascendente', 2);
});

// Função para sortear uma personalidade
function sortear(dadosImport, SectionId, quantidadeSorteios) {

    const SelectSectionID = document.getElementById(SectionId);

    const btnSortear = SelectSectionID.querySelector('.botao');
    const resultado = SelectSectionID.querySelector('.resultado');

    // Evento para sortear uma personalidade
    btnSortear.addEventListener("click", function() {
        resultado.textContent = ''; // Limpa o resultado anterior
        let sorteios = [];
            
        for (let i = 0; i < quantidadeSorteios; i++) {
            const indice = Math.floor(Math.random() * dadosImport.length);
            sorteios.push(dadosImport[indice]);
        }
        resultado.textContent = sorteios.join(', '); // Exibe as personalidades sorteadas
    });
}
