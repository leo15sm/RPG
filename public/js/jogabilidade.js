import { buscarDadosFirestore } from "./CRUD.js";

document.addEventListener("DOMContentLoaded", async function() {
    // Aguarda a função buscarPersonalidades retornar os dados para personalidades
    const personalidades = await buscarDadosFirestore("personalidades"); 
    const ascendentes = await buscarDadosFirestore("ascendentes");

    sortear(personalidades, 'personalidade', 3);
    sortear(ascendentes, 'ascendente', 2);
});

// Função para sortear sem repetições com ícones
function sortear(dadosImport, SectionId, quantidadeSorteios) {
    const SelectSectionID = document.getElementById(SectionId);
    const btnSortear = SelectSectionID.querySelector('.botao');
    const resultado = SelectSectionID.querySelector('.resultado');

    // Evento para sortear uma personalidade
    btnSortear.addEventListener("click", function() {
        resultado.innerHTML = ''; // Limpa o resultado anterior

        // Cria uma cópia do array original para evitar modificar o original
        let dadosDisponiveis = [...dadosImport];

        for (let i = 0; i < quantidadeSorteios; i++) {
            if (dadosDisponiveis.length === 0) {
                // Se não houver mais itens disponíveis, para o loop
                break;
            }

            const indice = Math.floor(Math.random() * dadosDisponiveis.length);
            const itemSorteado = dadosDisponiveis[indice];

            // Remove o item sorteado do array
            dadosDisponiveis.splice(indice, 1);

            // Cria um novo elemento para o resultado
            const elemento = document.createElement('p');

            // Adiciona o ícone e o texto
            elemento.innerHTML = `<i class="fas fa-fire"></i> ${itemSorteado}`;
            resultado.appendChild(elemento); // Adiciona ao contêiner de resultados
        }
    });
}