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
    let value = Number(numInput.value);

    if (numInput.value === "") {
        alert("Please enter a number.");
        return;
    }

    new Promise(function (resolve, reject) {
        setTimeout(() => {
            output.innerText = "Result: " + value;
            resolve(value);
        }, 2000);
    })
    .then(function (res) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let result = res * 2;
                output.innerText = "Result: " + result;
                resolve(result);
            }, 1000);
        });
    })
    .then(function (res) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let result = res - 3;
                output.innerText = "Result: " + result;
                resolve(result);
            }, 1000);
        });
    })
    .then(function (res) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let result = res / 2;
                output.innerText = "Result: " + result;
                resolve(result);
            }, 1000);
        });
    })
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
