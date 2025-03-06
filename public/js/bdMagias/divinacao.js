import { Magias } from '../classRPG.js';

export const magiasDivinação  = [
    // Ciclo 0
    new Magias(
        "divinação", "0", "Purificar Alimentos", "súbita",
        "Nenhum",
        "Remoção de impurezas em alimentos e líquidos, em quantidades pequenas."
    ),

    new Magias(
        "divinação", "0", "Magia de Iluminação", "súbita",
        "Nenhum",
        "Controle básico da essência prateada, para produzir uma iluminação mística sobre um local."
    ),

    // Ciclo 1
    new Magias(
        "divinação", "1", "Magia de Cura", "rápida",
        "Purificar Alimentos",
        "Estimula a recuperação de tecidos, curando 10% de HP por uso."
    ),

    new Magias(
        "divinação", "1", "Curar Ferimentos", "rápida",
        "Purificar Alimentos",
        "Remove efeitos negativos de ferimentos leves e graves por todo o corpo."
    ),

    new Magias(
        "divinação", "1", "Magia de Detecção", "rápida",
        "Magia de Iluminação",
        "Pode ser usado como uma lente perceptiva para detectar algo da seguinte lista: Magia, Venenos ou Mortos vivos."
    ),

    new Magias(
        "divinação", "1", "Magia de Orientação", "rápida",
        "Magia de Iluminação",
        "Garante proficiência III em testes de sobrevivência, para saber a direção de um caminho que já passou ou para se orientar em relação às cardinalidades."
    ),

    // Ciclo 2
    new Magias(
        "divinação", "2", "Regeneração", "lenta",
        "Magias de Cura e Curar Ferimentos",
        "Cria um pequeno véu prateado circundando o corpo, que restaura feridas leves e recupera 10 pontos de vida por 5 turnos."
    ),

    new Magias(
        "divinação", "2", "Abençoar Água", "rápida",
        "Purificar Alimentos",
        "Abençoa um recipiente pequeno com água para criar água benta."
    ),

    new Magias(
        "divinação", "2", "Purificar Efeitos", "rápida",
        "Curar Ferimentos",
        "Remove efeitos negativos que ajam sobre a mente do alvo."
    ),

    new Magias(
        "divinação", "2", "Percepção Extra", "súbita",
        "Magias de Detecção",
        "Permite jogar um teste extra de percepção."
    ),

    new Magias(
        "divinação", "2", "Clarividência Menor", "lenta",
        "Magia de Orientação",
        "Permite vislumbrar no véu do destino uma indicação subjetiva para uma pergunta."
    ),

    new Magias(
        "divinação", "2", "Ler Magias", "súbita",
        "Magias de Detecção",
        "Permite decifrar escritas mágicas em objetos, cenários ou em pessoas, garantindo a identificação de habilidades mágicas ou runas."
    ),

    // Ciclo 3
    new Magias(
        "divinação", "3", "Ver o Futuro", "lento",
        "Clarividência Menor",
        "Permite vislumbrar um evento que pode ocorrer em breve."
    ),
    new Magias(
        "divinação", "3", "Criar Alimento", "lenta",
        "Magias de Regeneração",
        "Cria 1d4 frutos que servem para alimentação."
    ),
    new Magias(
        "divinação", "3", "Criar Água", "lenta",
        "Magias de Regeneração",
        "Cria água suficiente para preencher um cantil."
    ),
    new Magias(
        "divinação", "3", "Acalmar Animal", "rápida",
        "Purificar Efeitos",
        "Permite acalmar um animal que esteja enfurecido, podendo fazê-lo dormir."
    ),
    new Magias(
        "divinação", "3", "Compreender Idiomas", "rápida",
        "Ler Magias",
        "Permite entender um idioma que esteja sendo falado ou que esteja escrito, desde que este seja comum."
    ),

    new Magias(
        "divinação", "3", "Detecção Avançada", "lenta",
        "Magia de Detecção",
        "Permite identificar tudo que as magias de detecção encontram, mais esta lista: armadilhas, animais, bem, mal, ordem e caos."
    ),

    new Magias(
        "divinação", "3", "Visão da Morte", "lenta",
        "Magia de Detecção",
        "Permite vislumbrar como uma criatura ou animal pode ser morta ou seus pontos fracos."
    ),

    // Ciclo 4
    new Magias(
        "divinação", "4", "Romper Morto Vivo", "lenta",
        "Abençoar Água",
        "Libera um projétil sagrado que causa danos críticos em mortos vivos, magias de cura melhoram essa habilidade."
    ),

    new Magias(
        "divinação", "4", "Magia da Vitalidade", "rápida",
        "Purificar Efeitos",
        "Aumenta o HP em 10 pontos por 10 rodadas, se beneficiar de bônus de cura."
    ),

    new Magias(
        "divinação", "4", "Magia de Resistência", "rápida",
        "Purificar Efeitos",
        "Aumenta o redutor em 5 pontos por 10 rodadas, se beneficiar de bônus de cura."
    ),

    new Magias(
        "divinação", "4", "Purgar Ocultação", "rápida",
        "Detecção Avançada",
        "Permite anular efeitos de ocultação de ciclo equivalente."
    ),

    new Magias(
        "divinação", "4", "Proteger Visão", "rápida",
        "Detecção Avançada",
        "Permite jogar um teste de resistência contra efeitos de contato de olhos mágicos ou de coisas que afetem diretamente a percepção."
    ),

    new Magias(
        "divinação", "4", "Luz do dia", "lenta",
        "Romper mortos vivos",
        "Permite criar uma iluminação equivalente ao dia, afetando criaturas que tenham alguma interação com este clima."
    ),
    new Magias(
        "divinação", "4", "Clareza Mental", "súbita",
        "Ver o Futuro",
        "Aumenta a capacidade de foco, permitindo ter sucesso em um teste mental."
    ),
    // Ciclo 5
    new Magias(
        "divinação", "5", "Adivinhação", "lento",
        "Clareza Mental",
        "Permite consultar um ser superior para obter conselhos sobre o futuro."
    ),
    new Magias(
        "divinação", "5", "Visão do Passado", "lento",
        "Clareza Mental",
        "Permite reviver uma memória ou evento significativo que ocorreu no passado."
    ),
    new Magias(
        "divinação", "5", "Aura do Ser", "súbita",
        "Clareza Mental",
        "Revela a verdadeira natureza e intenções de uma criatura, mostrando sua aura mágica."
    ),
    // Ciclo 6
    new Magias(
        "divinação", "6", "Olho do Destino", "lenta",
        "Adivinhação",
        "Revela uma visão do futuro, mostrando possíveis desdobramentos de uma situação atual, permitindo ao usuário se preparar."
    ),
    new Magias(
        "divinação", "6", "Oração da Sabedoria", "lento",
        "Adivinhação",
        "Garante vantagem em testes de sabedoria por um breve período."
    ),
    new Magias(
        "divinação", "6", "Escuta do Além", "lenta",
        "Adivinhação",
        "Permite ouvir conversas ou sons em uma área distante, como se estivesse presente no local."
    ),
    new Magias(
        "divinação", "6", "Espelho da Verdade", "súbita",
        "Visão do Passado",
        "Permite ver uma verdade oculta sobre uma situação ou pessoa."
    ),
    new Magias(
        "divinação", "6", "Cura Aquosa", "lenta",
        "Elemento Água",
        "Canaliza água para curar feridas leves em um aliado, restaurando até 25 pontos de vida."
    ),

    // Ciclo 7
    new Magias(
        "divinação", "7", "Profecia", "lento",
        "Oração da Sabedoria",
        "Revela uma visão detalhada de um evento importante que está por vir."
    ),

];