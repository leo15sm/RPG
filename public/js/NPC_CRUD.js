import { db } from "./firebaseConfig.js";
import { 
    collection, 
    addDoc,
    getDocs,
    updateDoc, 
    deleteDoc, 
    doc,
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';

const npcCollection = collection(db, "npcs");

async function carregarNPCs() {
    const querySnapshot = await getDocs(npcCollection);
    const tabelaNPCs = document.getElementById("npc-table");
    tabelaNPCs.innerHTML = `<tr>
        <th>Imagem</th><th>Nome</th><th>Título</th><th>Ascendência</th><th>Domínio</th><th>Elemento</th><th>Classe</th><th>Ofício</th><th>personaliade</th><th>Ações</th>
    </tr>`;
    
    querySnapshot.forEach((doc) => {
        const npc = doc.data();

        tabelaNPCs.innerHTML += criarLinhaNPC(doc.id, npc);
    });
}

// Função para filtrar NPCs por casa
async function filtrarPorCasa() {
    const casaSelecionada = document.getElementById("filtro-casa").value;
    const querySnapshot = await getDocs(npcCollection);
    const tabelaNPCs = document.getElementById("npc-table");

    // Limpa a tabela, exceto o cabeçalho
    tabelaNPCs.innerHTML = `<tr>
        <th>Imagem</th><th>Nome</th><th>Título</th><th>Ascendência</th><th>Linhagem</th><th>Domínio</th><th>Elemento</th><th>Classe</th><th>Ofício</th><th>Ações</th>
    </tr>`;

    querySnapshot.forEach((doc) => {
        const npc = doc.data();

        // Filtra os NPCs pela casa selecionada
        if (casaSelecionada === "todas" || npc.casa === casaSelecionada) {
            tabelaNPCs.innerHTML += criarLinhaNPC(doc.id, npc);
        }
    });
}

function criarLinhaNPC(id, npc) {
    return `
        <tr>
            <td><img src="${npc.imagem}" width="50" height="75" /></td>
            <td contenteditable="true" onBlur="atualizarNPC('${id}', 'nome', this.innerText)">${npc.nome}</td>
            <td contenteditable="true" onBlur="atualizarNPC('${id}', 'titulo', this.innerText)">${npc.titulo}</td>
            <td contenteditable="true" onBlur="atualizarNPC('${id}', 'ascendencia', this.innerText)">${npc.ascendencia}</td>
            <td contenteditable="true" onBlur="atualizarNPC('${id}', 'linhagem', this.innerText)">${npc.linhagem}</td>
            <td contenteditable="true" onBlur="atualizarNPC('${id}', 'dominio', this.innerText)">${npc.dominio}</td>
            <td contenteditable="true" onBlur="atualizarNPC('${id}', 'elemento', this.innerText)">${npc.elemento}</td>
            <td contenteditable="true" onBlur="atualizarNPC('${id}', 'classe', this.innerText)">${npc.classe}</td>
            <td contenteditable="true" onBlur="atualizarNPC('${id}', 'oficio', this.innerText)">${npc.oficio}</td>
            <td contenteditable="true" onBlur="atualizarNPC('${id}', 'personalidade', this.innerText)">${npc.personalidade}</td>
            <td>
                <button onclick="deletarNPC('${id}')">Excluir</button>
            </td>
        </tr>
    `;
}

async function atualizarNPC(id, campo, valor) {
    const npcRef = doc(db, "npcs", id);
    await updateDoc(npcRef, { [campo]: valor });
}

async function deletarNPC(id) {
    if (confirm("Tem certeza que deseja excluir este NPC?")) {
        await deleteDoc(doc(db, "npcs", id));
        carregarNPCs();
    }
}

function abrirModal() {
    const modal = document.getElementById("modalNPC");
    modal.style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById("modalNPC");
    modal.style.display = "none";
}

async function salvarNPC() {
    const novoNPC = {
        casa: document.getElementById("modal-casa").value,
        imagem: document.getElementById("modal-imagem").value,
        nome: document.getElementById("modal-nome").value,
        titulo: document.getElementById("modal-titulo").value,
        ascendencia: document.getElementById("modal-ascendencia").value,
        linhagem: document.getElementById("modal-linhagem").value,
        dominio: document.getElementById("modal-dominio").value,
        elemento: document.getElementById("modal-elemento").value,
        classe: document.getElementById("modal-classe").value,
        oficio: document.getElementById("modal-oficio").value,
        personalidade: document.getElementById("modal-personalidade").value,
    };

    try {
        const npcCollection = collection(db, "npcs");
        await addDoc(npcCollection, novoNPC);
        console.log("NPC cadastrado com sucesso!");
        fecharModal(); // Fecha o modal após salvar
        carregarNPCs(); // Recarrega a lista de NPCs
    } catch (error) {
        console.error("Erro ao cadastrar NPC:", error);
    }
}

window.onload = carregarNPCs;
window.atualizarNPC = atualizarNPC;
window.deletarNPC = deletarNPC;
window.abrirModal = abrirModal;
window.fecharModal = fecharModal;
window.salvarNPC = salvarNPC;
window.filtrarPorCasa = filtrarPorCasa;