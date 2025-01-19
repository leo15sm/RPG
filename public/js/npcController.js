import { buscarDadosFirestore2 } from "./CRUD.js";
import { initializeSlider } from './fichaFunctions.js';

document.addEventListener("DOMContentLoaded", async function() {
    const apoio = await buscarDadosFirestore2("divinizados");
    const zeus = await buscarDadosFirestore2("zeus");
    const hades = await buscarDadosFirestore2("hades");
    const posseidon = await buscarDadosFirestore2("posseidon");
    const hera = await buscarDadosFirestore2("hera");
    const demeter = await buscarDadosFirestore2("demeter");
    const afrodite = await buscarDadosFirestore2("afrodite");
    const athena = await buscarDadosFirestore2("athena");
    const apolo = await buscarDadosFirestore2("apolo");
    const artemis = await buscarDadosFirestore2("artemis");
    const herfesto = await buscarDadosFirestore2("herfesto");
    const ares = await buscarDadosFirestore2("ares");
    const hermes = await buscarDadosFirestore2("hermes");
    const dionisio = await buscarDadosFirestore2("dionisio");

    initializeSlider('apoio', apoio, 1);
    initializeSlider('zeus', zeus, 1);
    initializeSlider('hades', hades, 1);
    initializeSlider('posseidon', posseidon, 1);
    initializeSlider('hera', hera, 1);
    initializeSlider('demeter', demeter, 1);
    initializeSlider('afrodite', afrodite, 1);
    initializeSlider('athena', athena, 1);
    initializeSlider('apolo', apolo, 1);
    initializeSlider('artemis', artemis, 1);
    initializeSlider('herfesto', herfesto, 1);
    initializeSlider('ares', ares, 1);
    initializeSlider('hermes', hermes, 1);
    initializeSlider('dionisio', dionisio, 1);
});


