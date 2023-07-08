let tasks = [];

function addTask(task){
if(!tasks.includes(task)){
tasks.push(task);
return true;
}
return false;
}

function removeTask(task){
const taskIndex = tasks.indexOf(task);
if(taskIndex > -1){
tasks.splice(taskIndex, 1);
return true;
}
return false;
}

function listTasks(){
return tasks.map((task, index) => ({
id: index,
task
}));
}

module.exports = {
addTask,
removeTask,
listTasks
}