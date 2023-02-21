import { getAllTasksByCategory, addTask, deleteTask, changePositionOfTask, changeCategoryAndPosition, updateTask, } from '../services/task.js';


export async function loadAllTasks(req, res) {
    await getAllTasksByCategory()
}

export async function addTask(req, res) {
    await addTask()
}

export async function deleteTask(req, res) {
    await deleteTask()
}

export async function changePositionOfTask(req, res) {
    await changePositionOfTask()
}

export async function changeCategoryAndPositionOfTask(req, res) {
    await changeCategoryAndPosition()
}

export async function updateTask(req, res) {
    await updateTask()
}


