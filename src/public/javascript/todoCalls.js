
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
    addTasks(data.inProgress)
    addTasks(data.done);    
}

function addTasks(data){
    let counter = 0;
    while(data.length > counter){
        const task = data.at(counter);
        const taskHtml = getTaskTemplate().childNodes.item(1); //create new task
        taskHtml.querySelector('.taskTitle').textContent = task.title;
        taskHtml.querySelector('.taskDate').textContent = task.dueDate;
        taskHtml.querySelector('.taskDescription').textContent = task.content;
        taskHtml.id = task.id;
        setOnClickActions(taskHtml);
        document.getElementsByClassName('kanbanContainer').item(0).childNodes.item(getCategory[task.category]).childNodes.item(5).appendChild(taskHtml);
        counter++;
    }
}

const getCategory = {
    1: 1,
    2: 3,
    3: 5
};
