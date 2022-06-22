
/* function getNumber (){
    let num = Math.floor((Math.random() * 1000) + 1);
    return num;
}

var number = getNumber();
//console.log(number);

 function getNumberDivison(num) {
    return new Promise((resolve, reject) => {
      if ( num % 5 == 0) {
        reject(num);
      } else {
        resolve(num);
      }
    })
  }
  
  getNumberDivison(number).then((val) => {
    console.log('success ' + val);
  },(val) => {
    console.log(err);
  })
 */



class PromiseSimple {
  constructor(executionFunction) {
    this.promiseChain = [];
    this.handleError = () => {};

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    executionFunction(this.onResolve, this.onReject);
  }

  then(handleSuccess) {
    this.promiseChain.push(handleSuccess);
   
    return this;
  }

  catch(handleError) {
    this.handleError = handleError;

    return this;
  }

  onResolve(value) {
    let storedValue = value;

    try {
      this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue);
      });
    } catch (error) {
      this.promiseChain = [];

      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

getNumber = () => {
  let num = Math.floor((Math.random() * 1000) + 1);
  console.log(num);
  return num;
  
};


const calling = () => {
  return new PromiseSimple((resolve, reject) => {
    setTimeout(() => {
    const number = getNumber();
    const error = 'err';
    if ( number % 5 == 0) {
      reject(error);
    } else {
      resolve(number);
    }
  }, 2000);
  });
};

calling()
  .then((value) => {
    console.log('not divisible by 5 = ' +value);
  })
  .catch((error) => {
    console.log(error);
  });



