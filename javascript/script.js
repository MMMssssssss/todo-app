<<<<<<< HEAD
const inputTask = document.getElementById('inputTask');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
=======
const inputTask = document.getElementById("inputTask");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
>>>>>>> c2dc56985739c81d66a80d61be3df197c9ada86d

addButton.addEventListener("click", addTask);

function addTask() {
    const inputValue = inputTask.value.trim();

    if (inputValue !== "") {
<<<<<<< HEAD
        const newTask = document.createElement("li");

        newTask.textContent = inputValue;
        taskList.appendChild(newTask);
        inputTask.value = "";
    } else {
        alert('Please enter a task.');
    }

}
=======
        const newTask = document.createElement("p");

        newTask.textContent = inputValue;

        taskList.appendChild(newTask);

        inputTask.value = "";
    } else {
        alert("Please enter a task.");
    }
}
>>>>>>> c2dc56985739c81d66a80d61be3df197c9ada86d
