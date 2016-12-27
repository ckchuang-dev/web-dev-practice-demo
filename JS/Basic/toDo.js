var toDos = [];

function funcNew(event){
    toDos.push(event);
    return 0;
}

function funcList(){
    toDos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    })
    return 0;
}

function funcRemove(index){
    if(index > -1){
        toDos.splice(index, 1);
    }
    else{
        console.log("Wrong index, you could try again if you still want remove.");
    }
    return 0;
}

function funcQuit(){
    alert("okay, quit");
}

var input = prompt("What to do?");
for (;input != "quit";input = prompt("What to do?")){

    if(input === "new"){
        var event = prompt("Add a to do item:");
        funcNew(event);
    }
    else if (input === "rm"){
        var index = prompt("Enter index of todo to delete:");
        funcRemove(index);
    }
    else if (input === "ls"){
        funcList();
    }
    else{
        alert("Wrong input, try again!");
    }
}
funcQuit();
