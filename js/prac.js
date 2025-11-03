const fs = require("fs");

const data = fs.readFileSync("data.csv", "utf-8"); 
const lines = data.split("\n"); 

const column1 = lines[0].split(","); 
for (const column of column1) { 
console.log(column); 
} 

for(let i = 1; i < 4; i++){ 
console.log(lines[i].replace(/,/g, "\n"));  }


for(let i = 0; i < lines.length; i++){ 
console.log(lines[1]); }

const line1 = lines[1].split(",");
const line2 = lines[2].split(",");
const line3 = lines[3].split(",");

const Obj1={
    Rank : line1[0],
    Movie : line1[2],
    Release : line1[3],
    Gross: line1[4],
}

const Obj2={
    Rank : line2[0],
    Movie : line2[2],
    Release : line2[3],
    Gross: line2[4],
}

const Obj3={
    Rank : line3[0],
    Movie : line3[2],
    Release : line3[3],
    Gross: line3[4],
}

console.log(Obj1);
console.log(Obj2);
console.log(Obj3);


 
 


