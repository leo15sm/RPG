import { buscarDadosFirestore2 } from "./CRUD.js";
import { initializeSlider, criarSlider } from './fichaFunctions.js';

document.addEventListener("DOMContentLoaded", async function () {
    criarSlider("npc");
    
    const deuses = [
        "divinizados", "zeus", "hades", "posseidon", "hera",
        "demeter", "afrodite", "athena", "apolo", "artemis",
        "herfesto", "ares", "hermes", "dionisio"
    ];

    //Carrega todas as imagens de uma so vez
    const dados = await Promise.all(deuses.map(deus => buscarDadosFirestore2(deus)));

    //Envia as imagens carregadas para o slider
    deuses.forEach((deus, index) => {
        const elemento = document.getElementById(deus);
        if (elemento) {
            initializeSlider(deus, dados[index], 1);
        } else {
            console.warn(`Elemento com ID '${deus}' não encontrado no HTML.`);
        }
    });


});


