//Função que adiciona tarefa
function addTask() {
    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {
        //Clona template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        //Adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //Remover classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //Adiciona tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //Adicionar evento de remover tarefa
        const removeBtn = newTask.querySelector(".remove-btn");
        removeBtn.addEventListener("click", function () {
            removeTask(this);
        });

        //Adicionar evento de confirmar tarefa
        const doneBtn = newTask.querySelector(".done-btn");
        doneBtn.addEventListener("click", function () {
            doneTask(this);
        });

        //Limpar campo de texto
        document.querySelector("#task-title").value = "";
    }
}

//Função que remove tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

function doneTask(task) {
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");
}

//Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function (e) {
    e.preventDefault();

    addTask();
});