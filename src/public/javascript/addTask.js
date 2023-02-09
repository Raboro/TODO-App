function move(){
    addTaskContainer.addEventListener("mousemove", track);
}

function track(e){
    var x = e.clientX;
    var y = e.clientY;
    addTaskContainer.style.top =y+"px";
    addTaskContainer.style.left =x+"px";
}

function stop(){
    addTaskContainer.removeEventListener("mousemove", track)
}