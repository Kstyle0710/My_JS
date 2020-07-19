const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDO(event) {
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos =  toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    // console.log(text);
    const li = document.createElement("li");
    const delBt = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1
    delBt.innerText = "✖";
    delBt.addEventListener("click", deleteToDO);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBt);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos() 
    
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue =  toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}



function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null) {
        // console.log(loadToDos);
        const parsedToDos = JSON.parse(loadToDos);
        // console.log(parsedToDos)
        parsedToDos.foreach(function(toDo){
            paintToDo(toDo.text);
        })

    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)

}


    

init();