let s = 122345;
s = String(s);
console.log(typeof s);
let rS = "";
for(let i=s.length-1;i>=0;i--){
    rS = rS + s[i];
}

console.log(rS);