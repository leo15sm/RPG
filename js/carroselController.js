import { zeus, hades } from './bdNpc.js';
import { initializeSlider } from './fichaFunctions.js';

document.addEventListener("DOMContentLoaded", function() {
    initializeSlider('zeus', zeus, 1);
    initializeSlider('hades', hades, 1);
});
