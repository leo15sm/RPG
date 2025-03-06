import { db } from "./firebaseConfig.js";
import { 
    collection, 
    addDoc,
    getDocs,
    updateDoc, 
    deleteDoc, 
    doc,
    query, 
    where,
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'; 

export async function cadastrarDados(nomeColecao, dados) {
  const colecao = collection(db, nomeColecao);

  for (const item of dados) {
      try {
          // Consulta para verificar se o item já existe na coleção
          const q = query(colecao, where("nome", "==", item));
          const querySnapshot = await getDocs(q);

          // Se já existir, não adiciona
          if (querySnapshot.empty) {
              // Se o item não existir, adiciona-o na coleção
              await addDoc(colecao, { nome: item });
              console.log(`Item "${item}" adicionado com sucesso na coleção ${nomeColecao}.`);
          } else {
              console.log(`Item "${item}" já existe na coleção ${nomeColecao}.`);
          }
      } catch (error) {
          console.error(`Erro ao adicionar "${item}" na coleção ${nomeColecao}:`, error);
      }
  }
}

// Função para buscar dados do Firebase de uma coleção genérica
export async function buscarDadosFirestore(nomeColecao) {
    const colecao = collection(db, nomeColecao);
    const querySnapshot = await getDocs(colecao);

    const dadosCadastrados = [];
    querySnapshot.forEach((doc) => {
        dadosCadastrados.push(doc.data().nome); 
    });

    console.log(`${nomeColecao} cadastrados:`, dadosCadastrados);
    return dadosCadastrados; // Retorna a lista para uso posterior
}

// Função para buscar dados do Firestore com base na nova hierarquia
export async function buscarPersonagens(nomeColecao, subColecao = null) {
    const colecaoRef = collection(db, nomeColecao); // Referência à coleção NPC
    const querySnapshot = await getDocs(colecaoRef); // Pega todos os documentos
    const dados = {};

    querySnapshot.forEach((doc) => {
        const npcData = doc.data();
        const casa = npcData.casa; // Supondo que o campo que indica a casa seja "casa"

        if (!dados[casa]) {
            dados[casa] = []; // Cria um array para a casa se não existir
        }

        dados[casa].push(npcData); // Adiciona o NPC ao array da casa correspondente
    });

    return dados; // Retorna um objeto onde a chave é a casa e o valor é um array de NPCs
}

export async function cadastrarSemideus(nomeColecao, dados) {
    const colecao = collection(db, nomeColecao);

    for (const item of dados) {
        try {
            // Consulta para verificar se o personagem já existe na coleção com base no nome
            const q = query(colecao, where("nome", "==", item.nome));
            const querySnapshot = await getDocs(q);

            // Se não existir, adiciona o item
            if (querySnapshot.empty) {
                await addDoc(colecao, {
                    imagem: item.imagem,
                    nome: item.nome,
                    titulo: item.titulo,
                    ascendencia: item.ascendencia,
                    linhagem: item.linhagem,
                    dominio: item.dominio,
                    elemento: item.elemento,
                    classe: item.classe,
                    oficio: item.oficio,
                    personalidade: item.personalidade
                });
                console.log(`Personagem "${item.nome}" adicionado com sucesso na coleção ${nomeColecao}.`);
            } else {
                console.log(`Personagem "${item.nome}" já existe na coleção ${nomeColecao}.`);
            }
        } catch (error) {
            console.error(`Erro ao adicionar "${item.nome}" na coleção ${nomeColecao}:`, error);
        }
    }
}