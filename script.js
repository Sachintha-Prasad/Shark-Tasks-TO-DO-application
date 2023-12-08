// SELECTORS ==================================================================
const userInput = document.getElementById("user-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.querySelector(".todo-list-container");

// EVENT LISTNERS ==============================================================
addBtn.addEventListener("click", createTask);
todoList.addEventListener("click", checkDelete);
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
            "🚫 Whoops! Looks like you're trying to add a task without typing anything. 🤔 Please enter a task before adding it! 📝✨"
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

    // clear input value
    userInput.value = "";
}

function checkDelete(event) {
    console.log(event.target);
}
