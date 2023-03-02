// eslint-disable-next-line no-unused-vars
function openAddTaskContainer(id) {
    document.getElementById('addTaskContainer').style.display = 'block';
    checkSelectedCategory(id); // eslint-disable-line no-undef
}

// eslint-disable-next-line no-unused-vars
function closeAddTaskContainer() {
    document.getElementById('addTaskContainer').style.display = 'none';
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskContent').value = '';
    document.getElementById('taskDate').value = '';
}

// eslint-disable-next-line no-unused-vars
const getTaskTemplate = () => document.getElementById('taskTemplate').content.cloneNode(true);

// eslint-disable-next-line no-unused-vars
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
        document.getElementById('taskTitle').value = this.parentNode.parentNode.childNodes[1].textContent;
        document.getElementById('taskDate').value = this.parentNode.parentNode.childNodes[3].textContent;
        document.getElementById('taskContent').value = this.parentNode.parentNode.childNodes[5].textContent;
        document.getElementById('submitTask').value = 'Edit';
        document.getElementById('closeAddTaskButton').style.display = 'none';
        getRadioButtons().item(this.parentNode.parentNode.parentNode.parentNode.getAttribute('about')).childNodes[1].checked = true; // eslint-disable-line no-undef
        this.parentNode.parentNode.setAttribute('name', 'editedTask');
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
    let test = ev.target;
    let done = false;
    while(done == false){
    if(test.className === 'category todo' || test.className === 'category inProgress' || test.className === 'category done'){
        test.childNodes[5].appendChild(dragElement);
        getCategoryDrop(test.className, dragElement.id);
        done = true;
    }else{
        test = test.parentNode;
        console.log(test.childNodes);
    }
    }   
}
async function deleteTask(id) {
    await callApi({ // eslint-disable-line no-undef
        url: 'http://localhost:8080/task/deleteTask',
        method: 'POST',
        body: JSON.stringify({ id })
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
