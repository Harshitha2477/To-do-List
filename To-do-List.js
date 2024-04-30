function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML = taskText + '<span class="delete-btn" onclick="removeTask(this)">❌</span>';
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
function removeTask(task) {
    var listItem = task.parentElement;
    listItem.remove();
}
