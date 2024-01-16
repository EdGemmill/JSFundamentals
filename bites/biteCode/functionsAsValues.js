// const simpleCalculation = doubleNumber
// console.log(simpleCalculation)

// const lowerCaseMessage = (message) => {
//     return message.toLowerCase();
// }
  
//   // This function accepts as arguments a string message, and a function.
//   // It then calls the given function to do its job.
//   const transform = (message, transformFunction) => {
//     return transformFunction(message);
//   }
  
//   transform('WHY ARE YOU SHOUTING?', lowerCaseMessage);


function notifyByEmail(email) {
    return `Email sent to ${email}`
}

function notifyByText(text) {
    return `Text sent to ${text}`
}

function notify (contact, method) {
    return method(contact)
}

module.exports = {notifyByEmail, notifyByText, notify}