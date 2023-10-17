const accountId = 122334
let accountEmail = "hey@gmail.com"
var accountPassword = "123456"
accountCity = "Lahore"

let accountDistrict;
/* 
Prefer Not to use 'var'
because of issue on block scope and functional scope... old style 
*/
// const = can not be change

accountEmail = "yeah@hotmail.com"
accountPassword = "45dfgvx"
accountCity = "Karachi"

// to display multiple variables we use console.table([])
console.table([accountId, accountEmail, accountPassword, accountCity, accountDistrict])