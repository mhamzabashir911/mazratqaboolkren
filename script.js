function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const button = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
