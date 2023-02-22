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
    // document.getElementById("taskTitle").value = "";
    // document.getElementById("taskDescription").value = "";
    // document.getElementById("taskDate").value = "";
    // later for clear data form new Tasks
}

// eslint-disable-next-line no-unused-vars
function addTask() {
    const task = fetchDataOfAddTaskForm();
    if (isTaskValid(task)) {
        addTaskToCategory(task);
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

function addTaskToCategory(task) {
    getCategoryToAppendTask(getPositionOfCategory[task.category]).appendChild(constructTask(task));
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

function constructTask(task) {
    const taskHtml = getTaskTemplate().childNodes.item(1);
    taskHtml.querySelector('.taskTitle').textContent = task.title;
    taskHtml.querySelector('.taskDate').textContent = task.date;
    taskHtml.querySelector('.taskDescription').textContent = task.description;
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
        this.parentNode.parentNode.remove();
    };
}

function setOnClickActionOfEditTask(taskHtml) {
    taskHtml.querySelector('.edit').onclick = function() {
        document.getElementById('addTaskContainer').style.display = 'block';
        document.getElementById('closeAddTaskButton').disabled = true;
        this.parentNode.parentNode.remove();
    };
}

// eslint-disable-next-line no-unused-vars
function allowDrop(ev) {
    ev.preventDefault();
}

// eslint-disable-next-line no-unused-vars
function drag(ev) {
    ev.target.setAttribute('id', 'dragElement');
    ev.dataTransfer.setData('text', ev.target.id);
}

// eslint-disable-next-line no-unused-vars
function drop(ev) {
    ev.preventDefault();
    const dragElement = document.getElementById('dragElement');
    if (ev.target.className === 'category') {
        ev.target.childNodes[5].appendChild(dragElement);
    } else {
        ev.target.parentNode.childNodes[5].appendChild(dragElement);
    }
    dragElement.removeAttribute('id');
}
