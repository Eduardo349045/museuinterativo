function showPopup(id) {
    document.getElementById(id).style.display = 'block';
}

function closePopup() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => popup.style.display = 'none');
}

function showQuiz() {
    const answer = prompt('Qual era a principal capital do Império Romano?');
    if (answer && answer.toLowerCase() === 'roma') {
        alert('Certo! Roma era a capital do Império Romano.');
    } else {
        alert('Errado! A resposta correta é Roma.');
    }
}

function showThankYou() {
    alert('Obrigado por visitar o museu! Confira nossas outras exposições.');
}
