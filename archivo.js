function sum(myNums) {
  result = myNums.reduce((accu, curr) => {
    return accu + curr;
  }, 0);
  return result;
}

function subs(myNums) {
  result = myNums.reduce((acc, curr) => acc - curr);
  return result;
}

function mult(myNums) {
  result = myNums.reduce((acc, curr) => acc * curr);
  return result;
}

function divide(myNums) {
  let result = 1;
  try {
    myNums.map((nums) => {
      if (typeof nums !== "number") {
        throw new Error("Debes ingresar un número");
      }
      if (nums === 0) {
        throw new Error("No se puede dividir por cero");
      }
      result = nums / result;
    });
  } catch (error) {
    console.error("Error: ", error.message);
  } finally {
    return result;
  }
}

function squaRoot(myNums) {
  return Math.sqrt(myNums);
}

function expon(myNums) {
  return myNums[0] ** myNums[1];
}

console.log(sum([1, 2, 3]));
console.log(subs([3, 2]));
console.log(mult([4, 2, 7]));
console.log(divide([3, 0]));
console.log(squaRoot(3));
console.log(expon([4, 2]));
