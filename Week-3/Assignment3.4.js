
function createStack() 
{
    let items = [];  // now items array has block scope, earliar it was in module scope.
    return {    
        push(item) 
        {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}
const stack=createStack(); //stack is a reference to the instance of the function push and pop that is created when stack is run. 
stack.push(10);
stack.push(5);
stack.pop();


console.log(stack.items);


