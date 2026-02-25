const inputTask = document.getElementById("inputTask");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const inputValue = inputTask.value.trim();

    if (inputValue !== "") {
        const newTask = document.createElement("p");

        newTask.textContent = inputValue;

        taskList.appendChild(newTask);

        inputTask.value = "";
    } else {
        alert("Please enter a task.");
    }
}
