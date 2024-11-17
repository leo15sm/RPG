import { Magias } from '../classAtributos.js';

export const magiasNatureza  = [
    new Magias("natureza", "0", "Flora Skim", "súbita", "Nenhum", 
        "Manifestação da essência da natureza na forma de uma áurea que recobre o corpo do usuário melhorando em 20% toda cura recebida e toda criação de vida."),
    
    new Magias("natureza", "1", "Toque Natural", "súbita", "Flora Skim", 
        "Gera o efeito de contato da natureza, sendo este a criação espontânea de vida, podendo ser usado como uma manobra de agarrão."),
    
    new Magias("natureza", "1", "Glifo da Vitalização", "súbita", "Escrita mágica e Flora Skim", 
        "Escrita mágica que melhora em 50% todas as magias de cura."),
    
    new Magias("natureza", "1", "Glifo da Armadura", "súbita", "Escrita mágica e Flora Skim", 
        "Escrita mágica que melhora em 50% todas as magias de aprimoramento de redutor."),
    
    new Magias("natureza", "1", "Criar Flora", "Rápida", "Manifestar Magia e Flora Skim", 
        "Criação de algum tipo de forma de vida."),
    
    new Magias("natureza", "2", "Arma Arcana da Natureza", "súbita", "Flora Skim e Toque Natural", 
        "Reverte uma arma com a áurea mágica, fornecendo a mesma o efeito de contato da magia de toque da natureza, por 10 rodadas."),
    
    new Magias("natureza", "2", "Runa da Natureza", "súbita", "Glifo da Vitalização ou Armadura", 
        "Runa mágica cravada em um local, gerando uma vantagem extra em habilidades de suporte, defensivas e o consumo de mana é um redutor fixo no mana máximo equivalente ao ciclo."),
    
    new Magias("natureza", "2", "Manifestar Raízes", "rápida", "Criar Flora", 
        "Criação de diversas raízes que aplicarão o efeito de contato da natureza."),
    
    new Magias("natureza", "2", "Esfera de Natureza", "lenta", "Flora Skim e Magia de Ataque", 
        "Canalização de toda áurea mágica em uma esfera, ganhando uma vantagem para o ataque e causando o efeito de agarrão da natureza."),
    
    new Magias("natureza", "2", "Escudo de Natureza", "lenta", "Flora Skim e Magia de Defesa", 
        "Criação de um escudo octogonal composto de áurea da natureza, ativo por 5 rodadas ou equanto não for destruido por uma interação elemental."),
    
    new Magias("natureza", "3", "Campo da Flora", "lenta", "Manifestar Raízes", 
        "Criação de diversas formas de vida no campo, com o intuito de ganhar a prioridade de terreno."),
    
    new Magias("natureza", "3", "Armadura de Natureza Menor", "rápida", "Flora Skim e Armadura Arcana", 
        "Armadura de natureza com prioridades do Flora Skim, aumentando o redutor em 10 por 10 rodadas e dobrando a resistência a líquidos."),
    
    new Magias("natureza", "3", "Passo de Natureza", "rápida", "Flora Skim e Impulso Arcano", 
        "Canalização da áurea mágica nas pernas para ganhar velocidade, com duas vantagens para esquiva e criação de vida ao passar."),
    
    new Magias("natureza", "3", "Punho de Natureza", "lenta", "Toque Natural e Implemento Arcano", 
        "Golpe corpo a corpo imbuído com áurea da natureza, causando o efeito de contato e com prioridade na ação de agarrão."),
    
    new Magias("natureza", "3", "Golpe de Natureza", "lenta", "Esfera de Natureza e Arma Arcana da Natureza", 
        "Projeção de natureza do golpe de uma arma, causando os efeitos da esfera e o dano da arma."),
    
    new Magias("natureza", "3", "Esfera Sanguessuga", "lenta", "Esfera de Natureza e Manifestar Raízes", 
        "Cria uma esfera de natureza que enraíza no local atingido e se alimenta do sangue do alvo."),
    
    new Magias("natureza", "4", "Armada de Natureza", "lenta", "Arma Arcana e Esfera de Natureza", 
        "Criação de 1d4 armas de áurea da natureza, causando dano do tipo da arma e permanecendo em campo por 5 rodadas."),
    
    new Magias("natureza", "4", "Flora Walk", "lenta", "Passo de Natureza e Campo da Flora", 
        "Forma uma zona de flora ativa por 5 rodadas, permitindo um uso de Passo de Natureza por turno sem custos adicionais."),
    
    new Magias("natureza", "5", "Diversidade da Natureza", "rápida", "Campo da Flora", 
        "Deve ser usada com Campo da Flora ativo. O conjurador pode gerar flora do seu tipo em todo o campo."),
    
    new Magias("natureza", "5", "Guardião da Flora", "lenta", "Esfera Sanguessuga e Runa do Ent", 
        "Cria cascas e galhos de essência da natureza, causando efeito de toque e funcionando como armadura, podendo manipular livremente a flora com conexão."),
];