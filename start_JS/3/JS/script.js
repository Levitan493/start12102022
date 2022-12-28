// #1

// let arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
// let newArr = [];
// for(let i =0; i <arrRandomNumbers.length;i++){
//     let evenNumber = arrRandomNumbers[i];
//     if(evenNumber % 2 == 0){
//         newArr.push(evenNumber);
//     }

// }
// console.log(newArr);



// #2

// let itemArr = [];
// for(i = 0; i<5; i++){
//     let item = prompt('What would you like to buy');
//     itemArr.push(item);
//     console.log(itemArr);
// }


// #3


function sum(b){
    
    let midValue = b.length;
    let c = 0
    for(i=0; i < midValue; i++){
        let a = b[i];
        c = c+a;     
    }
    let res = c / midValue;
    console.log(res);
}
sum([1,2,3]);
sum([4,1,3]);


// #4


// let smile = [':)', '=)',':)', '=)',':)', '=)'];
// let a = 0;
// function replaceArr(){
//     for(i=0;i<smile.length;i++){
//         a = smile[i];
//         if(a===':)'){
//             smile.splice(i,1, ';)');
//         }
//     }
//     console.log(smile);
// }
// replaceArr();


// #5

// let animals =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
// let userValue = prompt('Enter: first or last');
// function newAnimal(userValue){
//     if(userValue == 'last'){
//         let animalsArr = [animals];
//         animals.pop();
//         console.log(animals);
//         console.log(animalsArr);

//     }
//     else if(userValue == 'first'){
//         let animalsArr = [animals];
//         animals.shift();
//         console.log(animals);
//         console.log(animalsArr);
//     }
//     else{
//         alert('Enter correct value');
//     }

// }
// newAnimal(userValue);


// #6

// let sumArr =[];
// let userChoose = prompt('How many numbers')
// for( let n=0; n<userChoose; n++){
//     let userNumber = prompt('Enter number');
//     userNumber = parseFloat(userNumber);
//     sumArr.push(userNumber);

// }
// function sum(sumArr){
//     let variableValue = 0;
//     for(let i=0; i<sumArr.length; i++){
//         variableValue += sumArr[i];
//     }
//     console.log(variableValue);
// }

// sum(sumArr);



// #7

// let start = prompt('Enter the starting index');
// let finish = prompt('Enter the ending index');
// let randomArr = [5, 12, "String", null, 546, "Hello!", true, 100];

// function cutArrFunc(start, finish, randomArr) {
//     if (start < finish) {
//         if (finish < randomArr.length){}

//     }
//     else {
//         alert("Enter correct index")
//     }
//     let newArr = randomArr.slice(start, finish);
//     console.log(randomArr);
//     console.log(newArr);
    
//     return newArr;
    
// }

// cutArrFunc(start, finish, randomArr);


