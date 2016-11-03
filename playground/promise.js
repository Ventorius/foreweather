
var asyncAdd = (a, b) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }else{
            reject('Arguments must be numbers');
        }
    },2500);
  });
};

// var somePromise = new Promise((resolve, reject) => {
//
//     setTimeout(() => {
//         resolve('Hey it worked');
//         reject('Unable to fulfill promise');
//     }, 2500);
// });
//
//
// somePromise.then((message) => {
//     console.log('Success', message);
// }, (errorMessage) => {
//     console.log('Error:', errorMessage);
// });

asyncAdd(2,'asd').then((res) => {
    console.log('Result: ', res);
},(errorMessage) => {
    console.log(errorMessage);
});