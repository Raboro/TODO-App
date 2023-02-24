
fetch('http://localhost:8080/task/getAllTasks')
    .then(res => {
        if (res.ok) { console.log('GET request successful'); } else { console.log('GET failed'); }
        return res;
    })
    .then(res => res.json())
    .then(data => addTasksByCategory(data))
    .catch(error => console.log(error));

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

async function changeCategory(newCategory, taskId) { // eslint-disable-line no-unused-vars
    await fetch('http://localhost:8080/task/changeCategoryOfTask', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: taskId,
            category: newCategory // eslint-disable-line no-undef
        })
    });
}

function logout() { // eslint-disable-line no-unused-vars
    fetch('http://localhost:8080/user/logout');
    window.location.href = 'http://localhost:8080/signIn';
}
