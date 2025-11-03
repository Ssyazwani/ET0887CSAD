

function swap(a, b){
   
    if(b>a){
        return [b, a];
    }
    else {
        return [a, b];
    }
}

console.log(swap(67, 80));
console.log(swap(80, 67));
console.log(swap(-5, -6));
console.log(swap(-6, -5));