function openAddTaskContainer(id) {
    document.getElementById("addTaskContainer").style.display = "block";
    checkSelectedCategory(id);
}

function checkSelectedCategory(id) {
    getRadioBox(id).childNodes.item(1).checked = true;
}

function getRadioBox(id) {
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
}

function fetchDataOfAddTaskForm() {
    return {
      category: fetchCategory(),
      taskTitle: getValueOfInput("taskTitle"),
      taskDescription: getValueOfInput("taskDescription"),
      taskDate: getValueOfInput("taskDate")
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