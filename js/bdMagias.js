import { magiasArcana } from './bdMagias/arcana.js';
import { magiasAbjuração } from './bdMagias/abjuração.js';
import { magiasDivinação } from './bdMagias/divinação.js';
import { magiasVento } from './bdMagias/vento.js';
import { magiasAgua } from './bdMagias/agua.js';
import { magiasTerra } from './bdMagias/terra.js';
import { magiasFogo } from './bdMagias/fogo.js';
import { magiasLuz } from './bdMagias/luz.js';
import { magiasFios } from './bdMagias/fios.js';
import { magiasRaio } from './bdMagias/raio.js';
import { magiasNatureza } from './bdMagias/natureza.js';

export const escolas = [
    {
        lista: ["arcana", "abjuração", "divinação", "vento", "agua", "terra", "fogo", "luz", "trevas",
            "fios", "veneno", "raio", "natureza"],
    }
];

export const listMagias = [
    ...magiasArcana,
    ...magiasAbjuração,
    ...magiasDivinação,
    ...magiasVento,
    ...magiasAgua,
    ...magiasTerra,    
    ...magiasFogo,
    ...magiasLuz,
    ...magiasFios,
    ...magiasRaio,
    ...magiasNatureza,
];