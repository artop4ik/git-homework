const button = document.getElementById('baton');

button.addEventListener('click', () => {
    if (button.style.backgroundColor === 'black') {
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
    } else {
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
    }
});