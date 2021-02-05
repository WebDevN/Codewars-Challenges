// 6 kyu
// Stringing me along

function createMessage(str) {
    let message = '';
    if (arguments.length === 0) {
      return message.slice(0, message.length - 1);
    } else {
      message += `${str} `;
      let createMessage = function (str) {
        if (arguments.length === 0) {
          return message.slice(0, message.length - 1);
        } else {
          message += `${str} `;
          return createMessage;
        }
      }
      return createMessage;
    }
  }