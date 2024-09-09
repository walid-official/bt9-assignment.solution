// Problem-1
//*************/


// function calculateMoney(income){
//     if(income <= 0){
//         return  "Invalid Number";
//     }
//     // Ticket income
//     let ticketCost = 120 * income;
//     // expend amount
//     let janitorCost = 500;
//     let stuffCost = 8 * 50;
//     let expendAmount = janitorCost + stuffCost;
//     // rest of income;
//     let restIncome = ticketCost - expendAmount;
//     return restIncome;
// }  
// let earn = calculateMoney(-1);
// console.log(earn);



// Problem-2
//*************/

// function checkName (name,check){
//     if(typeof name !== "string"){
//         return "Inter The String";
//     }
//     let lastCharacter = name[name.length-1].toLowerCase();
//     let checkValue = false;
//     for(let character of check){
//         if(character === lastCharacter){
//             checkValue = true;
//         }
//     }
//     // return checkValue ? "Good Name" : "badName";
//     // if(checkValue){
//     //     return "Good Name";
//     // }
//     // return "Bad Name"
// }
// let special = ["a","y","i","e","o","u","w"];
// let  inputName = "299";
// let splitName = inputName.split("");
// let nameCheck = checkName(splitName,special);
// console.log(nameCheck);



// function checkName (name){
//     if(typeof name !== "string"){
//         return "Inter The String";
//     }
//     let lastCharacter = name[name.length-1].toLowerCase();
//     let special = ["a","y","i","e","o","u","w"];
//     let checkValue = false;
//     for(let character of special){
//         if(character === lastCharacter){
//             checkValue = true;
//         }
//     }
//     return checkValue ? "Good Name" : "Bad Name";
// }

// console.log(checkName("RAFEE"));



// function checkName (name){
//     if(typeof name !== "string"){
//         return "Inter The String";
//     }
//     let lastCharacter = name[name.length-1].toLowerCase();
//     let specialCharacter = ["a","y","i","e","o","u","w"];
//     let checkValue = specialCharacter.includes(lastCharacter);
//     return checkValue ? "Good Name" : "Bad Name";
// }

// console.log(checkName("RAFEE"));


// Problem-3
//*************/

// function mixed(numbers) {
//     let storeArray = [];
//    for(let choseNum of numbers){
//     if(typeof choseNum === "number" && isNaN(choseNum) === false){
//         storeArray.push(choseNum);
//     }
//    }
//    return storeArray;
// }

// let mixedArray = [NaN,[22,1,34,-5],undefined];
// console.log(mixed(mixedArray));


// Problem-4
//*************/

// function getPassword(password){
//     let text = "";
//     let passArray = [];
//     for(const pass in password){
//         passArray.push(password[pass]);
//     }
//     text += passArray[2].concat("#" + passArray[0] + "@",passArray[1]);
//     return text;
// }
// let google = {name: "waid", birthYear: 1999,siteName: "Google"};
// console.log(getPassword(google));
// let facebook = {name: "walid", birthYear: 1999,siteName: "Facebook"};
// console.log(getPassword(facebook));


// function getPassword(password){
//     let str = password.birthYear.toString().length;
//     if(str !== 4){
//         return "Invalid"
//     }
//    let values = Object.values(password);
//    for(let items of values){
//     if(items === ""){
//         return "Invalid"
//     }
//    }
//    let siteUpper = values[2];
//    return siteUpper.concat("#" + values[0] + "@",values[1]);
// }

// let google = {name: "walid",birthYear: 1999,siteName: "google"};
// console.log(getPassword(google));
// let facebook = {name: "jahid", birthYear: 200,siteName: "Facebook"};
// console.log(getPassword(facebook));


// Problem-5
//*************/


function monthlySavings(array,number){
    let sum = 0;
    for(const perPay of array){
        if(perPay >= 3000){
            let discount = perPay * 0.2
            sum += perPay - discount;
        }else{
            sum += perPay;
        }
    }
    let savings = sum - number;
    if(savings >= 0){
        return savings;
    }else{
        return "Earn More"
    }
}
let payment_living1 = monthlySavings([2000,2500,1000],5000);
let payment_living2 = monthlySavings([2000,2500,3500],5000);
let payment_living3 = monthlySavings([2000,3200,3500],10000);
console.log(payment_living1);
console.log(payment_living2);
console.log(payment_living3);