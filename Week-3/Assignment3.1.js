// memoize function that stores results of a funtion
function memoize(fn){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        console.log(key);
        console.log(cache);
        if(cache.has(key)){
            return console.log(cache.get(key));
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };
}

// function for number addtion that takes n number of argumnets
function addNumbers()
{
    var sum=0;
    for(var i=0; i< arguments.length; i++){
        sum = sum + arguments[i];
    }
    console.log(sum);
    return sum;
}


function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const addM = memoize(addNumbers);
time(addM.bind(4,5));
time(addM.bind(4,5));
time(addM.bind(4,5));
time(addM.bind(4,5));