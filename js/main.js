var taskInput = document.querySelector(".add-item-text");
var addButton = document.querySelector(".add-button");
var incompletedTasks = document.querySelector("#incompleted-tasks")

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
  generateTaskData();
  console.log("addTask")

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

// taskInput.addEventListener('keyup', addTask);
addButton.addEventListener('click', addTask);






