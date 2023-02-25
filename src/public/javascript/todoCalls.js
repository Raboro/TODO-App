fetch('http://localhost:8080/task/getAllTasks')
    .then(res => res.json())
    .then(data => addTasksByCategory(data))

function addTasksByCategory(data) {
    addTasks(data.todo);
    addTasks(data.inProgress);
    addTasks(data.done);
}

function addTasks(data) {
    let counter = 0;
    while (data.length > counter) {
        const task = data.at(counter);
        const taskHtml = getTaskTemplate().childNodes.item(1); // eslint-disable-line no-undef
        taskHtml.querySelector('.taskTitle').textContent = task.title;
        taskHtml.querySelector('.taskDate').textContent = task.dueDate.substring(0, 10);
        taskHtml.querySelector('.taskDescription').textContent = task.content;
        taskHtml.id = task.id;
        setOnClickActions(taskHtml); // eslint-disable-line no-undef
        document.getElementsByClassName('kanbanContainer').item(0).childNodes.item(getCategory[task.category]).childNodes.item(5).appendChild(taskHtml);
        counter++;
    }
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
            category: category
        })
    });
}

function logout() { // eslint-disable-line no-unused-vars
    fetch('http://localhost:8080/user/logout');
    window.location.href = 'http://localhost:8080/signIn';
}
