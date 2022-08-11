const navigationList = document.getElementById('menuDesktop');

const meniuIcon = document.getElementById('meniuIcon');

meniuIcon.addEventListener('click',() =>{
    if(navigationList.classList.contains('hidden')){
        navigationList.style.display = 'block';
        navigationList.classList.remove('hidden');
    }
    else{
        navigationList.style.display = 'none';
        navigationList.classList.add('hidden');
    }
});

// cod pentru todos
let todoItems = [];
let nrTodos =0;

function renderTodo(todo) {
  const list = document.querySelector('.js-todo-list');

  const isChecked = todo.checked ? 'done': '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.classList.add('todoItemJs');
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button id='butonDeleteCreated' class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;
  list.append(node);
}

function geta(){
  const a= document.querySelectorAll('.delete-todo');
  const b = document.querySelectorAll('.todoItemJs');
  console.log(a);
  console.log(b);
  a.forEach((element,index) =>{
    element.addEventListener('click', () =>{
    b[index].remove();
    });
  });
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
  geta();
  
}
const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim();
  if (text != '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});


// --purple-dark-2: hsl(270, 0%, 5%);
// --purple-dark-1: hsl(270, 20%, 15%);
// --purple: hsl(270, 40%, 50%);
// --purple-light-1: hsl(270, 40%, 55%);


let root = document.querySelector(':root');

function lightMode(){
  root.style.setProperty('--purple-dark-1', '#FAFAFA');//background
  root.style.setProperty('--purple-dark-2', '#8AA29E');//navigation color
  root.style.setProperty('--purple', 'black');//writting
  root.style.setProperty('--purple-light-1', '#DB5461');
}

function darkMode(){
  root.style.setProperty('--purple-dark-1', 'hsl(270, 20%, 15%)');//background
  root.style.setProperty('--purple-dark-2', 'hsl(270, 0%, 5%)');//navigation color
  root.style.setProperty('--purple', 'hsl(270, 40%, 50%)');//writting
  root.style.setProperty('--purple-light-1', 'hsl(270, 40%, 55%)');
}

const switchDarkMode = document.getElementById('switchInput');
let darkModeIsChecked =true;

switchDarkMode.addEventListener('click', () => {
    if(darkModeIsChecked){
        lightMode();
        darkModeIsChecked=false;
    }
    else{
        
        darkMode();
        darkModeIsChecked=true;
    }
});