const inputTask = document.getElementById('inputTask');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener("click", addTask);

inputTask.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const inputValue = inputTask.value.trim();

    if (inputValue !== "") {

        const newTask = document.createElement("li");

        newTask.textContent = inputValue;
        taskList.appendChild(newTask);
        inputTask.value = "";
    } else {
        alert('Please enter a task.');
    }


}
