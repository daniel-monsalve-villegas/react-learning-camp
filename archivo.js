const myNums = [1, 3];

let result;

function sum(myNums) {
  const nums = myNums.reduce((_, curr) => typeof curr === "number");
  if (myNums.length < 2) {
    result = "Debes ingresar más de un valor";
  } else if (nums === false) {
    result = "Los valores deben ser numéricos";
  } else {
    result = myNums.reduce((accu, curr) => {
      return accu + curr;
    }, 0);
  }
}

console.log(sum(myNums));
