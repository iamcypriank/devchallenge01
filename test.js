var filter = function(arr, fn) {
    let newArray = [];
    for(let key in arr){
        if(fn(arr[key],key)){
            newArray.push(arr[key]);
        }
    }

    return newArray;
};

console.log(filter([1,2,3],(n, i){ return i === 0; }))