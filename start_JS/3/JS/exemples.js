function printArg(value = 'Empty', printTime){
    if(printTime === undefined){
        printTime = 3;
    }
    for(let i = 0; i<printTime; i++){
        console.log(value);
    }
}