import {apoio} from './bdNPC/divinizados.js';
import {zeus} from './bdNPC/zeus.js';
import {hades} from './bdNPC/hades.js';
import {posseidon} from './bdNPC/posseidon.js';
import {hera} from './bdNPC/hera.js';
import { initializeSlider } from './fichaFunctions.js';

document.addEventListener("DOMContentLoaded", function() {
    initializeSlider('apoio', apoio, 1);
    initializeSlider('zeus', zeus, 1);
    initializeSlider('hades', hades, 1);
    initializeSlider('posseidon', posseidon, 1);
    initializeSlider('hera', hera, 1);
});
