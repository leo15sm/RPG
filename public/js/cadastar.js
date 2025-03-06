import { db } from "./firebaseConfig.js";
import { 
    query, 
    where,
    collection, 
    getDocs,
    addDoc } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';

import { afrodite } from '../bdNPC/afrodite.js'; 
import { divinizados } from '../bdNPC/divinizados.js';
import { zeus } from '../bdNPC/zeus.js';
import { hades } from '../bdNPC/hades.js';
import { posseidon } from '../bdNPC/posseidon.js';
import { hera } from '../bdNPC/hera.js';
import { demeter } from '../bdNPC/demeter.js';
import { athena } from '../bdNPC/athena.js';
import { apolo } from '../bdNPC/apolo.js';
import { artemis } from '../bdNPC/artemis.js';
import { herfesto } from '../bdNPC/herfesto.js';
import { ares } from '../bdNPC/ares.js';
import { hermes } from '../bdNPC/hermes.js';
import { dionisio } from '../bdNPC/dionisio.js';

// Função para cadastrar NPCs de uma casa específica
async function cadastrarNPCs(npcs, casa) {
    const npcCollection = collection(db, "npcs");

    try {
        for (const npc of npcs) {
            // Verifica se o NPC já existe na coleção (usando o nome como critério de unicidade)
            const q = query(npcCollection, where("titulo", "==", npc.titulo));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                // Se o NPC não existir, adiciona o campo "casa" e cadastra no Firestore
                const npcComCasa = { ...npc, casa };
                await addDoc(npcCollection, npcComCasa);
                console.log(`NPC ${npc.nome} cadastrado com sucesso!`);
            } else {
                console.log(`NPC ${npc.nome} já existe e não foi cadastrado novamente.`);
            }
        }
        console.log(`Todos os NPCs da casa ${casa} foram verificados.`);
    } catch (error) {
        console.error(`Erro ao cadastrar NPCs da casa ${casa}:`, error);
    }
}

// Cadastrar os NPCs da casa Afrodite
cadastrarNPCs(afrodite, "afrodite");
cadastrarNPCs(zeus, "zeus");
cadastrarNPCs(hades, "hades");
cadastrarNPCs(posseidon, "posseidon");
cadastrarNPCs(hera, "hera");
cadastrarNPCs(demeter, "demeter");
cadastrarNPCs(athena, "athena");
cadastrarNPCs(apolo, "apolo");
cadastrarNPCs(artemis, "artemis");
cadastrarNPCs(herfesto, "herfesto");
cadastrarNPCs(ares, "ares");
cadastrarNPCs(hermes, "hermes");
cadastrarNPCs(dionisio, "dionisio");
cadastrarNPCs(divinizados, "divinizados");


