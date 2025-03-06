import { selectMagias } from './fichaFunctions.js';
import { listMagias } from './bdMagias.js';

/*################################################################*/
import { buscarPersonagens } from "./CRUD.js";
import { initializeSlider, criarSlider } from './fichaFunctions.js';


/*################################################################*/
import {atributos, players} from './bdFicha.js';
import {criarTabela, selectJogadores} from './fichaFunctions.js';
/*################################################################*/

document.addEventListener('DOMContentLoaded', async  function() {
    const path = window.location.pathname;

    if (path.includes('index.html')) {
        // Código específico para a página da ficha
        criarTabela(atributos[0], 'atributos');
        criarTabela(atributos[1], 'combate');
        selectJogadores(players, 'selectJogador');
    } else if (path.includes('magias.html')) {
        // Código específico para a página de magias
        selectMagias(listMagias, 'selectEscola');
    } else if (path.includes('npcs.html')) {
        // Código específico para a página de npcs
        criarSlider("npc");

        const deuses = [
            "divinizados", "zeus", "hades", "posseidon", "hera",
            "demeter", "afrodite", "athena", "apolo", "artemis",
            "herfesto", "ares", "hermes", "dionisio"
        ];

        // Busca os dados dos NPCs e agrupa por casa
        const dadosAgrupados = await buscarPersonagens("npcs");

        // Envia os dados agrupados para o slider
        deuses.forEach((deus) => {
            const elemento = document.getElementById(deus);
            if (elemento && dadosAgrupados[deus]) {
                // Passa o array de NPCs da casa correspondente
                initializeSlider(deus, dadosAgrupados[deus], 1); 
            } else {
                console.warn(`Elemento com ID '${deus}' não encontrado no HTML ou sem dados.`);
            }
        });
    }
});