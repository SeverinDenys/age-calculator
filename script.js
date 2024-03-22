/////////////////// option 1 //////////////////////

// const currentDate = new Date().toLocaleDateString();
// console.log(currentDate);

/////////////////// option 2 ////////////////////////////////

const calculateAge = () => {
  //setting user values.
  // //////////////////// Problem encountered with the value ///////////////////
  // let userDay = document.getElementById("dayNumber").value;
  // let userMonth = document.getElementById("monthNumber").value;
  // let userYear = document.getElementById("yearNumber").value;

  let userDay = Number(prompt("Please - enter the day"));
  let userMonth = Number(prompt("Please - enter the Month"));
  let userYear = Number(prompt("Please - enter the year"));

  // setting current Date
  const currentDate = new Date();
  let currentDay = currentDate.getDate(); // days in month
  let currentMonth = currentDate.getMonth() + 1; // because it starts from index 0 January
  let currentYear = currentDate.getFullYear();

  // setting age results
  let ageInYears = currentYear - userYear;
  let ageInMonths = currentMonth - userMonth;
  let ageInDays = currentDay - userDay;

  27
  // Display result
  document.getElementById(
    "result"
  ).innerText = `Your age is: ${ageInYears} years, ${ageInMonths} months and ${ageInDays} days`;
};

calculateAge();
