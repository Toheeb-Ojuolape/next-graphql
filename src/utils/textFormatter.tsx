export const textFormatter = (string: string | string[]):string | string[] => {
  if (string.length > 30) {
    return string.slice(0, 20) + "...";
  } else {
    return string;
  }
};

export const numberFormatter = (number: number | string):string => {
  if (typeof number === "string") {
    return parseFloat(number).toLocaleString("en");
  } else {
    return number.toLocaleString("en");
  }
};


export const publicKeyTest = (pubkey:string) =>{
  const regex = /\b[0-9a-f]{66}\b/  ;
  if(regex.test(pubkey)){
    return true
  } else{
    return false
  }
}
