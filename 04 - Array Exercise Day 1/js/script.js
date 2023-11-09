import { INVENTORS_DATA } from "./data/inventors.js";
import { PEOPLE_DATA } from "./data/people.js";
import { TEST_DATA } from "./data/test.js";

// 1. Filter the list of inventors for those who were born in the 1500's
function bornFilter(data) {
  const bornFifteen = data.filter(inventor =>
    inventor.year >= 1500 && inventor.year < 1600
  );
  console.log(bornFifteen.length > 0 ? bornFifteen : 'No inventors born in the 1500s.');
}

// 2. Give us an array of the inventor first and last names
function giveFullName(data) {
  const fullNames = data.map(inventor =>
    `${inventor.first} ${inventor.last}`
  );
  console.log(fullNames);
}

// 3. Sort the inventors by birthdate, oldest to youngest
function orderByBirthdate(data) {
  const ordered = data.sort((prevIndex, nextIndex) =>
    (prevIndex.year > nextIndex.year ? 1 : -1)
  );
  console.log(ordered);
}

// 4. How many years did all the inventors live?
function calculateTotalAge(data) {
  const totalYears = data.reduce((total, inventor) =>
    total + (inventor.passed - inventor.year), 0
  );
  console.log(totalYears);
}

// 5. Sort the inventors by years lived
function orderByYearsLived(data) {
  const oldest = data.sort((prevIndex, nextIndex) =>
    (prevIndex.passed - prevIndex.year > nextIndex.passed - nextIndex.year ? -1 : 1)
  );
  console.log(oldest);
  // Calculate and display the ages of the inventors in the sorted array
  console.log('Ages of inventors sorted by years lived:');
  oldest.forEach(inventor => {
    const age = inventor.passed - inventor.year;
    console.log(`${inventor.first} ${inventor.last}: ${age} years`);
  });
}

// 6. Sort the people alphabetically by last name
function sortAlphabeticallyByLastname(data) {
  const alpha = data.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
  });
  console.log('People sorted alphabetically :', alpha);
}

// 7. Sum up the instances of each of these
function sumInstance(data) {
  const reducerCallback = (obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  };
  const initialValue = {};
  const result = data.reduce(reducerCallback, initialValue);
  console.log('Result calculated : ', result);
}

function runExercises() {
  bornFilter(INVENTORS_DATA);
  giveFullName(INVENTORS_DATA);
  orderByBirthdate(INVENTORS_DATA);
  calculateTotalAge(INVENTORS_DATA);
  orderByYearsLived(INVENTORS_DATA);
  sortAlphabeticallyByLastname(PEOPLE_DATA);
  sumInstance(TEST_DATA);
}

runExercises();
