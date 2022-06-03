function createIncrement() {
    let count=0;
    var message;
    function increment(){
        count++;
        console.log(count);
         message=`Count is ${count}`;
    }
    
    function log(){
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] =createIncrement(); // count is 0 and message is count is 0
increment(); //incremented count to 1
increment(); //incremented count to 2
increment(); //incremented count to 3
log();// What is logged?  - Count is 0 because this message string is created only once when createIncrement funtion is called.
//now message variable is in module scope so it will change everytime whenever increment funtion is called , that is why output is count is 3.


//Output - Count is 0
