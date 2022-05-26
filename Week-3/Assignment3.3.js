function createIncrement() {
    let count=0;
    function increment(){
        count++;
        console.log(count);
    }
    let message=`Count is ${count}`;
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



//Output - Count is 0
