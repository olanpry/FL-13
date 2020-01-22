const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function createTree(container, data) {
  let ul = document.createElement('ul');

  for (let obj of data) {
    let li = document.createElement('li');
    if (obj.folder) {
      li.className = 'folder';
      li.innerHTML =
        '<i class="material-icons folder_icon" id="open">folder</i>' +
        obj.title;
    } else {
      li.innerHTML =
        '<i class="material-icons insert_drive_file">insert_drive_file</i>' +
        obj.title;
    }
    ul.append(li);
    if (obj.children) {
      createTree(ul, obj.children);
    }
    if (obj.folder === true && !obj.children) {
      let p = document.createElement('p');
      p.innerHTML = '<i>This folder is empty!</i>';
      ul.append(p);
    }
  }
  container.append(ul);
}

createTree(rootNode, structure);

let elem = document.getElementsByClassName('folder');
for (let i = 0; i < elem.length; i++) {
  elem[i].addEventListener('click', openFolder);
}
function openFolder() {
  event.target.nextSibling.classList.toggle('open');
  event.target.firstChild.innerHTML = 'folder_open';
  if (!event.target.nextSibling.classList.contains('open')) {
    event.target.firstChild.innerHTML = 'folder';
  }
}
