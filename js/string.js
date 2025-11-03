let text =  `Peter Piper picked a peck of pickled peppers
A peck of pickled peppers Peter Piper
picked.  If Peter Piper picked a peck of pickled peppers, where’s the peck of pickled 
peppers Peter Piper picked?`;

let key =  `Piper`;

let count = 0;

let position = text.indexOf(key);

while (position !== -1){
    count ++;
    position = text.indexOf(key,position +key.length);
}

console.log(key + "appeared" + count);
