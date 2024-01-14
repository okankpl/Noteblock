let titles = [];
let notes = [];
let deletedNotes = [];
let deletedTitles = [];
load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = ``; // nicht vergessen, da sonst der Eintrag doppelt erstellt wird

    for(let i = 0; i < titles.length; i++) {
        
        const title = titles [i];
        const note = notes [i];
        content.innerHTML += `
        <div class="notice-container">
        <h2>${title}</h2>
        <p>${note}</p>
        <img onclick="deleteNote(${i})" class="delete-icon" src="img/delete.png" alt="delete-icon">
        </div>`;
    }
}



function addNote() {
    let addNotice = document.getElementById('noticeInput');
    let addTitle = document.getElementById('titleInput');
    if (addNotice.value.trim() === '' || addTitle.value.trim() === '') {
        alert('Bitte geben Sie etwas in die Titel und Notiz Sektion ein!');
    }
    else {
    titles.push(addTitle.value);
    notes.push(addNotice.value);
    document.getElementById('noticeInput').value = ``;
    document.getElementById('titleInput').value = ``;
    render();
    save();
    }
}

function deleteNote(i) {
    deletedTitles.push(titles[i]);
    deletedNotes.push(notes[i]);
    titles.splice(i,1);
    notes.splice(i,1);
    render();
    save();
    
}

function save() {
    let titleAsText = JSON.stringify(titles);
    localStorage.setItem('titles', titleAsText);

    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('notes', notesAsText);
    
    let deletedNotesAsText = JSON.stringify(deletedNotes);
    localStorage.setItem('deletedNotes', deletedNotesAsText);

    let deletedTitleAsText = JSON.stringify(deletedTitles);
    localStorage.setItem('deletedTitles', deletedTitleAsText);
}

function load() {
    let titleAsText = localStorage.getItem('titles');
    let notesAsText = localStorage.getItem('notes');
    let deletedNotesAsText = localStorage.getItem('deletedNotes');
    let deletedTitleAsText = localStorage.getItem('deletedTitles');
    if(titleAsText && notesAsText) {
    titles = JSON.parse(titleAsText);
    notes = JSON.parse(notesAsText);
    }
    if (deletedNotesAsText && deletedTitleAsText) {
        deletedNotes = JSON.parse(deletedNotesAsText);
        deletedTitles = JSON.parse(deletedTitleAsText);
        
    }
  }

 
  
 