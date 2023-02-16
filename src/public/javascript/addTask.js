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
    if (moveElement == true) {
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
