/**
* Name: Anill Louis Maraj
* Project: Anill Maraj GitHub Page
* License: Apache License
* License Version: 2.0, January 2004
* License URL: http://www.apache.org/licenses/
*/

// CURRENT AGE CALCULATOR
  // The date you were born
  var birthDate = new Date(1988, 8, 24, 0, 0, 0, 0);
  // The current date
  var currentDate = new Date();
  // The age in years
  var age = currentDate.getFullYear() - birthDate.getFullYear();
  // Compare the months
  var month = currentDate.getMonth() - birthDate.getMonth();
  // Compare the days
  var day = currentDate.getDate() - birthDate.getDate();
  // If the date has already happened this year
  if ( month < 0 || month == 0 && day < 0 )
  {
      age--;
  }
  document.getElementById("age").innerHTML = age;

// CURRENT YEAR CALCULATOR
  const cur_year = new Date();
  let year = cur_year.getFullYear();
  document.getElementById("year").innerHTML = year;