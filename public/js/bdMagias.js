import { magiasArcana } from './bdMagias/arcana.js';
import { magiasAbjuração } from './bdMagias/abjuracao.js';
import { magiasDivinação } from './bdMagias/divinacao.js';
import { magiasIlusao } from './bdMagias/ilusao.js';
import { magiasEncantamento } from './bdMagias/encantamento.js';
import { magiasInvocação } from './bdMagias/invocacao.js';
import { magiasTransformação } from './bdMagias/transformacao.js';
import { magiasNecromancia } from './bdMagias/necromancia.js';
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
        lista: ["arcana", "abjuração", "divinação", "ilusão", "encantamento", "invocação", "transformação", "necromancia", "vento", "agua", "terra", "fogo", "luz", "trevas",
            "fios", "veneno", "raio", "natureza"],
    }
];

export const listMagias = [
    ...magiasArcana,
    ...magiasAbjuração,
    ...magiasDivinação,
    ...magiasIlusao,
    ...magiasEncantamento,
    ...magiasInvocação,
    ...magiasTransformação,
    ...magiasNecromancia,
    ...magiasVento,
    ...magiasAgua,
    ...magiasTerra,    
    ...magiasFogo,
    ...magiasLuz,
    ...magiasFios,
    ...magiasRaio,
    ...magiasNatureza,
];