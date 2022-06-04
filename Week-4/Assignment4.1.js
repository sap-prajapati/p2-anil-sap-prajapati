
function getNumber (){
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




