function showPopup(item) {
    const content = {
        item1: "A Pirâmide de Gizé, construída por volta de 2580 a.C. para o faraó Quéops, é a mais antiga das Sete Maravilhas do Mundo Antigo e a única que ainda existe. Originalmente com 146 metros de altura, sua base é notavelmente alinhada com os pontos cardeais, refletindo o avançado conhecimento astronômico dos egípcios. Estima-se que foram utilizados mais de 2 milhões de blocos de pedra, cada um pesando entre 2,5 e 15 toneladas, e os métodos de construção ainda permanecem um mistério fascinante até hoje.",
        item2: "O Coliseu de Roma, também conhecido como Anfiteatro Flaviano, foi construído entre 70 e 80 d.C. e podia acomodar de 50.000 a 80.000 espectadores. Era um importante local para lutas de gladiadores, batalhas navais e outros espetáculos, destacando-se pela sua impressionante engenharia com arcos e colunas. Reconhecido como Patrimônio Mundial da UNESCO em 1980, o Coliseu permanece como um dos maiores ícones da Roma Antiga, atraindo milhões de visitantes todos os anos.",
        item3: "Embora a guerra seja frequentemente considerada uma história mitológica, evidências arqueológicas sugerem que um conflito real pode ter ocorrido na região, indicando que a história de Troia pode ter raízes na realidade.",
        item4: "Uma curiosidade sobre o Cristo Redentor, icônico símbolo do Rio de Janeiro, é que a estátua foi inaugurada em 1931, após quase 10 anos de construção, e é feita de concreto armado e pedra-sabão. Com 30 metros de altura e braços que se estendem por 28 metros, ela não apenas representa a fé cristã, mas também é considerada uma das Novas Sete Maravilhas do Mundo Moderno. Além disso, a obra foi projetada pelo engenheiro Heitor da Silva Costa e pelo escultor francês Paul Landowski, refletindo a união de várias influências culturais e artísticas.",
        item5: ""
    };
    
    document.getElementById("popupContent").innerText = content[item];
    $('#popup').modal('show');
}

function showQuiz() {
    $('#quizPopup').modal('show');
}

function checkAnswer() {
    const answer = document.getElementById("quizAnswer").value.toLowerCase();
    const feedback = document.getElementById("quizFeedback");
    
    if (answer === "tumbas" || answer === "tumba") { 
        feedback.innerText = "Certo! As pirâmides serviam como tumbas para os faraós.";
    } else {
        feedback.innerText = "Errado! Tente novamente.";
    }
}

function showExitPopup() {
    $('#exitPopup').modal('show');
}
