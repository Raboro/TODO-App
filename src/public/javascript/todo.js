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

function switchTheme() {
    if (isChecked(document.getElementsByClassName("colorSwitch").item(0).childNodes.item(1))) {
        switchToDarkTheme(getStylesheetWithRules());
        return;
    }
    switchToWhiteTheme(getStylesheetWithRules());
}

function getStylesheetWithRules() {
    for (let i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets.item(i).href.endsWith("variables.css")) {
            document.styleSheets.item((i)).deleteRule(0);
            return document.styleSheets.item((i));
        }
    }
}

function switchToWhiteTheme(stylesheet) {
    stylesheet.insertRule(":root {\n" +
        "    --mainBackgroundColor: white;\n" +
        "    --headingColor: black;\n" +
        "    --categoryBorderColor: rgba(255, 255, 255, 0.281);\n" +
        "    --categoryBoxShadowColor: rgba(131, 131, 131, 0.295);\n" +
        "    --categoryBackgroundColor: rgba(206, 205, 205, 0.24);\n" +
        "    --categoryHeadingBoxShadowColor: rgba(146, 126, 126, 0.178);\n" +
        "    --headingTodoBackgroundColor: rgba(128, 128, 128, 0.199);\n" +
        "    --headingTodoColor: grey;\n" +
        "    --headingInProgressBackgroundColor: rgba(121, 177, 230, 0.329);\n" +
        "    --headingInProgressColor: rgb(121, 177, 230);\n" +
        "    --headingDoneBackgroundColor: rgba(126, 228, 126, 0.274);\n" +
        "    --headingDoneColor: rgba(63, 150, 63, 0.699);\n" +
        "    --addButtonBackgroundColor: rgba(128, 128, 128, 0.144);\n" +
        "    --addButtonColor: black;\n" +
        "    --addButtonHoverBackgroundColor: rgba(128, 128, 128, 0.212);\n" +
        "    --addButtonHoverBoxShadowColor: rgba(146, 126, 126, 0.089);\n" +
        "}");
}

function switchToDarkTheme(stylesheet) {
    stylesheet.insertRule(":root {\n" +
        "    --mainBackgroundColor: rgba(0, 0, 0, 0.3);\n" +
        "    --headingColor: black;\n" +
        "    --categoryBorderColor: rgba(255, 255, 255, 0.281);\n" +
        "    --categoryBoxShadowColor: rgba(131, 131, 131, 0.295);\n" +
        "    --categoryBackgroundColor: rgba(206, 205, 205, 0.24);\n" +
        "    --categoryHeadingBoxShadowColor: rgba(146, 126, 126, 0.178);\n" +
        "    --headingTodoBackgroundColor: rgba(128, 128, 128, 0.199);\n" +
        "    --headingTodoColor: grey;\n" +
        "    --headingInProgressBackgroundColor: rgba(121, 177, 230, 0.329);\n" +
        "    --headingInProgressColor: rgb(121, 177, 230);\n" +
        "    --headingDoneBackgroundColor: rgba(126, 228, 126, 0.274);\n" +
        "    --headingDoneColor: rgba(63, 150, 63, 0.699);\n" +
        "    --addButtonBackgroundColor: rgba(128, 128, 128, 0.144);\n" +
        "    --addButtonColor: black;\n" +
        "    --addButtonHoverBackgroundColor: rgba(128, 128, 128, 0.212);\n" +
        "    --addButtonHoverBoxShadowColor: rgba(146, 126, 126, 0.089);\n" +
        "}");
}