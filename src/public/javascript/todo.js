function openAddTaskContainer(id) {
    document.getElementById("addTaskContainer").style.display = "block";
    checkSelectedCategory(id);
}

function checkSelectedCategory(id) {
    getRadioBox(id).childNodes.item(1).checked = true;
}

function getRadioBox(id) {
    const radioButtons = document.getElementsByClassName("chooseCategory").item(0).childNodes;
    if (id === "todoAddButton") {
        return radioButtons.item(1);
    } else if (id === "inProgressAddButton") {
        return radioButtons.item(3);
    }
    return radioButtons.item(5);
}

function closeAddTaskContainer() {
    document.getElementById("addTaskContainer").style.display = "none";
}

function addTask() {
    fetchDataOfAddTaskForm();
}

function fetchDataOfAddTaskForm() {
    const category = fetchCategory();
}

function fetchCategory() {
    const radioButtons = document.getElementsByClassName("chooseCategory").item(0).childNodes;
    for (let i = 0; i < radioButtons.length; i++) {
        const radioButton = radioButtons.item(i).childNodes.item(1);
        if (isChecked(radioButton)) {
            return radioButton.value.toUpperCase();
        }
    }
    return "TODO";
}

const isChecked = (radioButton) => radioButton != null && radioButton.checked;