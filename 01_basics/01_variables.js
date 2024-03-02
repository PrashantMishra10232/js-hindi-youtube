const accountId = 144553
let accountEmail = "prashant@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2  //not allowed
accountEmail = "prashant102@gmail.com"
accountPassword = "1244555"
accountCity = "bengluru"

console.log(accountId);
 
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])