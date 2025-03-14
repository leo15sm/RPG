import { db } from "./firebaseConfig.js";
import { 
  collection, 
  addDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'; 

export function selectJogadores(List, SectionId) {
    const selectElement = document.getElementById(SectionId);

    // Limpa o conteúdo atual do select
    selectElement.innerHTML = '';

    // Itera sobre o array de personagens e cria uma opção para cada jogador
    List.forEach((personagem, index) => {
        const option = document.createElement("option");
        option.value = personagem.player;
        option.text = personagem.player;
        selectElement.appendChild(option);

        // Define o primeiro jogador como selecionado por padrão
        if (index === 0) {
            option.selected = true;
        }
    });

    // Função para preencher os campos com os dados do personagem selecionado
    function preencherCampos(jogadorSelecionado) {
        // Busca o personagem correspondente ao jogador selecionado
        const personagem = List.find(p => p.player === jogadorSelecionado);
        
        if (personagem) {
            // Preenche os campos básicos com os dados do personagem
            document.getElementById("nome").value = personagem.nome;
            document.getElementById("filho").value = personagem.bild.ascendente;
            document.getElementById("classe").value = personagem.bild.classe.nome;
            document.getElementById("xp").value = personagem.progresso.xp;
            document.getElementById("nivel").value = personagem.progresso.nivel;
            document.getElementById("skill").value = personagem.progresso.skill;
            document.getElementById("upgrade").value = personagem.progresso.upgrade;
            document.getElementById("missao").value = personagem.progresso.missao;
            document.getElementById("gold").value = personagem.progresso.gold;
            
            // Preenche as listas 
            const dominiosElement = document.getElementById("dominios");
            const elementosElement = document.getElementById("elementos");
            const oficiosElement = document.getElementById("oficios");
            const maestriasElement = document.getElementById("maestrias");
        
            // Limpa as opções anteriores
            dominiosElement.innerHTML = '';
            elementosElement.innerHTML = '';
            oficiosElement.innerHTML = '';
            maestriasElement.innerHTML = '';

            // Adiciona as opções de dominios
            personagem.bild.dominios.forEach(dominio => {
                const option = document.createElement('option');
                option.textContent = dominio;
                option.value = dominio;
                dominiosElement.appendChild(option);
            });

            // Adiciona as opções de elementos
            personagem.bild.elementos.forEach(elemento => {
                const option = document.createElement('option');
                option.textContent = elemento;
                option.value = elemento;
                elementosElement.appendChild(option);
            });
        
            // Adiciona as opções de ofícios
            personagem.bild.oficios.forEach(oficio => {
                const option = document.createElement('option');
                option.textContent = oficio;
                option.value = oficio;
                oficiosElement.appendChild(option);
            });
        
            // Adiciona as opções de maestrias
            personagem.bild.maestrias.forEach(maestria => {
                const option = document.createElement('option');
                option.textContent = maestria;
                option.value = maestria;
                maestriasElement.appendChild(option);
            });
                
            // Preenche os atributos e seus modificadores
            const atributos = personagem.atributos;
        
            const atributosMap = {
                sabedoria: atributos.sabedoria,
                intelecto: atributos.intelecto,
                carisma: atributos.carisma,
                destreza: atributos.destreza,
                forca: atributos.forca,
                vigor: atributos.vigor 
            };
        
            Object.keys(atributosMap).forEach(nomeAtributo => {
                const inputAtributo = document.querySelector(`input[name="valores_${nomeAtributo}"]`);
                const inputModificador = document.querySelector(`input[name="mod_${nomeAtributo}"]`);
        
                if (inputAtributo) {
                    inputAtributo.value = atributosMap[nomeAtributo];
                }
        
                if (inputModificador) {
                    inputModificador.value = personagem.calcularMod(nomeAtributo);
                }
            });
            
            // Preenche os campos de HP, Mana, Estamina e Redutor com os valores calculados
            const atributosDeCombate = personagem.calcularAtributosDeCombate();
            
            document.querySelector(`input[name="valores_hp"]`).value = atributosDeCombate.hp;
            document.querySelector(`input[name="valores_mana"]`).value = atributosDeCombate.mana;
            document.querySelector(`input[name="valores_estamina"]`).value = atributosDeCombate.estamina;
            document.querySelector(`input[name="valores_redutor"]`).value = atributosDeCombate.redutor;
        } else {
            // Se o personagem não for encontrado, limpa os campos
            document.getElementById("nome").value = '';
            document.getElementById("filho").value = '';
            document.getElementById("classe").value = '';
            document.getElementById("xp").value = '';
            document.getElementById("nivel").value = '';
            document.getElementById("skill").value = '';
            document.getElementById("upgrade").value = '';
            document.getElementById("missao").value = '';
            document.getElementById("gold").value = '';
            document.getElementById("elementos").value = '';
            document.getElementById("dominio").value = '';
        
            // Limpa as listas de ofícios e maestrias
            document.getElementById("oficios").innerHTML = '';
            document.getElementById("maestrias").innerHTML = '';
        
            // Limpa os inputs de atributos e modificadores
            const atributosMap = ['sabedoria', 'intelecto', 'carisma', 'destreza', 'forca', 'vigor'];
            atributosMap.forEach(nomeAtributo => {
                const inputAtributo = document.querySelector(`input[name="valores_${nomeAtributo}"]`);
                const inputModificador = document.querySelector(`input[name="mod_${nomeAtributo}"]`);
                if (inputAtributo) {
                    inputAtributo.value = '';
                }
                if (inputModificador) {
                    inputModificador.value = '';
                }
            });
        }
    }

    // Adiciona um evento de mudança no select para atualizar os campos
    selectElement.addEventListener('change', function() {
        preencherCampos(selectElement.value);
    });

    // Preenche os campos com o primeiro valor por padrão
    if (List.length > 0) {
        preencherCampos(selectElement.value); // Agora o primeiro jogador será preenchido por padrão
    }

}

export function criarTabela(dados, idTabela) {
    const tabela = document.getElementById(idTabela);

    // Limpar o conteúdo da tabela
    tabela.innerHTML = '';

    // Adicionar cabeçalho
    const thead = tabela.createTHead();
    const headerRow = thead.insertRow();
    
    // Adiciona cabeçalhos dinamicamente baseado nas colunas
    dados.colunas.forEach(coluna => {
        const th = document.createElement('th');
        th.textContent = coluna.charAt(0).toUpperCase() + coluna.slice(1);
        headerRow.appendChild(th);
    });

    // Adicionar corpo da tabela
    const tbody = tabela.createTBody();
    dados.linhas.forEach(linha => {
        const tr = tbody.insertRow();
        const nomeAtributo = linha.charAt(0).toUpperCase() + linha.slice(1);

        // Adicionar células para cada coluna especificada
        dados.colunas.forEach(coluna => {
            const td = tr.insertCell();
            if (coluna === 'atributos') {
                td.textContent = nomeAtributo; // Nome do atributo para a coluna 'atributos'
            } else {
                const input = document.createElement('input');
                input.type = 'number';
                input.name = `${coluna}_${linha}`;
                input.readOnly = true;
                td.appendChild(input);
            }
        });
    });
}

export async function selectMagias(listMagias, selectId) {
    const selectElement = document.getElementById(selectId);

    // Verifica se o elemento select foi encontrado
    if (!selectElement) {
        console.error(`Elemento com ID ${selectId} não encontrado.`);
        return;
    }

    // Busca as escolas do Firestore
    const escolas = await buscarDadosFirestore("EscolasMagia");

    // Limpa as opções anteriores (se houver)
    selectElement.innerHTML = '';

    // Popula o select com as opções de escola
    escolas.forEach((escola, index) => {
        const option = document.createElement('option');
        option.value = escola;
        option.text = escola.charAt(0).toUpperCase() + escola.slice(1); // Capitaliza a primeira letra
        selectElement.appendChild(option);

        // Se for o primeiro elemento, seleciona como padrão
        if (index === 0) {
            selectElement.selectedIndex = 0;
        }
    });

    // Função para atualizar as magias nas seções de ciclo conforme a escola selecionada
    function updateMagiasByEscola(escola) {
        // Itera sobre todos os ciclos (de 0 a 7)
        for (let ciclo = 0; ciclo <= 7; ciclo++) {
            // Seleciona a seção correspondente ao ciclo atual
            const cicloSection = document.querySelector(`.ciclo${ciclo}`);

            // Limpa as magias anteriores da seção
            cicloSection.innerHTML = '';

            // Filtra as magias pela escola e ciclo atual
            const magiasFiltradas = listMagias.filter(magia => magia.escola === escola && magia.ciclo == ciclo);

            // Adiciona as magias filtradas à seção correspondente
            magiasFiltradas.forEach(magia => {
                const magiaElement = document.createElement('section');
                magiaElement.classList.add('magia');
                
                magiaElement.innerHTML = `
                    <h3>${magia.nome}</h3>
                    <p><span>Ação:</span> ${magia.acao}</p>
                    <p><span>Requisito:</span> ${magia.requisito}</p>
                    <p><span>Descrição:</span> ${magia.descricao}</p>
                `;

                // Adiciona a magia na seção do ciclo correto
                cicloSection.appendChild(magiaElement);
            });
        }
    }

    // Seleciona automaticamente a primeira escola na inicialização
    updateMagiasByEscola(selectElement.value);

    // Adiciona o evento para atualizar as magias ao mudar de escola
    selectElement.addEventListener('change', () => {
        updateMagiasByEscola(selectElement.value);
    });
}

export function initializeSlider(SectionId, dadosImport, isVisible) {
    const SelectSectionID = document.getElementById(SectionId);

    const prevImg = SelectSectionID.querySelector('.prev-img');
    const nextImg = SelectSectionID.querySelector('.next-img');
    const prevBtn = SelectSectionID.querySelector('.prev-btn');
    const nextBtn = SelectSectionID.querySelector('.next-btn');
    const radioContainer = SelectSectionID.querySelector('.container-radio'); // Radio buttons
    const sliderImages = SelectSectionID.querySelector('.slider-images');

    let time = 3000; //milisegundos
    let currentIndex = 0; //Posição inicial do carrossel
    let visibleImages = isMobile() ? 1 : isVisible; // Número de imagens visíveis ao mesmo tempo
    
    function isMobile() {
        return window.innerWidth < 1020;
    }

    function createImageSlide(dados) {
        // Inicializa a estrutura básica do slide
        let slideHtml = `
            <figure>
                <img src="${dados.imagem}" alt="Imagem">
                <figcaption class="legend">
        `;
    
        // Adiciona dinamicamente o nome, se existir
        if (dados.nome) {
            slideHtml += `<h3>${dados.nome}</h3>`;
        }
    
        // Adiciona dinamicamente o nome, se existir
        if (dados.titulo) {
            slideHtml += `<p><span>Titulo:</span> ${dados.titulo}</p>`;
        }

        // Adiciona dinamicamente a ascendência, se existir
        if (dados.ascendencia) {
            slideHtml += `<p><span>Ascendência:</span> ${dados.ascendencia}</p>`;
        }
    
        // Adiciona dinamicamente a linhagem, se existir
        if (dados.linhagem) {
            slideHtml += `<p><span>Linhagem:</span> ${dados.linhagem}</p>`;
        }
    
        // Adiciona dinamicamente a linhagem, se existir
        if (dados.dominio) {
            slideHtml += `<p><span>Domínio:</span> ${dados.dominio}</p>`;
        }

        // Adiciona dinamicamente o elemento, se existir
        if (dados.elemento) {
            slideHtml += `<p><span>Elemento:</span> ${dados.elemento}</p>`;
        }
    
        // Adiciona dinamicamente a classe, se existir
        if (dados.classe) {
            slideHtml += `<p><span>Classe:</span> ${dados.classe}</p>`;
        }
    
        // Adiciona dinamicamente o ofício, se existir
        if (dados.oficio) {
            slideHtml += `<p><span>Ofício:</span> ${dados.oficio}</p>`;
        }

        // Adiciona dinamicamente o ofício, se existir
        if (dados.personalidade) {
            slideHtml += `<p><span>Personalidade:</span> <br> ${dados.personalidade}</p>`;
        }

        // Fecha o template da legenda e o figure
        slideHtml += `
                </figcaption>
            </figure>
        `;
    
        return slideHtml;
    }
    
    function deleteImageSlide() {
        if (sliderImages) {
            sliderImages.innerHTML = ''; // Limpa o conteúdo HTML da seção
        }
    }
    
    function renderSlider(indices) {
        // Valida o array de índices
        if (!Array.isArray(indices) || indices.some(index => index < 0 || index >= dadosImport.length)) {
            console.error('Array de índices inválido.');
            return;
        }
    
        // Cria o HTML para os slides com base nos índices fornecidos
        const slidesHtml = indices.map(index => createImageSlide(dadosImport[index])).join('');
        sliderImages.innerHTML = slidesHtml;
    }
    
    function showImages(index) {
        //Remove todas as imagens ativas
        deleteImageSlide();
        
        let indexImg = new Array(visibleImages);

        // Mostra quantas imagens forem visíveis ao mesmo tempo
        for (let i = 0; i < visibleImages; i++) {
            const newIndex = (index + i) % dadosImport.length; // Ajuste cíclico
            indexImg[i] = newIndex;
        }

        renderSlider(indexImg);
        
        //Atualiza as imagens de navegação se existirem
        if (prevImg) {
            prevImg.src = dadosImport[(index - 1 + dadosImport.length) % dadosImport.length].imagem;
        }
        if (nextImg) {
            nextImg.src = dadosImport[(index + visibleImages) % dadosImport.length].imagem;
        } 
        if(radioContainer){
            updateActiveRadioButton(index); // Atualiza o radio button ativo
        }    
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + dadosImport.length) % dadosImport.length;       
        showImages(currentIndex);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % dadosImport.length;
        showImages(currentIndex);
    }

    //Atualiza o número de imagens visíveis com base no tamanho da tela
    function updateVisibleImages() {
        visibleImages = isMobile() ? 1 : isVisible;
        showImages(currentIndex);
    }

    // Cria os radio buttons dinamicamente
    function createRadioButtons() {
        if (radioContainer) {
            radioContainer.innerHTML = ''; // Limpa os radio buttons existentes
            for (let i = 0; i < dadosImport.length; i++) {
                const radioBtn = document.createElement('input');
                radioBtn.type = 'radio';
                radioBtn.name = `radio-${SectionId}`;
                radioBtn.classList.add('radio-btn');
                radioBtn.addEventListener('click', () => clickRadio(i));
                
                // Define o primeiro radio button como checado por padrão
                if (i === currentIndex) {
                    radioBtn.checked = true;
                }
                
                radioContainer.appendChild(radioBtn);
            }
        }
    }

    //Passa a imagem para o radio correspondente
    function clickRadio(radioIndex) {
        currentIndex = radioIndex;
        showImages(currentIndex);
    }

    //Mapeias o click nos radios button
    function addRadioClickEvents() {
        if (radioContainer) {
            const radioBtns = radioContainer.querySelectorAll('.radio-btn');
            if (radioBtns.length > 0) {
                radioBtns.forEach((radio, index) => {
                    radio.addEventListener('click', () => clickRadio(index));
                });
            }
        }
    }
    
    // Atualiza o radio button ativo baseado no índice da imagem atual
    function updateActiveRadioButton(index) {
        if (radioContainer) {
            const radioBtns = radioContainer.querySelectorAll('.radio-btn');
            radioBtns.forEach((radio, i) => {
                radio.checked = i === index; // Ativa o radio button correspondente à imagem atual
            });
        }
    }

    //Passa as imagens com o tempo
    function Start() {
        if (radioContainer) {
            setInterval(() => {
                nextImage();
            }, time);
        }
    }

    /*############################################################################################*/
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Ajusta as imagens segundo a tela
    window.addEventListener('resize', updateVisibleImages);

    // Inicialize as imagens no carregamento da página
    showImages(currentIndex);
    
    //Eventos dos Radio button
    createRadioButtons(); // Cria os radio buttons dinamicamente
    window.addEventListener("load", Start);
    addRadioClickEvents();
}

