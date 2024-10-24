import { apoio, zeus, hades, posseidon, hera } from './bdNpc.js';
import { initializeSlider } from './fichaFunctions.js';

document.addEventListener("DOMContentLoaded", function() {
    initializeSlider('apoio', apoio, 1);
    initializeSlider('zeus', zeus, 1);
    initializeSlider('hades', hades, 1);
    initializeSlider('posseidon', posseidon, 1);
    initializeSlider('hera', hera, 1);
});
