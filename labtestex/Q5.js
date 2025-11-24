const A = [88, 73, 59, 61];
const B = [80, 0, -66, 97, -44];

// function CombineArray(A, B) {
 
//     const newArray = [...A];

 
//     for (let value of B) {
//         if (value < 0) {
//             value = 100 - Math.abs(value);
//         }
//         newArray.push(value);
//     }



//     return newArray;
// }



   function CombineArray(x,y){
    let z = [];
    for (var i =0;i<x.length;i++){
        if (x[i] <0){
            z.push(100 + x[i]);
        } else{
            z.push(x[i]);
        }
    }

    for (var i =0;i<y.length;i++){
         if (y[i] <0){
            z.push(100 + y[i]);
        } else{
            z.push(y[i]);
        }
    }
    return z;
}


console.log(CombineArray(A, B));
