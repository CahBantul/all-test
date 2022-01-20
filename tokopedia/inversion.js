function maxInversions(arr) {
    // Write your code here
    let count = 0;
    
    for(let i=0; i<arr.length-2; i++) {
        for(let j=i+1; j<arr.length-1; j++) {
            if (arr[i]>arr[j]) {
                for (let k=j+1; k<arr.length; k++){
                    if (arr[j]> arr[k]) {
                        count++;
                    }
                }
            }
        }
    }
    return count;

}

console.log(maxInversions([5,3,4,2,1]));
