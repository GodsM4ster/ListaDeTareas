import checkComplete from "./components/CheckComplete.js";
import deleteIcon from "./components/DeleteIcons.js";

( () => { 
    //? IIFE Immediately invoked function expression(Funciones que son invocadas inmediatamente)
    //? se usa para mantener la privacidad de los datos
    //? Por esa razón toda variable declarada dentro de una IIFE no puede ser usada por fuera.
    //? se representa asi: (()=>{
    //?      aquí iría el código a proteger la privacidad
    //? })();
    const btn = document.querySelector('[data-form-btn]');

    const createTask = (evento)=>{
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;   
        const list =document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';
        const taskContent = document.createElement('div');
        
        const taskTitle = document.createElement('span');
        taskTitle.classList.add('task');
        taskTitle.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(taskTitle);
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    } 

    btn.addEventListener("click", createTask);
    
})();