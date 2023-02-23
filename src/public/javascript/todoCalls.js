
fetch('http://localhost:8080/task/getAllTasksByCategory')
    .then(res => {
        if(res.ok) { console.log("GET request successful")}
        else { console.log("GET failed")}
        return res
    })
    .then(res => res.json())
    .then(data => addTasksByCategory())
    .catch(error => console.log(error))    


function addTasksByCategory(){
    console.log(data)
    console.log("test")
}