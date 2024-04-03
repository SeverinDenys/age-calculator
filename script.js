const getAge = () => {
  let date = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);

  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-based
  let currentYear = currentDate.getFullYear();
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // setting age calculator logic

  //  If the birthday is later in the month than today:
  // Imagine today is the 15th of the month, but the birthday is on the 20th.
  // We're saying, "Oh, the birthday hasn't happened yet this month."
  // So, we add the number of days in the previous month to today's date. This helps us get the correct number of days until the birthday.
  // Then, we pretend it's the month before, so we subtract 1 from the current month.
  if (date > currentDate) {
    currentDate = currentDate + monthDays[currentMonth - 1];
  }
  // If the birthday month is later in the year than today:
  // Imagine today is in March, but the birthday is in April.
  // We're saying, "Oops, we're not in April yet, so let's adjust."
  // We bump up the current month by 12, effectively moving to the next year.
  // And we decrease the current year by 1, so we're in the correct year.
  if (month > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  // Calculate the difference in milliseconds between currentDate and the input date
  let differenceInMilliseconds =
    currentDate.getTime() - new Date(year, month - 1, date).getTime();

  // Convert milliseconds to days
  let dayResult = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  let monthResult = currentMonth - month;
  let yearResult = currentYear - year;

  // displaying result in DOOM
  document.querySelector(".numResultInDays").innerHTML = dayResult.toString();
  document.querySelector(".numResultInMonth").innerHTML =
    monthResult.toString();
  document.querySelector(".numResultInYear").innerHTML = yearResult.toString();
};
