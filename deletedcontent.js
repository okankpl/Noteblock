let deletedNotes = [];
let deletedTitles = [];
load();

function renderDeletedContent() {
    let content = document.getElementById('deletedContent');
    content.innerHTML = ''; // nicht vergessen, da sonst der Eintrag doppelt erstellt wird

    for(let i = 0; i < deletedNotes.length; i++) {
        
        const title = deletedTitles [i];
        const note = deletedNotes [i];
        content.innerHTML += `
        <div class="notice-container">
        <h2>${title}</h2>
        <p>${note}</p>
        
        </div>`;
        
    }
  }

  function save() {
    
    
    let deletedNotesAsText = JSON.stringify(deletedNotes);
    localStorage.setItem('deletedNotes', deletedNotesAsText);

    let deletedTitleAsText = JSON.stringify(deletedTitles);
    localStorage.setItem('deletedTitles', deletedTitleAsText);
}

function load() {
   
    let deletedNotesAsText = localStorage.getItem('deletedNotes');
    let deletedTitleAsText = localStorage.getItem('deletedTitles');
   
    if (deletedNotesAsText && deletedTitleAsText) {
        deletedNotes = JSON.parse(deletedNotesAsText);
        deletedTitles = JSON.parse(deletedTitleAsText);
        
    }
  }

  function clearTrash() {
    deletedNotes = [];
    deletedTitles = [];
    
    save();
    renderDeletedContent();
  }