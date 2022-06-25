

function enviar(){
    let tarefa = document.getElementById("tarefa").value;
    let display = document.getElementById("display");
    let mainDisplay = document.getElementById("main-display");

    display = document.createElement('div');
    display.classList.add("todo");

    if(!tarefa ==''){
        mainDisplay.innerHTML += display.innerHTML = `<div class="todo"><input class="chk" type="checkbox"> <span>` + tarefa + `</span></div>`;
    }else{
        alert("Primeiro Escreva uma tarefa");
    }
}