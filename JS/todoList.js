const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOARR_KEY = "todoArr";

let todoArr = [];

function saveTodos() {
    localStorage.setItem(TODOARR_KEY, JSON.stringify(todoArr));
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    todoArr = todoArr.filter(todo => todo.id != parseInt(li.id));
    saveTodos();
}

function showTodo(todo) {
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");

    span.innerText = todo.text;

    const button = document.createElement("button");
    
    button.innerText = "❌";
    button.addEventListener('click', deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function todoSubmit(e) {
    e.preventDefault();
    const myTodo = todoInput.value;
    todoInput.value = "";
    const objTodo = {
        text: myTodo,
        id: Date.now(),
    };
    todoArr.push(objTodo);
    showTodo(objTodo);
    saveTodos();
}

todoForm.addEventListener('submit', todoSubmit);

const savedTodos = localStorage.getItem(TODOARR_KEY);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todoArr = parsedTodos;
    parsedTodos.forEach(showTodo);
}


