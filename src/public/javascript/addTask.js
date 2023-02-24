const addTsk = document.getElementById('addTaskContainer');
let moveElement = false;
let initialX = 0;
let initialY = 0;

addTsk.addEventListener('mousedown', (e) => {
    initialX = e.clientX;
    initialY = e.clientY;
    moveElement = true;
});

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

addTsk.addEventListener('mouseup', (e) => {
    moveElement = false;
});

// eslint-disable-next-line no-unused-vars
async function sendData() {
    const rawData = await fetch('http://localhost:8080/task/addTask', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: document.getElementById('taskTitle').value,
            category: fetchCategory(), // eslint-disable-line no-undef
            content: document.getElementById('taskDescription').value,
            dueDate: document.getElementById('taskDate').value
        })
    });
    return (await rawData.json())[0].id;
}
