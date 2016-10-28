var toDo = [];

function funcNew(event){
    toDo.push(event);
    return 0;
}
function funcList(){
    console.log(toDo);
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
    else if (input === "list"){
        funcList();
    }
    else{
        alert("Wrong input, try again!");
    }
}
funcQuit();
