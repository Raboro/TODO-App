const addTsk = document.getElementById('addTaskContainer');
let moveElement = false;
let initialX = 0;
let initialY = 0;

//For drag addTask
addTsk.addEventListener('mousedown', (e) => {
    initialX = e.clientX;
    initialY = e.clientY;
    moveElement = true;
});
//For drag addTask
addTsk.addEventListener('mousemove', (e) => {
    if (moveElement) {
        e.preventDefault();
        const newX = e.clientX;
        const newY = e.clientY;
        addTsk.style.top = addTsk.offsetTop - (initialY - newY) + 'px';
        addTsk.style.left = addTsk.offsetLeft - (initialX - newX) + 'px';
        initialX = newX;
        initialY = newY;
    }
});
//For drag addTask
addTsk.addEventListener('mouseup', (e) => {
    moveElement = false;
});

// eslint-disable-next-line no-unused-vars
async function addTaskToDB(task) {
    const rawData = await callApi({ // eslint-disable-line no-undef
        url: 'http://localhost:8080/task/addTask',
        method: 'POST',
        body: JSON.stringify({
            title: task.title,
            category: task.category,
            content: task.content,
            dueDate: task.dueDate
        })
    });
    return (await rawData.json())[0].id;
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

// eslint-disable-next-line no-unused-vars
async function addTask() {
    const task = fetchDataOfAddTaskForm();
    if (isTaskValid(task)) {
        if (document.getElementById('submitTask').value === 'Edit') {
            closeAddTaskContainer();
            document.getElementById('submitTask').value = 'Add';
            document.getElementById('closeAddTaskButton').style.display = 'block';
            const editedTask = document.getElementsByName('editedTask')[0];
            await deleteTask(editedTask.id);
            editedTask.remove();
        }
        const taskID = await addTaskToDB(task); // eslint-disable-line no-undef
        addTaskToCategory(task, taskID);
    }
}

function fetchDataOfAddTaskForm() {
    return {
        category: fetchCategory(),
        title: getValueOfInput('taskTitle'),
        content: getValueOfInput('taskContent'),
        dueDate: getValueOfInput('taskDate')
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
    taskHtml.querySelector('.taskDate').textContent = task.dueDate;
    taskHtml.querySelector('.taskContent').textContent = task.content;
    taskHtml.id = taskID;
    setOnClickActions(taskHtml);
    return taskHtml;
}