const button = document.querySelector('button');
function moveButton() {
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

document.addEventListener('mousemove', (event) => {
    // Emplacement de la souris
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    // Récupartion la taille et la position relative du bouton de la page
    const buttonRect = button.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    const distance = Math.sqrt(Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2));

    if (distance < 250) {
        moveButton();
    }
    
});



button.addEventListener('click', () => {
    
    alert("Félicitation");
});
    
        
    