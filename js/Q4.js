scores = [67, 80, 56, 95, 80, 75, 75, 92, 91, 77];

function swap(a, b){
    if(b>a){
        return [b, a];
    }
    else {
        return [a, b];
    }
}

for(let i =0; i<10;i++){
    for(let j=0; j<9 ; j++){
        let a = scores[j];
        let b = scores[j + 1];
        let x;
        let y;
        [x, y] = swap(a, b);
        scores[j] = x; 
		scores[j + 1] = y; 
    }
}

console.log(scores);