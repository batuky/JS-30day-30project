// Import JavaScript files
const inventorsScript = document.createElement('script');
inventorsScript.src = '/04 - Array Exercise Day 1/js/data/inventors.js';
document.body.appendChild(inventorsScript);

const peopleScript = document.createElement('script');
peopleScript.src = '/04 - Array Exercise Day 1/js/data/people.js';
document.body.appendChild(peopleScript);

// You can use event listeners to perform operations after the files are loaded
inventorsScript.onload = function () {
  peopleScript.onload = function () {
    // Call the main function
    runExercises();
  };
};


function runExercises() {
  // Call the functions you want to run here
  // checkInventorsData();
  // checkPeopleData();
  // bornFilter();
  // giveFullName();
  // orderByBirthdate();
  //calculateTotalAge();
  //orderByYearsLived();
  //sortAlphabeticallyByLastname();
  //sumInstance();
}

function checkInventorsData() {
  console.log(inventors[2]);
}

function checkPeopleData() {
  console.log(people[5]);
}

// 1. Filter the list of inventors for those who were born in the 1500's
function bornFilter() {
  try {
    if (inventors && people) {
      const bornFifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
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
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames);
  } catch (error) {
    console.error('Error in giveFullName:', error);
  }
}

// 3. Sort the inventors by birthdate, oldest to youngest
function orderByBirthdate() {
  try {
    const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
    console.log(ordered);
  } catch (error) {
    console.error('Error in orderByBirthdate:', error);
  }
}

// 4. How many years did all the inventors live?
function calculateTotalAge() {
  try {
    const totalYears = inventors.reduce((total, inventor) => {
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
    const oldest = inventors.sort(function (a, b) {
      const lastInventor = a.passed - a.year;
      const nextInventor = b.passed - b.year;
      return lastInventor > nextInventor ? -1 : 1;
    });

    console.log('Sorted by years lived:');
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
    const alpha = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);
  } catch (error) {
    console.error('Error in sortAlphabeticallyByLastname:', error);
  }
}

// 7. Sum up the instances of each of these
function sumInstance() {
  try {
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation = data.reduce(function (obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

    console.log(transportation);
  } catch (error) {
    console.error('Error in sumInstance:', error);
  }
}
