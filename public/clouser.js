// function myCounter() {
//     let counter = 0;
//     return function() {
//       counter++;
//       return counter;
//     };
//   }
  
//   const add = myCounter();
  
//   function myFunction(){
//     document.getElementById("demo").innerHTML = add();
//   }

// console.log("Start");

// setTimeout(() => {
//     console.log("setTimeout Callback");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise Resolved");
// });

// console.log("End");




// setTimeout(() => {
//     console.log("Step 1");
//     setTimeout(() => {
//         console.log("Step 2");
//         setTimeout(() => {
//             console.log("Step 3");
//         }, 1000);
//     }, 1000);
// }, 1000);


// function myDisplayer(some) {
//     console.log(some)
// }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // some code (try to change x to 5)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
  // );
 

//   const getData = async () => {
//     let data = "Hello World";
//     // return data;
// }

// getData().then(data => console.log(data));


const getData = async () => {
  let y = await "Hello World";
  console.log(y);
}

console.log(1);
getData();
console.log(2);