// Função para buscar dados do Firestore
async function buscarDadosFirestore(nomeColecao) {
    const colecao = collection(db, nomeColecao);
    const snapshot = await getDocs(colecao); // Obtém os documentos da coleção
    const dados = snapshot.docs.map(doc => doc.data().nome); // Supondo que cada documento tenha a propriedade 'nome'
    return dados;
}

export function criarSlider(selector){
    const main = document.getElementById(selector);

    const divindades = [
        { id: "divinizados", titulo: "Divinizados Famosos" },
        { id: "zeus", titulo: "Filhos de Zeus" },
        { id: "hades", titulo: "Filhos de Hades" },
        { id: "posseidon", titulo: "Filhos de Posseidon" },
        { id: "hera", titulo: "Filhos de Hera" },
        { id: "demeter", titulo: "Filhos de Demeter" },
        { id: "afrodite", titulo: "Filhos de Afrodite" },
        { id: "athena", titulo: "Filhos de Athena" },
        { id: "apolo", titulo: "Filhos de Apolo" },
        { id: "artemis", titulo: "Filhos de Artemis" },
        { id: "herfesto", titulo: "Filhos de Herfesto" },
        { id: "ares", titulo: "Filhos de Ares" },
        { id: "hermes", titulo: "Filhos de Hermes" },
        { id: "dionisio", titulo: "Filhos de Dionisio" }
    ];

    divindades.forEach(({ id, titulo }) => {
        const section = document.createElement("section");
        section.id = id;
        section.classList.add("slider");

        section.innerHTML = `
            <article class="slider-txt">
                <h2>${titulo}</h2>
            </article>
            <section class="slider-container">
                <button class="prev-btn">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <img class="prev-img" alt="Imagem anterior">
                <section class="slider-images"></section>
                <img class="next-img" alt="Imagem próxima">
                <button class="next-btn">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </section>
        `;

        main.appendChild(section);
    });
}