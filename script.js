// //your JS code here. If required.
// let num = document.getElementById("ip");
// let button = document.getElementById("btn");

// button.addEventListener("onclick", function() {
    
// 	let promise = new promise(function (resolve,reject){
// 		setTimeout(() => {
// 			if (num.value != ""){
// 			resolve()
// 			}
// 		})
// })



let numInput = document.getElementById("ip");
let button = document.getElementById("btn");
let output = document.getElementById("output");

button.addEventListener("click", function () {
    let value = Number(numInput.value); // Get input value as a number

    if (numInput.value === "") {
        alert("Please enter a number.");
        return;
    }
});


 // First Promise: Display initial number after 2 seconds
    new Promise(function (resolve, reject) {
        setTimeout(() => {
            output.innerText = "Result: " + value;
            resolve(value);
        }, 2000);
    })
    // Second Promise: Multiply by 2 after 2 seconds
    .then(function (res) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let result = res * 2;
                output.innerText = "Result: " + result;
                resolve(result);
            }, 2000);
        });
    })
    // Third Promise: Subtract 3 after 1 second
    .then(function (res) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let result = res - 3;
                output.innerText = "Result: " + result;
                resolve(result);
            }, 1000);
        });
    })
    // Fourth Promise: Divide by 2 after 1 second
    .then(function (res) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let result = res / 2;
                output.innerText = "Result: " + result;
                resolve(result);
            }, 1000);
        });
    })
    // Fifth Promise: Add 10 after 1 second
    .then(function (res) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let finalResult = res + 10;
                output.innerText = "Final Result: " + finalResult;
                resolve(finalResult);
            }, 1000);
        });
    });
});
