function solution(arr, x)
{
 
    // Sort the array
    arr.sort((a, b) => a - b);
 
    // To store the closest sum
   // not using INT_MAX to avoid
   // overflowing condition
    let closestSum = 1000000000;
 
    // Fix the smallest number among
    // the three integers
    for (let i = 0; i < arr.length - 2; i++)
    {
 
        let ptr1 = i + 1, ptr2 = arr.length - 1;
 
       
        while (ptr1 < ptr2) {
 
            // Calculate the sum of the current triplet
            let sum = arr[i] + arr[ptr1] + arr[ptr2];
 
            
            if (Math.abs(1*x - sum) < Math.abs(1*x - closestSum))
            {
                closestSum = sum;
            }
 
            
            if (sum > x) {
                ptr2--;
            }
 
           
            else {
                ptr1++;
            }
        }
    }
 

    return closestSum;
}
 
// Driver code
    let arr = [ -1, 2, 1, -4 ];
    let x = 1;
  console.log(solution(arr, x));