let rootNode = document.getElementById('root');
let h1 = document.createElement('h1');
let mainPage = document.createElement('div');
let addNewSetPage = document.createElement('div');
let modifyExistSetPage = document.createElement('div');

let addNewButton = document.createElement('button');
let flashcardContainer = document.createElement('div');
let flashcard = document.createElement('div');

let nameInput = document.createElement('input');
let addTermsBtn = document.createElement('button');
let saveBtn = document.createElement('button');
let cancelBtn = document.createElement('button');
let termContainer = document.createElement('div');
let term = document.createElement('input');
let definition = document.createElement('input');

let newSave = document.createElement('button');
let newCancel = document.createElement('button');
let editName = document.createElement('input');
let editTerm = document.createElement('input');
let editDef = document.createElement('input');

let id = 1;

rootNode.append(h1);
rootNode.append(mainPage);
rootNode.append(addNewSetPage);
rootNode.append(modifyExistSetPage);

mainPage.append(addNewButton);
mainPage.append(flashcardContainer);

addNewSetPage.append(nameInput);
addNewSetPage.append(addTermsBtn);
addNewSetPage.append(saveBtn);
addNewSetPage.append(cancelBtn);
addNewSetPage.append(termContainer);
termContainer.append(term);
termContainer.append(definition);

modifyExistSetPage.append(newSave);
modifyExistSetPage.append(newCancel);
modifyExistSetPage.append(editName);
modifyExistSetPage.append(editTerm);
modifyExistSetPage.append(editDef);

h1.innerHTML = 'Term Constructor v1.0.1';
mainPage.classList.add('main-page');
addNewSetPage.classList.add('new-set-page', 'hide');
modifyExistSetPage.classList.add('modify-page', 'hide');

addNewButton.innerHTML = 'Add new';
flashcardContainer.classList.add('flashcard-conatiner');
flashcard.classList.add('flashcard');

nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Name');
addTermsBtn.innerHTML = 'Add Terms';
saveBtn.innerHTML = 'Save';
cancelBtn.innerHTML = 'Cancel';
cancelBtn.insertAdjacentHTML('afterend', '<br>');
termContainer.classList.add('term-container', 'hide');
term.setAttribute('type', 'text');
term.setAttribute('placeholder', 'Term');
term.insertAdjacentHTML('afterend', '<br>');
definition.setAttribute('type', 'text');
definition.setAttribute('placeholder', 'Definition');

newCancel.innerHTML = 'Cancel';
newSave.innerHTML = 'Save New';
editName.setAttribute('type', 'text');
editTerm.setAttribute('type', 'text');
editDef.setAttribute('type', 'text');

const MAIN_PAGE_HASH = '/mainpage';
const ADD_NEW_HASH = '/addnew';
const MOD_PAGE_HASH = '/modify/';

window.onload = function() {
  location.hash = MAIN_PAGE_HASH;
};

addNewButton.onclick = function() {
  location.hash = ADD_NEW_HASH;
};

addTermsBtn.onclick = function() {
  termContainer.classList.toggle('hide');
};

saveBtn.onclick = function() {
  if (!nameInput.value) {
    alert('Enter Name');
  } else {
    flashcardGenerator();
    reset();
    location.hash = MAIN_PAGE_HASH;
  }
};

cancelBtn.onclick = function() {
  reset();
  location.hash = MAIN_PAGE_HASH;
};

function flashcardGenerator() {
  let card = flashcard.cloneNode(true);
  card.setAttribute('id', `${id++}`);
  card.innerHTML = '<p class="name-input">' + nameInput.value + '</p>';
  card.innerHTML += '<p class="term-input">' + term.value + '</p>';
  card.innerHTML += '<p class="definition-input">' + definition.value + '</p>';
  btnGenerator(card);
  if (document.querySelector('.done')) {
    document.querySelector('.done').before(card);
  } else {
    flashcardContainer.append(card);
  }
}

function btnGenerator(card) {
  let markbtn = document.createElement('button');
  let remove = document.createElement('button');
  let edit = document.createElement('button');
  markbtn.innerHTML = 'Done';
  edit.innerHTML = 'Edit';
  remove.innerHTML = 'Remove';
  let btncontainer = document.createElement('div');
  btncontainer.append(markbtn);
  btncontainer.append(edit);
  btncontainer.append(remove);
  card.append(btncontainer);

  remove.onclick = function() {
    flashcardContainer.removeChild(card);
  };
  markbtn.onclick = function() {
    flashcardContainer.append(card);
    card.classList.add('done');
  };

  edit.onclick = function() {
    let target = event.target.parentNode.parentNode;
    location.hash = MOD_PAGE_HASH + id;
    editName.value = target.querySelector('.name-input').innerHTML;
    editTerm.value = target.querySelector('.term-input').innerHTML;
    editDef.value = target.querySelector('.definition-input').innerHTML;
    newSave.onclick = function() {
      if (!editName.value) {
        alert('Enter Name');
      } else {
        target.querySelector('.name-input').innerHTML = editName.value;
        location.hash = MAIN_PAGE_HASH;
      }
      target.querySelector('.term-input').innerHTML = editTerm.value;
      target.querySelector('.definition-input').innerHTML = editDef.value;
    };
  };
}

newCancel.onclick = function() {
  location.hash = MAIN_PAGE_HASH;
};

function reset() {
  nameInput.value = '';
  term.value = '';
  definition.value = '';
  if (termContainer) {
    termContainer.classList.add('hide');
  }
}

window.addEventListener('hashchange', function() {
  switch (location.hash.split('/')[1]) {
    case 'mainpage':
      mainPage.classList.remove('hide');
      addNewSetPage.classList.add('hide');
      modifyExistSetPage.classList.add('hide');
      break;
    case 'addnew':
      mainPage.classList.add('hide');
      modifyExistSetPage.classList.add('hide');
      addNewSetPage.classList.remove('hide');
      break;
    case 'modify':
      mainPage.classList.add('hide');
      addNewSetPage.classList.add('hide');
      modifyExistSetPage.classList.remove('hide');
      break;
    default:
      mainPage.classList.remove('hide');
      addNewSetPage.classList.add('hide');
      modifyExistSetPage.classList.add('hide');
      break;
  }
});
