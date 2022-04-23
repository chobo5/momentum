const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDolist = document.getElementById('todo-list');
let toDos = [];
const TODOS_KEY = 'toDos';

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement('li');
    li.id = newToDo.id
    const span = document.createElement('span');
    span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY, toDos);
if(savedToDos) {
    const parsedsavedToDos = JSON.parse(savedToDos);
    toDos = parsedsavedToDos;
    parsedsavedToDos.forEach(paintToDo); 
}