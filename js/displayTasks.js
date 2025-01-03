const taskList = document.getElementById("taskList");

// Funcție pentru afișarea sarcinilor
function displayTasks() {
    const tasks = JSON.parse(localStorage.getItem("task")) || [];
    taskList.innerHTML = ""; // Golește lista înainte de afișare

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        // Conținutul sarcinii
        const taskSpan = document.createElement("span");
        taskSpan.textContent = task;

        // Grupul de butoane
        const buttonGroup = document.createElement("div");

        // Buton "Finalizat"
        const completeButton = document.createElement("button");
        completeButton.classList.add("btn", "btn-success", "btn-sm", "me-2");
        completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        completeButton.addEventListener("click", () => {
            taskSpan.style.textDecoration = "line-through";
        });

        // Buton "Șterge"
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.innerHTML = '<i class="fa-solid fa-x"></i>';
        deleteButton.addEventListener("click", () => {
            deleteTask(index);
        });

        buttonGroup.appendChild(completeButton);
        buttonGroup.appendChild(deleteButton);

        li.appendChild(taskSpan);
        li.appendChild(buttonGroup);
        taskList.appendChild(li);
    });
}

// Funcție pentru ștergerea unei sarcini
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem("task")) || [];
    tasks.splice(index, 1); // Elimină sarcina de la indexul specificat
    localStorage.setItem("task", JSON.stringify(tasks)); // Salvează modificările
    displayTasks(); // Reafișează lista actualizată
}

// Afișează sarcinile la încărcarea paginii
window.addEventListener("load", displayTasks);
