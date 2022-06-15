function differ(arr,n){
    let arr2 =[];

    for (j=0;j<n;j++){

    
    for(i=j;i<n-1;i++){
        d= arr[j]-arr[i+1];
        arr2.push(d);
    }

    for(i=j; i>0 ;i--){
        d = arr[j] - arr[i-1];
        arr2.push(d);
    }


}

return arr2; // stored pair difference in aar2 array 

}


let arr = [5, 10, 3, 2, 50, 80];
let n = arr.length;

let b=78;

result = differ(arr,n);




// check if B exist in pair difference array or not
for (i = 0 ; i< result.length ; i++)   
{
   if (result[i] == b){
    break;
    }
}

if (i == result.length){
    console.log(false);
} else{
    console.log(true);
}