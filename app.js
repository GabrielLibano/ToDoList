


function enviar(){
    let tarefa = document.getElementById("tarefa").value;
    let display = document.getElementById("display");
    let mainDisplay = document.getElementById("main-display");
    display = document.createElement('div');
    display.classList.add("todo");

    if(!tarefa ==''){
        mainDisplay.innerHTML += display.innerHTML = `    
        <div class="todo">
            <input class="chk" type="checkbox" name="check" onclick="check()" id="chk">
            <span class="list" >${tarefa}</span>
            <div class="row-delete">
                <input type="button" value="Delete" class="btn-delete" onclick="del()">
            </div>
        </div>`;
    document.getElementById("tarefa").value = "";
    }else{
        alert("Primeiro Escreva uma tarefa");
    }
}

function del(){
    let mainDisplay = document.getElementById("main-display");
    mainDisplay.innerHTML = "";
}
function check(){
    // let mainDisplay = document.getElementById("main-display");
    // chk = document.querySelector("input chk");
    // // chk.forEach(chks =>{

    // // })
    // chk.addEventListener('check', function(){
    //     if (this.checked){
    //         mainDisplay.style.textDecorationLine = "line-through";
    //     }else{
    //         mainDisplay.style.textDecorationLine = "none";
    //     }
    // })
    // console.log(chk)
    

    let chks = document.querySelectorAll("input[type=checkbox][name=check]");

    chks.forEach(function(checkbox) {

        checkbox.addEventListener('change', function() {
            enabled = Array.from(checkbox).filter ( i=> i.check).map(i => i.value)
            console.log(enabled);
        })
    })


}