const addButton = document.querySelectorAll('.add-button, .addnote');
const blurBackground = document.querySelector('.blur-background');
const modal = document.querySelector('.form-modal');
const closeButton = document.querySelector('.close-button');
const doneButton = document.querySelector('.done-button');

addButton.forEach(button => {
    button.addEventListener('click', () => {
        blurBackground.style.display = 'block';
        modal.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    blurBackground.style.display = 'none';
    modal.style.display = 'none';
});

doneButton.addEventListener('click', () => {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    if (title && content) {
        const newNote = document.createElement('div');
        newNote.classList.add('note');
        const date = new Date().toLocaleDateString(); 
        
        newNote.innerHTML = `
            <h4 class="single-line">${title}</h4><i class='bx bx-dots-horizontal-rounded'></i>
            <hr id="top">
            <p class="multi-line">${content}</p>
            <hr id="bot">
            <small>${date}</small>
        `;
        
        document.querySelector('.notes').appendChild(newNote);

        blurBackground.style.display = 'none';
        modal.style.display = 'none';
    } else {
        alert('Please fill out both the title and content fields.');
    }
});

document.getElementById('logout').onclick = function(event) {
    if (!confirm("Are you sure you want to log out?")) {
        event.preventDefault(); 
    }
};