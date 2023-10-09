export const truncateString = (str,num ) => {
    if (str === undefined) {
      return '';
    }
  
    if (Array.isArray(str)) {
      return str.join('').length > num
        ? str.join('').slice(0, num) + '...'
        : str.join('');
    }
  
    return str.length > num ? str.slice(0, num) + '...' : str;
  };