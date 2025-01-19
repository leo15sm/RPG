import { db } from "./firebaseConfig.js";
import { 
  collection, 
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'; 

export const personalidades = [
  "zeus", "hades", "posseidon", "hera", "demeter", "afrodite", "athena", "apolo", "artêmis", 
  "herfesto", "ares", "hermes", "dionísio", "hebe", "bóreas", "hércules", "hecate", "thanatos", 
  "hipnos", "tritão", "nereu", "aqueloo", "íris", "héspera", "argos", "tritolemo", "horas", "dríade", 
  "eros", "himeros", "tália", "nike", "medusa", "aracne", "delfos", "asclépio", "pã", "hélio", "selene", 
  "oréades", "brontes", "héstia", "ígnea", "fobos", "deimos", "ênio", "hermafrodito", "maia", "tique", 
  "mênade", "silênos", "ícaro"
];

export async function cadastrarPersonalidades() {
  const colecao = collection(db, "ascendentes");

  for (const personalidade of personalidades) {
    try {
      await addDoc(colecao, { nome: personalidade });
      console.log(`Personalidade ${personalidade} adicionada com sucesso.`);
    } catch (error) {
      console.error(`Erro ao adicionar ${personalidade}:`, error);
    }
  }
}