let rootNode = document.getElementById('root');

let h1 = document.createElement('h1');
h1.innerHTML = 'TODO List';
rootNode.append(h1);

let mainPage = document.createElement('div');
mainPage.classList.add('main-page');
let addNewSetPage = document.createElement('div');
addNewSetPage.classList.add('new-set-page', 'hide');
let modifyExistSetPage = document.createElement('div');
modifyExistSetPage.classList.add('modify-page', 'hide');

let newSave = document.createElement('button');
newSave.innerHTML = 'Save New';
let newCancel = document.createElement('button');
newCancel.innerHTML = 'Cancel';
modifyExistSetPage.append(newSave);
modifyExistSetPage.append(newCancel);

rootNode.append(mainPage);
rootNode.append(addNewSetPage);
rootNode.append(modifyExistSetPage);

let addNewButton = document.createElement('button');
addNewButton.innerHTML = 'Add new';
addNewButton.classList.add('add-new-btn', 'btn');
mainPage.append(addNewButton);

let flashcardContainer = document.createElement('div');
flashcardContainer.classList.add('flashcard-conatiner');

addNewButton.onclick = function() {
  // move to add new set page with hash #...
  mainPage.classList.add('hide');
  addNewSetPage.classList.remove('hide');
  mainPage.append(flashcardContainer);
};

let nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Name');

let addTermsBtn = document.createElement('button');
addTermsBtn.innerHTML = 'Add Terms';
addTermsBtn.classList.add('add-terms', 'btn');

let saveBtn = document.createElement('button');
saveBtn.innerHTML = 'Save';
saveBtn.classList.add('save-btn', 'btn');

let cancelBtn = document.createElement('button');
cancelBtn.innerHTML = 'Cancel';
cancelBtn.classList.add('cancel-btn', 'btn');

addNewSetPage.append(nameInput);
addNewSetPage.append(addTermsBtn);
addNewSetPage.append(saveBtn);
addNewSetPage.append(cancelBtn);

cancelBtn.insertAdjacentHTML('afterend', '<br>');

let termContainer = document.createElement('div');
termContainer.classList.add('term-container', 'hide');
addNewSetPage.append(termContainer);

let term = document.createElement('input');
let definition = document.createElement('input');
term.setAttribute('type', 'text');
term.setAttribute('placeholder', 'Term');
definition.setAttribute('type', 'text');
definition.setAttribute('placeholder', 'Definition');
termContainer.append(term);
term.insertAdjacentHTML('afterend', '<br>');
termContainer.append(definition);

addTermsBtn.onclick = function() {
  termContainer.classList.contains('hide')
    ? termContainer.classList.remove('hide')
    : termContainer.classList.add('hide');
};

let editName = document.createElement('input');
editName.setAttribute('type', 'text');
let editTerm = document.createElement('input');
editTerm.setAttribute('type', 'text');
let editDef = document.createElement('input');
editDef.setAttribute('type', 'text');

let id = 1;

saveBtn.onclick = function() {
  if (!nameInput.value) {
    alert('Enter Name');
  } else {
    let flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');
    flashcard.setAttribute('id', `${id++}`);
    flashcard.innerHTML = '<p class="name-input">' + nameInput.value + '</p>';
    if (term.value) {
      flashcard.innerHTML += '<p class="term-input">' + term.value + '</p>';
    }
    if (definition.value) {
      flashcard.innerHTML +=
        '<p class="definition-input">' + definition.value + '</p>';
    }

    flashcardContainer.append(flashcard);

    nameInput.value = '';
    term.value = '';
    definition.value = '';
    if (termContainer) {
      termContainer.classList.add('hide');
    }

    mainPage.classList.remove('hide');
    addNewSetPage.classList.add('hide');
    // redirect to main page

    let markbtn = document.createElement('button');
    markbtn.innerHTML = 'Done';
    markbtn.classList.add('btn', 'mark-btn');
    let remove = document.createElement('button');
    remove.innerHTML = 'Remove';
    remove.classList.add('btn', 'remove-btn');
    let edit = document.createElement('button');
    edit.innerHTML = 'Edit';
    edit.classList.add('btn', 'edit-btn');
    let btncontainer = document.createElement('div');
    btncontainer.classList.add('btn-container');
    btncontainer.append(markbtn);
    btncontainer.append(edit);
    btncontainer.append(remove);
    flashcard.append(btncontainer);

    remove.onclick = function() {
      flashcardContainer.removeChild(flashcard);
    };

    markbtn.onclick = function() {
      flashcardContainer.append(flashcard);
      termContainer.classList.add('hide');
      flashcard.classList.add('done');
    };

    edit.onclick = function() {
      // redirect to modify set page
      mainPage.classList.add('hide');
      modifyExistSetPage.classList.remove('hide');
      let target = event.target.parentNode.parentNode;
      editName.value = target.querySelector('.name-input').innerHTML;
      modifyExistSetPage.append(editName);
      newSave.addEventListener('click', newsave);
      newCancel.onclick = function() {
        ///redirect to new without saving
        mainPage.classList.remove('hide');
        modifyExistSetPage.classList.add('hide');
      };
      if (target.querySelector('.term-input')) {
        editTerm.value = target.querySelector('.term-input').innerHTML;
        modifyExistSetPage.append(editTerm);
      } else {
        modifyExistSetPage.removeChild(editTerm);
      }
      if (target.querySelector('.definition-input')) {
        editDef.value = target.querySelector('.definition-input').innerHTML;
        modifyExistSetPage.append(editDef);
      } else {
        modifyExistSetPage.removeChild(editDef);
      }
      function newsave() {
        if (!editName.value) {
          alert('Enter name');
        } else {
          target.querySelector('.name-input').innerHTML = editName.value;
        }
        if (editTerm.value) {
          target.querySelector('.term-input').innerHTML = editTerm.value;
        }
        if (editDef.value) {
          target.querySelector('.definition-input').innerHTML = editDef.value;
        }

        //redirect to main page
        mainPage.classList.remove('hide');
        modifyExistSetPage.classList.add('hide');
      }
    };
  }
};

cancelBtn.onclick = function() {
  nameInput.value = '';
  term.value = '';
  definition.value = '';
  if (termContainer) {
    termContainer.classList.add('hide');
  }
  // redirect without save to main page
  mainPage.classList.remove('hide');
  addNewSetPage.classList.add('hide');
};
