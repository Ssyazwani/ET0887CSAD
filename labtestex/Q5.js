const A = [88, 73, 59, 61];
const B = [80, 0, -66, 97, -44];

function CombineArray(A, B) {
 
    const newArray = [...A];

 
    for (let value of B) {
        if (value < 0) {
         
            value = 100 - Math.abs(value);
        }
        newArray.push(value);
    }



    return newArray;
}


console.log(CombineArray(A, B));


    for (let value of B) { //print out array
    console.log(value);
}