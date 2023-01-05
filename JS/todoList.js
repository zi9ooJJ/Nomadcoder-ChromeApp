const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
}

function showTodo(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.innerText = todo;

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
    showTodo(myTodo);
}

todoForm.addEventListener('submit', todoSubmit);