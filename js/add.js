const inputText = document.getElementById("taskInput");
const inputButton = document.getElementById("addButton");



inputButton.addEventListener("click", () =>{
   
    const taskText = inputText.value;

    if(taskText !== ""){
         // Preia sarcinile existente din Local Storage
         const tasks = JSON.parse(localStorage.getItem("task")) || [];
        
         // Adaugă noua sarcină la array
         tasks.push(taskText);
 
         // Salvează array-ul actualizat în Local Storage
         localStorage.setItem("task", JSON.stringify(tasks));
 
        inputText.value = "";
    } else {
        alert("inpututl este gol");
    }
    



});