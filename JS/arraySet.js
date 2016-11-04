// 1: Show printReverse()
// 2: Show isUniform()
// 3: Show sumArray()
// 4: Show max()

var array = [];

function printReverse(){
    for(var i = array.length - 1; i > -1; i--){
        console.log(array[i]);
    }
    return 0;
}

function isUniform(){
    var tmp = array[0];
    for(var i = 1; i < array.length; i++){
        if(array[i] != tmp){
            return false;
        }
    }
    return true;
}

function sumArray(){
    var sum = 0;
    array.forEach(function(item){
        sum += Number(item);
    });
    console.log(sum);
    return 0;
}

function max(){
    var max = array[0];
    array.forEach(function(item){
        if(Number(max) < Number(item))
            max = item;
    });
    console.log(max);
    return 0;
}

var index = prompt("Please select the index of function you wanna demo: ");

while (index != 0){
    array = [];
    input = prompt("Enter elements(q to end): ");
    while(input != 'q'){
        array.push(input);
        input = prompt("Enter elements(q to end): ");
    }
    switch(index){
        case '1':
            printReverse();
            break;
        case '2':
            var ret = isUniform();
            console.log(ret);
            break;
        case '3':
            sumArray();
            break;
        case '4':
            max();
            break;
    }
    index = prompt("Please select the index of function you wanna demo: ");
}
