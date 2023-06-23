export const validateMessage = (message) => {
    if(message.trim() === '') {
      return false;
    }
    return true;
  }

  // more utility helper function go here