import { raca } from './bdRaca.js';

document.addEventListener('DOMContentLoaded', function() {
    controler(raca, 'raca-select');
});

function controler(dadosImport, SectionId){
    const racaSelect = document.getElementById(SectionId);
    
    // Verifica a existência do ID
    if (!racaSelect) {
        console.error(`Elemento com id ${sectionId} não encontrado.`);
        return;
    }
    
    // Cria as opções e adiciona ao select
    dadosImport.forEach(dados => {
        const option = document.createElement('option');
        option.value = dados.nome;
        option.textContent = dados.nome;
        racaSelect.appendChild(option);
    });

    // Adiciona evento de mudança ao select
    racaSelect.addEventListener('change', function() {
        const selectedRaca = dadosImport.find(r => r.nome === racaSelect.value);
        if (selectedRaca) {
            updateFields(selectedRaca);
        }
    });

    updateFields(dadosImport[0])
}

function updateFields(raca) {
    document.querySelector('input[name="sabedoria"]').value = raca.sabedoria*10;
    document.querySelector('input[name="intelecto"]').value = raca.intelecto*10;
    document.querySelector('input[name="carisma"]').value = raca.carisma*10;
    document.querySelector('input[name="destreza"]').value = raca.destreza*10;
    document.querySelector('input[name="forca"]').value = raca.forca*10;
    document.querySelector('input[name="essencia"]').value = raca.essencia*10;
    document.querySelector('input[name="controle"]').value = raca.controle*10;

    document.querySelector('input[name="mod_sabedoria"]').value = raca.sabedoria;
    document.querySelector('input[name="mod_intelecto"]').value = raca.intelecto;
    document.querySelector('input[name="mod_carisma"]').value = raca.carisma;
    document.querySelector('input[name="mod_destreza"]').value = raca.destreza;
    document.querySelector('input[name="mod_forca"]').value = raca.forca;
    document.querySelector('input[name="mod_essencia"]').value = raca.essencia;
    document.querySelector('input[name="mod_controle"]').value = raca.controle;
}