const inputText = document.getElementById("taskInput");
const inputButton = document.getElementById("addButton");



inputButton.addEventListener("click", () =>{
   
    const taskText = inputText.value;

    if(taskText !== ""){
        localStorage.setItem("task", taskText);
        inputText.value = "";
    } else {
        alert("inpututl este gol");
    }
    



});