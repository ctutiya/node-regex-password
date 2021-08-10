// Validate a password with the following format:
// At least 6 digits
// At least one lowercase
// At least one uppercase
// At least one special character from @ # $ % ^ & *

var password = 'Aa12j*'
var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*])[a-zA-Z0-9@#$%^&*]{6,}$/

// 
// /^
//   (?=.*[a-z])            // At least one lowercase
//   (?=.*[A-Z])            // At least one uppercase
//   (?=.*[@#$%^&*)         // At least one special character from @ # $ % ^ & *
//   [a-zA-Z0-9@#$%^&*]{6,} // At least 6 digits
// $/

var res = password.match(pattern)

if (res) console.log('Valid password')
else console.log('Not a valid password')