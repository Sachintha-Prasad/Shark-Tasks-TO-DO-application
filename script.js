// SELECTORS ==================================================================
const userInput = document.getElementById("user-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.querySelector(".todo-list-container");

// EVENT LISTNERS ==============================================================
addBtn.addEventListener("click", createTask);
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        createTask();
    }
});

// FUNCTIONS ====================================================================
function createTask(event) {
    // prevent form from submiting
    event.preventDefault();

    if (userInput.value === "") {
        alert(
            "🚫 Whoops! Looks like you forgot to write the task! Try again. 📝✨"
        );
    } else {
        // div for todo
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // create check button
        const checkedBtn = document.createElement("button");
        checkedBtn.innerHTML = `<i class="fa-regular fa-circle"></i>`;
        checkedBtn.classList.add("checked-btn");
        todoDiv.appendChild(checkedBtn);

        // trim user input
        const todoText = userInput.value.trim();

        // create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todoText;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        // create trash button
        const trashBtn = document.createElement("button");
        trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        trashBtn.classList.add("trash-btn");
        todoDiv.appendChild(trashBtn);

        // appent todoDiv
        todoList.appendChild(todoDiv);
    }

    userInput.value = "";
}
