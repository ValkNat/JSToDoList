let task_array = [];

//Selecting all elements needed here:
document.addEventListener("DOMContentLoaded", (event) => {
    submitButton = document.getElementById("submit-button");
    deleteButton = document.getElementById('delete-button');
    saveButton = document.getElementById('save-button');
    const input = document.getElementById('input-entry');
    let task_count = 0;

    submitButton.addEventListener("click", () => {
        inputValue = input.value;
        const node = document.createElement("p");
        const textnode = document.createTextNode(task_count + ". " + inputValue);
        node.id = task_count;
        node.contentEditable = true;
        task_count++;
        node.appendChild(textnode);
        task_array.push(inputValue);
        document.getElementById("task-list").appendChild(node);
});

    deleteButton.addEventListener("click", () => {
        task_number = prompt("Which task number would you like to delete?");
        deleteTask(task_number);
});

    saveButton.addEventListener("click", () => {
        task_text = "";
        for (let i =0; i < task_array.length; i++) {
            task_text += task_array[i] + "\n";
            console.log(task_text);
        }
        SaveTaskListToFile("tasklist.txt", task_text);
    });

//End of DOM content loaded function
});


function deleteTask(task_number) {
    //Delete to re-list tasks
    task_array.splice(task_number, task_number);
    console.log(task_array);

    //Clear elements to re-list
    taskList = document.getElementById("task-list");
    taskList.innerHTML = '';
    task_count = 0;

    for (let i = 0; i < task_array.length; i++) {
        const node = document.createElement('p');
        const textNode = document.createTextNode(task_count + ". " + task_array[i]);
        node.id = task_count;
        task_count++;
        node.appendChild(textNode);
        document.getElementById('task-list').appendChild(node);
    }

    console.log(task_array);
    
}

function SaveTaskListToFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}




