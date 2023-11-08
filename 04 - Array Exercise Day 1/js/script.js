import {INVENTORS_DATA} from "./data/inventors.js";
import {PEOPLE_DATA} from "./data/people.js";

// 1. Filter the list of inventors for those who were born in the 1500's
function bornFilter() {
  try {
    if (INVENTORS_DATA && PEOPLE_DATA) {
      const bornFifteen = INVENTORS_DATA.filter(inventor => {
       return inventor.year >= 1500 && inventor.year < 1600
      });
      console.log(bornFifteen);
    } else {
      console.log('Files have not been loaded yet.');
    }
  } catch (error) {
    console.error('Error in bornFilter:', error);
  }
}

// 2. Give us an array of the inventor first and last names
function giveFullName() {
  try {
    const fullNames = INVENTORS_DATA.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames);
  } catch (error) {
    console.error('Error in giveFullName:', error);
  }
}

// 3. Sort the inventors by birthdate, oldest to youngest
function orderByBirthdate() {
  try {
    const ordered = INVENTORS_DATA.sort((prevIndex, nextIndex) => (prevIndex.year > nextIndex.year ? 1 : -1));
    console.log(ordered);
  } catch (error) {
    console.error('Error in orderByBirthdate:', error);
  }
}

// 4. How many years did all the inventors live?
function calculateTotalAge() {
  try {
    const totalYears = INVENTORS_DATA.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears);
  } catch (error) {
    console.error('Error in calculateTotalAge:', error);
  }
}

// 5. Sort the inventors by years lived
function orderByYearsLived() {
  try {
    const oldest = INVENTORS_DATA.sort(function (prevIndex, nextIndex) {
      const lastInventor = prevIndex.passed - prevIndex.year;
      const nextInventor = nextIndex.passed - nextIndex.year;
      return lastInventor > nextInventor ? -1 : 1;
    });
    console.log(oldest);

    // Calculate and display the ages of the inventors in the sorted array
    console.log('Ages of inventors sorted by years lived:');
    oldest.forEach(inventor => {
      const age = inventor.passed - inventor.year;
      console.log(`${inventor.first} ${inventor.last}: ${age} years`);
    });
  } catch (error) {
    console.error('Error in orderByYearsLived:', error);
  }
}

// 6. Sort the people alphabetically by last name
function sortAlphabeticallyByLastname() {
  try {
    const alpha = PEOPLE_DATA.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });
    console.log('People sorted alphabetically :', alpha);
  } catch (error) {
    console.error('Error in sortAlphabeticallyByLastname:', error);
  }
}

// 7. Sum up the instances of each of these
function sumInstance() {
  const TEST_DATA = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
  const reducerCallback = (obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }
  const initialValue = {}
  try {
    const transportation = TEST_DATA.reduce(reducerCallback, initialValue);
    console.log('Transportation calculated : ', transportation);
  } catch (error) {
    console.error('Error in sumInstance:', error);
  }
}


function runExercises() {
  bornFilter();
  giveFullName();
  orderByBirthdate();
  calculateTotalAge();
  orderByYearsLived();
  sortAlphabeticallyByLastname();
  sumInstance();
}

runExercises();
