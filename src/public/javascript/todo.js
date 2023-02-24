// eslint-disable-next-line no-unused-vars
function openAddTaskContainer(id) {
    document.getElementById('addTaskContainer').style.display = 'block';
    checkSelectedCategory(id);
}

function checkSelectedCategory(id) {
    getRadioBoxById(id).childNodes.item(1).checked = true;
}

function getRadioBoxById(id) {
    return getRadioButtons().item(getRadioButtonById[id]);
}

const getRadioButtons = () => document.getElementsByClassName('chooseCategory').item(0).childNodes;

const getRadioButtonById = {
    todoAddButton: 1,
    inProgressAddButton: 3,
    doneAddButton: 5
};

function closeAddTaskContainer() {
    document.getElementById('addTaskContainer').style.display = 'none';
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskDate").value = "";
}

// eslint-disable-next-line no-unused-vars
async function addTask() {
    const taskID = await sendData(); // eslint-disable-line no-undef
    const task = fetchDataOfAddTaskForm();
    if (isTaskValid(task)) {
        addTaskToCategory(task, taskID);
        document.getElementById('closeAddTaskButton').disabled = false;
    }
}

function fetchDataOfAddTaskForm() {
    return {
        category: fetchCategory(),
        title: getValueOfInput('taskTitle'),
        description: getValueOfInput('taskDescription'),
        date: getValueOfInput('taskDate')
    };
}

function fetchCategory() {
    const radioButtons = getRadioButtons();
    for (let i = 0; i < radioButtons.length; i++) {
        const radioButton = radioButtons.item(i).childNodes.item(1);
        if (isChecked(radioButton)) { return radioButton.value.toUpperCase(); }
    }
}

const isChecked = (radioButton) => radioButton != null && radioButton.checked;

const getValueOfInput = (id) => document.getElementById(id).value;

const isTaskValid = (task) => Object.values(task).every(x => x !== '');

function addTaskToCategory(task, taskID) {
    getCategoryToAppendTask(getPositionOfCategory[task.category]).appendChild(constructTask(task, taskID));
    closeAddTaskContainer();
}

function getCategoryToAppendTask(categoryPosition) {
    return document.getElementsByClassName('kanbanContainer').item(0).childNodes.item(categoryPosition).childNodes.item(5);
}

const getPositionOfCategory = {
    TODO: 1,
    'IN PROGRESS': 3,
    DONE: 5
};

function constructTask(task, taskID) {
    const taskHtml = getTaskTemplate().childNodes.item(1);
    taskHtml.querySelector('.taskTitle').textContent = task.title;
    taskHtml.querySelector('.taskDate').textContent = task.date;
    taskHtml.querySelector('.taskDescription').textContent = task.description;
    taskHtml.id = taskID;
    setOnClickActions(taskHtml);
    return taskHtml;
}

const getTaskTemplate = () => document.getElementById('taskTemplate').content.cloneNode(true);

function setOnClickActions(taskHtml) {
    setOnClickActionOfDeleteTask(taskHtml);
    setOnClickActionOfEditTask(taskHtml);
}

function setOnClickActionOfDeleteTask(taskHtml) {
    taskHtml.querySelector('.delete').onclick = function() {
        deleteTask(this.parentNode.parentNode.id);
        this.parentNode.parentNode.remove();
    };
}

function setOnClickActionOfEditTask(taskHtml) {
    taskHtml.querySelector('.edit').onclick = function() {
        document.getElementById('addTaskContainer').style.display = 'block';
        document.getElementById('closeAddTaskButton').disabled = true;
        deleteTask(this.parentNode.parentNode.id);
        this.parentNode.parentNode.remove();
    };
}

// eslint-disable-next-line no-unused-vars
function allowDrop(ev) {
    ev.preventDefault();
}

let dragID;
// eslint-disable-next-line no-unused-vars
function drag(ev) {
    dragID = ev.target.id;
    ev.dataTransfer.setData('text', dragID);
}

// eslint-disable-next-line no-unused-vars
function drop(ev) {
    ev.preventDefault();
    const dragElement = document.getElementById(dragID);
    if (ev.target.className === 'category todo' || ev.target.className === 'category inProgress' || ev.target.className === 'category done') {
        ev.target.childNodes[5].appendChild(dragElement);
        getCategoryDrop(ev.target.className, dragElement.id);
    } else if (!ev.target.parentNode.className.startsWith('task')) {
        ev.target.parentNode.childNodes[5].appendChild(dragElement);
        getCategoryDrop(ev.target.parentNode.className, dragElement.id);
    }
}
async function deleteTask(id) {
    await fetch('http://localhost:8080/task/deleteTask', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id
        })
    });
}

function getCategoryDrop(name, id) {
    if (name === 'category todo') {
        changeCategory(1, id); // eslint-disable-line no-undef
    }
    if (name === 'category inProgress') {
        changeCategory(2, id); // eslint-disable-line no-undef
    }
    if (name === 'category done') {
        changeCategory(3, id); // eslint-disable-line no-undef
    }
}
