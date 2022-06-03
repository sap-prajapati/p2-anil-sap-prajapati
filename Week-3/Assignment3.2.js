//Bind Function - Bind returns a new funtion and allow us to pass in a this array and any number of argumnets.

var school = {
    x : 'Saloni',
    y : 5,
    z : true,
    getdetails : function(){
        var i = 'Name is '+ this.x + ', Number '  + this.y  +  ', boolean '  + this.z;
        return i;
    }
}


var fn1 = {
    x: 'Prajapati',
    y: 6,
    z : false
}

var bindreturn = school.getdetails.bind(fn1); //Binding fn1 object with getDeatils function
console.log(bindreturn());

var bindreturn = school.getdetails.bind(school); //Binding school object with getDeatils function
console.log(bindreturn());

var bindreturn1 = school.getdetails.bind({ x :'abc', y: 7, z : true});  //one another way of binding obj
console.log(bindreturn1());


function getx(a, b){
    var sum = a + b;
    return sum;
}

const addtion = getx.bind(null,5); // Bind one argument
console.log(addtion(9));





//Call Function - Call invokes the function and allows us to pass in arguments one by one.

console.log(school.getdetails.call(school)); //call getDeatils funtion using school object
console.log(school.getdetails.call(fn1)); //call getDeatils funtion using fn1 object


//Apply Function - Apply invokes the function and allows us to pass in arguments as an array

var arr = [5, 4, 3, 2, 1];

function add(...args){
    var sum=0;
    for(var i=0; i< arguments.length; i++){
        sum = sum + arguments[i];
    }
    console.log(sum);
    return sum;
}

add.apply(null, arr); //involking add funtion and passing array as an argument


