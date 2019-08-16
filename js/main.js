var taskInput = document.querySelector(".add-item-text");
var addButton = document.querySelector(".add-button");
var incompletedTasks = document.querySelector("#incompleted-tasks");
var deleteTaskButton = document.querySelector(".delete-btn");
var tasksIncompletedTasks = document.querySelector("#incompleted-tasks");

var tasks = [
  {
    name: "Go shopping",
    isCompleted: false
  },
  {
    name: "Pay bills",
    isCompleted: false
  },
  {
    name: "See the doctor",
    isCompleted: true
  }
];

function addTask (e) {
  if (e.type === 'click' || e.type === 'keyup' && e.keyCode === 13) {
    generateTaskData();
  }
}

function generateTaskData () {
  var newTask = {
    name: taskInput.value,
    isCompleted: false
  }
  tasks.push(newTask)
  displayTaskData(taskInput.value)
  console.log(tasks)
}

function displayTaskData (value) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var deleteButton = document.createElement("button");
  label.innerText = value;
  deleteButton.innerText = "delete";
  checkBox.setAttribute("type", "checkbox");
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

  incompletedTasks.appendChild(listItem)
}

function deleteTask (card) {
  // console.log(e)
  // Check if target element is a delete button
  if (card.target) {
    console.log("This is delete button")
    button.onclick = function() {
      button.innerHTML = "Click me: " + count;
    };

  }
}

taskInput.addEventListener('keyup', addTask);
addButton.addEventListener('click', addTask);
tasksIncompletedTasks.addEventListener('click', deleteTask);






