// Punto 1
const nombre = "Daniel Monsalve Villegas";
let edad = 30;

console.log(nombre, edad);

// Punto 2
const temStri = `Hola, me llamo ${nombre} y tengo ${edad} años`;

console.log(temStri);

// Punto 3
const addTwo = (a, b) => {
  console.log(a + b);
};

addTwo(2, 3);

let nums = [3, 2, 6];

const multTwo = (nums) => {
  let multNum = nums.map((num) => num * 2);
  return multNum;
};

const newNums = multTwo(nums);

console.log(newNums);

const evenFunc = (nums) => {
  let evenNum = nums.filter((num) => num % 2 === 0);
  console.log(evenNum);
};

evenFunc(newNums);

const sprNum = [...nums, ...newNums];
console.log(sprNum);

const movie = { title: "I'm no angel", genre: "Comedy", year: "1933" };

const { title } = movie;
const { genre } = movie;
const { year } = movie;
console.log(title, genre, year);

const showMovie = (movie) => {
  const { title } = movie;
  const { genre } = movie;
  const { year } = movie;
  console.log(
    `La película se llama ${title}, se produjo en ${year} y es de ${genre}`,
  );
};

showMovie(movie);

const showError = (num) => {
  try {
    if (num < 0) {
      throw new Error("El número no puede ser negativo");
    }
    console.log(num);
  } catch (error) {
    console.error(error.message);
  }
};

showError(-2);
