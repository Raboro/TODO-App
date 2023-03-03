fetch('http://localhost:8080/task/getAllTasks')
    .then(res => res.json())
    .then(data => addTasksByCategory(data));

function addTasksByCategory(data) {
    addTasks(data.todo, 0);
    addTasks(data.inProgress, 0);
    addTasks(data.done, 1);
}

function addTasks(data, catDone) {
    let counter = 0;
    while (data.length > counter) {
        const task = data.at(counter);
        const taskHtml = getTaskTemplate().childNodes.item(1); // eslint-disable-line no-undef
        taskHtml.querySelector('.taskTitle').textContent = task.title;
        taskHtml.querySelector('.taskDate').textContent = getUpdatedTaskDate(task.dueDate);
        if (new Date(getUpdatedTaskDate(task.dueDate)).getTime() < new Date().getTime() && catDone == 0) {
            taskHtml.querySelector('.taskDate').style.color = 'red';
            taskHtml.style.border = '2px solid red';
        }
        taskHtml.querySelector('.taskContent').textContent = task.content;
        taskHtml.id = task.id;
        setOnClickActions(taskHtml); // eslint-disable-line no-undef
        document.getElementsByClassName('kanbanContainer').item(0).childNodes.item(getCategory[task.category]).childNodes.item(5).appendChild(taskHtml);
        counter++;
    }
}

function getUpdatedTaskDate(date) {
    // the date is one day before, and it needs to be moved back
    const oneDay = 60 * 60 * 24 * 1000;
    const updatedDay = new Date(date.substring(0, 10)).getTime() + oneDay;
    return new Date(updatedDay).toISOString().substring(0, 10);
}

const getCategory = {
    1: 1,
    2: 3,
    3: 5
};

async function changeCategory(category, taskId) { // eslint-disable-line no-unused-vars
    await callApi({ // eslint-disable-line no-undef
        url: 'http://localhost:8080/task/changeCategoryOfTask',
        method: 'POST',
        body: JSON.stringify({
            id: taskId,
            category
        })
    });
}

function logout() { // eslint-disable-line no-unused-vars
    fetch('http://localhost:8080/user/logout');
    window.location.href = 'http://localhost:8080/signIn';
}

// eslint-disable-next-line no-unused-vars
async function callApi(call) {
    return await fetch(call.url, {
        method: call.method,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: call.body
    });
}
