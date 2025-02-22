document.addEventListener('DOMContentLoaded', function() {
    // Carregar o header e inicializar scripts
    carregarConteudo("./nav.html", "out-nav", initializeNav);

    // Carregar o footer
    // carregarConteudo("../Pages/footer.html", "out-footer");
    
});

// Função para carregar conteúdos
function carregarConteudo(url, elementId, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(elementId).innerHTML = this.responseText;
            if (callback) callback(); // Executa callback após carregar conteúdo
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}    

function initializeNav() {
    const btnMenu = document.querySelector(".btn-menu");
    const menu = document.querySelector(".navmenu");
    const nav = document.querySelector(".nav");
    
    inicializeTema();

    if (btnMenu && menu && nav) {
        function handleButtonClick(event) {
            if (event.type == "touchstart") event.preventDefault();
            event.stopPropagation();
            nav.classList.toggle("active");
            handleClickOutside(menu, () => {
                nav.classList.remove("active");
            });
        }

        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('btn-menu')) {
                handleButtonClick(event);
            }
            if (!event.target.closest('.navmenu')) {
                nav.classList.remove("active");
            }
        });

        function handleClickOutside(targetElement, callback) {
            const html = document.documentElement;

            function handleHTMLClick(event) {
                if (!targetElement.contains(event.target)) {
                    targetElement.removeAttribute("data-target");
                    html.removeEventListener("click", handleHTMLClick);
                    html.removeEventListener("touchstart", handleHTMLClick);
                    callback();
                }
            }

            if (!targetElement.hasAttribute("data-target")) {
                html.addEventListener("click", handleHTMLClick);
                html.addEventListener("touchstart", handleHTMLClick);
                targetElement.setAttribute("data-target", "");
            }
        }

        btnMenu.addEventListener("click", handleButtonClick);
        btnMenu.addEventListener("touchstart", handleButtonClick);
    }

    //Função do scroll do nav, esta aqui para otimizar espaço
    function scrollnav() {
        if (window.scrollY >= 100) {
            nav.classList.add("scroll");
        } else {
            nav.classList.remove("scroll");
        }
    }

    window.addEventListener("scroll", scrollnav);
}  

function inicializeTema() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i'); // Seleciona o ícone dentro do botão

    themeToggle.addEventListener('click', function (event) {
        event.preventDefault();

        // Alterna entre temas
        body.classList.toggle('light-theme');

        // Troca o ícone
        if (body.classList.contains('light-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun'); // Define o ícone de sol
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon'); // Retorna para o ícone de lua
        }
    });
}

