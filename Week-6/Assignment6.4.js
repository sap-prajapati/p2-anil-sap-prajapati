function stock(arr , n){
    let profit =0;
    //find the minimum value of the array 
    let min = arr[0];
    let minindex;
    for (i=1; i<n; i++){
        if(min > arr[i]){
            min = arr[i];
            minindex = i;
        }
    }
    //find the max value of the array 
    let max = arr[minindex];
    let maxindex;
    for (i= minindex;i<n; i++){
        if(max < arr[i]){
            max = arr[i];
            maxindex = i;
        }
    }


    if(minindex < maxindex)
    {
        profit = max-min;
        return profit;
    }

return profit;


}


let price = [7,2,5,3,6,9,6];
let n = price.length;

console.log(stock(price, n));