import { ascendentes } from './bdDeuses.js';

export const personalidades = [
    "Inabalável", "Trapaceiro", "Introvertido", "Carismático", "Servo", "Indeciso", "Procrastinador", "Imparcial", 
    "Modesto", "Corajoso", "Valente", "Tímido", "Gentil", "Atencioso", "Irritadiço", "Patriota", "Indiferente", 
    "Sonolento", "Apostador", "Esportista", "Sociopata", "Estranho", "Espalhafatoso", "Idol", "Simplista", "Sério", 
    "Diligente", "Calmo", "Justiça", "Franqueza", "Amizade", "Companheirismo", "Questionador", "Criativo", 
    "Protetor", "Atrapalhado", "Aproveitador", "Fofoqueiro", "Anti-social", "Apaixonado", "Calado", "Traíra", 
    "Narcisista", "Competidor", "Pacifista", "Compreensivo", "Gosto caro", "Briguento", "Preguiçoso", "Força da natureza", 
    "Precipitado", "Inocente", "Altruísta", "Herói", "Alegre", "Humilde", "Castrado", "Honesto", "Dedicado", "Derrotista", 
    "Falador", "Paquerador", "Palhaço", "Provocador", "Líder", "Amável", "Honrado", "Precavido", "Audacioso", "Respeitoso", 
    "Teimoso", "Distraído", "Inquieto", "Antipático", "Crente", "Mentiroso", "Invejoso", "Ganancioso", "Orgulhoso", 
    "Malicioso", "Fervoroso", "Guloso", "Ingrato", "Hipócrita", "Exibicionista", "Exigente", "Estudioso", "Hospitaleiro", 
    "Mal educado", "Paladar exótico", "Companheiro", "Complexo de inferioridade", "Infantil", "Amante da natureza", 
    "Inseguro", "poucas palavras"
];

document.addEventListener("DOMContentLoaded", function() {
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

