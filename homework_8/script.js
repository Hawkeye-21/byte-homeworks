const arr = [true, false, false, true, false];
const countTrue = (arr) => {
    let count = 0;
    for (let el of arr) {
        console.log(el);
        if (el === true) {
            count++;
            console.log(count);
        }
    }
    return count;
}

let masive1 = countTrue(arr);
let masive2 = countTrue([false, false, false, false]);
let masive3 = countTrue([]);

console.log(masive1);//2
//console.log(masive2);//0
//console.log(masive3);//0