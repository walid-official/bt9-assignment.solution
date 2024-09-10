// calculation of salary
// checking something
// delete something from an array
// concat of object values;
// savings of money;

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
//     let upper = password.siteName[0].toUpperCase() + password.siteName.slice(1);
//     if(str !== 4){
//         return "Invalid"
//     }
//    let values = Object.values(password);
//    for(let items of values){
//     if(items === ""){
//         return "Invalid"
//     }
//    }
//    return upper.concat("#" + values[0] + "@",values[1]);
// }

// let google = {name: "walid",birthYear: 1999,siteName: "google"};
// console.log(getPassword(google));
// let facebook = {name: "jahid", birthYear: 200,siteName: "facebook"};
// console.log(getPassword(facebook));


// Problem-5
//*************/


// function monthlySavings(array,number){
//     let sum = 0;
//     for(const perPay of array){
//         if(perPay >= 3000){
//             let discount = perPay * 0.2
//             sum += perPay - discount;
//         }else{
//             sum += perPay;
//         }
//     }
//     let savings = sum - number;
//     if(savings >= 0){
//         return savings;
//     }else{
//         return "Earn More"
//     }
// }
// let payment_living1 = monthlySavings([2000,2500,1000],5000);
// let payment_living2 = monthlySavings([2000,2500,3500],5000);
// let payment_living3 = monthlySavings([2000,3200,3500],10000);
// console.log(payment_living1);
// console.log(payment_living2);
// console.log(payment_living3);


// Problem-6
//*************/


// printing The age of adults up of 17 as a array from object array;

// const people = [
//     { name: 'John', age: 17 },
//     { name: 'Jane', age: 22 },
//     { name: 'Mike', age: 15 },
//     { name: 'Emma', age: 19 },
//   ];
  
//   function filterAdults(people){
//     let number = [];
//     let number2 = [];
//     for(const fill of people){
//         let values = Object.values(fill);
//         for(let age of values){
//             if(typeof age === "number"){
//                 number.push(age)
//             }
//         }
//     }
//     for(const num of number){
//         if(num > 17){
//             number2.push(num);
//         }
//     }
//     return number2;
//   }

// console.log(filterAdults(people));


// Problem-7
//*************/

// const people = [
//     { name: 'John', age: 17 },
//     { name: 'Jane', age: 22 },
//     { name: 'Mike', age: 15 },
//     { name: 'Emma', age: 19 },
//   ];

//   function filterAdults(people){
//     let array = [];
//     for(let fill of people){
//          fill.age > 17 ? array.push(fill) : null;
//         // if(fill.age > 17){
//         //     array.push(fill)
//         // }
//     }
//     return array;
//   }
//   console.log(filterAdults(people));



// Problem-8
//*************/
// bus = 50;
// micro = 15;
// ricksha cost 20 tk;
// problem holo joto jon ricksha te jabe totojoner ricksha cost koto hobe;

// function bus(busNum){
//   let busQuantity = 50 * busNum;
//   return busQuantity;
// }
// function micro(microNum){
//   let microQuantity = 15 * microNum;
//   return microQuantity;
// }
// function existResult(mainCalc){
//   let rickshaCost = 20;
//   let busStore = bus(4);
//   let microStore = micro(2);
//   let total = busStore + microStore;
//   let result = mainCalc - total;
//   let rickshaCostResult = rickshaCost * result;
//   return rickshaCostResult;
// }
// console.log(existResult(234));



// Additional 5 Problems
//***************** */

// spending Time of solving This problem is 3 minutes 47 seconds 

// const phones = [
//   { model: "PhoneA", brand: "Iphone", price: 95000 },
//   { model: "PhoneB", brand: "Samsung", price: 40000 },
//   { model: "PhoneC", brand: "Oppo", price: 26000 },
//   { model: "PhoneD", brand: "Nokia", price: 35000 },
//   { model: "PhoneE", brand: "Iphone", price: 105000 },
//   { model: "PhoneF", brand: "HTC", price: 48000 }
// ];


// function expensive(phone){
//   const phoneArray = [];
//   for(let prices of phone){
//    if(prices.price > 50000){
//     phoneArray.push(prices);
//    }
//   }
//   return phoneArray;
// }
// console.log(expensive(phones))


// const students = [
//   { name: "Alice", age: 19, marks: 90 },
//   { name: "Bob", age: 18, marks: 75 },
//   { name: "Charlie", age: 20, marks: 88 },
//   { name: "David", age: 21, marks: 82 },
//   { name: "Eva", age: 22, marks: 89 }
// ];

// function score(student){
//   let scoreName = [];
//   for(let number of student){
//     if(number.marks >= 85){
//       scoreName.push(number.name);
//     }
//   }
//   return scoreName;
// }
// console.log(score(students));


// Advance problem:-
//****************************************************************

const products = [
  { name: "Laptop", category: "Electronics", price: 60000, stock: 10 },
  { name: "Smartphone", category: "Electronics", price: 30000, stock: 25 },
  { name: "Shirt", category: "Clothing", price: 2000, stock: 50 },
  { name: "Jeans", category: "Clothing", price: 3000, stock: 30 },
  { name: "Fridge", category: "Appliances", price: 45000, stock: 5 },
  { name: "Microwave", category: "Appliances", price: 15000, stock: 8 },
  { name: "Blender", category: "Appliances", price: 5000, stock: 15 }
];

function productList(productItem){
  const categoryObject = {}
  let sum = 0;
  const electronicsyArray = [];
  const clothingArray = [];
  const appliancesArray = [];
  categoryObject["'Electronics'"] = electronicsyArray;
  categoryObject["'Clothing'"] = clothingArray;
  categoryObject["'Appliances'"] = appliancesArray;
  // // Electronics
    for(const items of productItem){
      if(items.category === "Electronics"){
            electronicsyArray.push(items)
      }
      if(items.category === "Clothing"){
        clothingArray.push(items);
      }
      if(items.category === "Appliances"){
        appliancesArray.push(items);
      }
    }
      for(let jog of electronicsyArray){
       let plusItem = jog.price * jog.stock;
       sum += plusItem;
      }
      electronicsyArray.push(sum);
      for(let cloth of clothingArray){
        let clothItem = cloth.price * cloth.stock;
        sum += clothItem;
      }
      clothingArray.push(sum);
      for(let appear of appliancesArray){
        let appearItem = appear.price * appear.stock;
        sum += appearItem;
      }
      appliancesArray.push(sum);
return categoryObject;
}
let stock = (productList(products));
console.log(stock)