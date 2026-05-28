let tasks = [];

function addTask(){

    let taskInput = document.getElementById("taskInput");
    let taskDate = document.getElementById("taskDate");
    let taskTime = document.getElementById("taskTime");

    if(taskInput.value.trim() === ""){
        alert("Enter a task");
        return;
    }

    let task = {

        id: Date.now(),

        text: taskInput.value,

        date: taskDate.value,

        time: taskTime.value,

        completed: false
    };

    tasks.push(task);

    displayTasks();

    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";
}

function displayTasks(){

    let taskContainer = document.getElementById("taskContainer");

    taskContainer.innerHTML = "";

    tasks.forEach((task)=>{

        let taskCard = document.createElement("div");

        taskCard.classList.add("task-card");

        if(task.completed){
            taskCard.classList.add("completed");
        }

        taskCard.innerHTML = `

            <div class="left">

                <div class="check-circle"
                onclick="toggleComplete(${task.id})">
                </div>

                <div class="task-info">

                    <h3>${task.text}</h3>

                    <p>
                        📅 ${task.date || "No Date"}
                        &nbsp;&nbsp;
                        ⏰ ${task.time || "No Time"}
                    </p>

                </div>

            </div>

            <div class="actions">

                <button class="edit-btn"
                onclick="editTask(${task.id})">
                    Edit
                </button>

                <button class="delete-btn"
                onclick="deleteTask(${task.id})">
                    Delete
                </button>

            </div>

        `;

        taskContainer.appendChild(taskCard);

    });

}

function toggleComplete(id){

    tasks.forEach((task)=>{

        if(task.id === id){
            task.completed = !task.completed;
        }

    });

    displayTasks();
}

function editTask(id){

    let newTask = prompt("Edit task");

    if(newTask === null || newTask.trim() === ""){
        return;
    }

    tasks.forEach((task)=>{

        if(task.id === id){
            task.text = newTask;
        }

    });

    displayTasks();
}

function deleteTask(id){

    tasks = tasks.filter((task)=> task.id !== id);

    displayTasks();
}