function openAddTaskContainer(id) {
    document.getElementById("addTaskContainer").style.display = "block";
    checkSelectedCategory(id);
}

function checkSelectedCategory(id) {
    getRadioBoxById(id).childNodes.item(1).checked = true;
}

function getRadioBoxById(id) {
    const radioButtons = getRadioButtons();
    if (id === "todoAddButton") {
        return radioButtons.item(1);
    } else if (id === "inProgressAddButton") {
        return radioButtons.item(3);
    }
    return radioButtons.item(5);
}

const getRadioButtons = () => document.getElementsByClassName("chooseCategory").item(0).childNodes;

function closeAddTaskContainer() {
    document.getElementById("addTaskContainer").style.display = "none";
}

function addTask() {
    const task = fetchDataOfAddTaskForm();
    if (!isTaskValid(task)) {
        alert("Your Task is not valid");
        return;
    }
    const taskHtml = constructTask(task);
    const categoryPosition = getPositionOfCategory(task.category);
    document.getElementsByClassName("kanbanContainer").item(0).childNodes.item(categoryPosition).appendChild(taskHtml);
}

function fetchDataOfAddTaskForm() {
    return {
      category: fetchCategory(),
      title: getValueOfInput("taskTitle"),
      description: getValueOfInput("taskDescription"),
      date: getValueOfInput("taskDate")
    };
}

function fetchCategory() {
    const radioButtons = getRadioButtons()
    for (let i = 0; i < radioButtons.length; i++) {
        const radioButton = radioButtons.item(i).childNodes.item(1);
        if (isChecked(radioButton))
            return radioButton.value.toUpperCase();
    }
}

const isChecked = (radioButton) => radioButton != null && radioButton.checked;

const getValueOfInput = (id) => document.getElementById(id).value;

const isTaskValid = (task) => Object.values(task).every(x => x !== '');

function constructTask(task) {
    const taskHtml = document.getElementById("taskTemplate").content.cloneNode(true).childNodes.item(1);
    taskHtml.querySelector(".taskTitle").textContent = task.title;
    taskHtml.querySelector(".taskDate").textContent = task.date;
    taskHtml.querySelector(".taskDescription").textContent = task.description;
    return taskHtml;
}

function getPositionOfCategory(category) {
    if (category === "DONE") {
        return 5;
    } else if (category === "IN PROGRESS") {
        return 3;
    }
    return 1;
}