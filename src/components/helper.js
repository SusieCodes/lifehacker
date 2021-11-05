// converts date object or numeric timestamp to a string that displays in format "Sun Jul 22 2018"
export const formatDate = (obj) => {
  const date = new Date(obj);
  let formattedDate = date.toDateString();
  //next line checks to see if the first digit of day is 0
  const checkZero = formattedDate.charAt(8);
  // console.log("charAt inside formatDate returns", formattedDate.charAt(8));
  if (checkZero === "0") {
    // this part takes off the leading 0
    formattedDate = formattedDate.slice(0, 8) + formattedDate.slice(7);
  }
  return formattedDate;
};

// converts date string (e.g. 01-01-2021) Output is Sun Jan 5, 2021
export const formatStringDate = (dateStr) => {
  const newDateStr = new Date(dateStr + "T12:00:00");
  let formattedDate = newDateStr.toDateString();
  // this next part adds comma after day of the month
  // formattedDate = formattedDate.slice(0, 10) + ", " + formattedDate.slice(10);
  // this next part adds a space after day of the month
  // formattedDate = formattedDate.slice(0, 10) + "  " + formattedDate.slice(10);
  //next line checks to see if the first digit of day is 0
  const checkZero = formattedDate.charAt(8);
  if (checkZero === "0") {
    // this part takes off the leading 0
    formattedDate = formattedDate.slice(0, 8) + formattedDate.slice(9);
  }
  return formattedDate;
};

// converts date string (e.g. 2021-01-05) Output is Jan 5
export const formatJustMonthDay = (dateStr) => {
  const newDateStr = new Date(dateStr + "T12:00:00");
  let formattedDate = newDateStr.toDateString();
  let formattedDateNoDay = formattedDate.slice(3);
  let onlyMonthDay = formattedDateNoDay.slice(0, 7);
  const checkZero = onlyMonthDay.charAt(5);
  // console.log(
  //   "charAt  inside formatJustMonthDay returns ",
  //   onlyMonthDay.charAt(5)
  // );
  if (checkZero === "0") {
    // this part takes off the leading 0
    onlyMonthDay = onlyMonthDay.slice(0, 5) + onlyMonthDay.slice(6);
  }
  return onlyMonthDay;
};

// used when input is string (e.g. 2021-01-05) Output is Jan 5, 2021
export const formatDateNoWeekday = (dateStr) => {
  const newDateStr = new Date(dateStr + "T12:00:00");
  let formattedDate = newDateStr.toDateString();
  let formattedDateNoDay = formattedDate.slice(3);
  // this next part adds comma after day of the month
  formattedDateNoDay =
    formattedDateNoDay.slice(0, 7) + "," + formattedDateNoDay.slice(7);
  const checkZero = formattedDateNoDay.charAt(5);
  if (checkZero === "0") {
    // this part takes off the leading 0
    formattedDateNoDay =
      formattedDateNoDay.slice(0, 5) + formattedDateNoDay.slice(6);
  }
  return formattedDateNoDay;
};

// used when input is integer string (e.g. 1609826400000) Output is Jan 5, 2021
export const formatDateFromIntStr = (milliseconds) => {
  const newDateStr = new Date(milliseconds + 43200000);
  let formattedDate = newDateStr.toDateString();
  let formattedDateNoDay = formattedDate.slice(3);
  // this next part adds comma after day of the month
  // formattedDateNoDay =
  // formattedDateNoDay.slice(0, 7) + "," + formattedDateNoDay.slice(7);
  const checkZero = formattedDateNoDay.charAt(5);
  if (checkZero === "0") {
    // this part takes off the leading 0
    formattedDateNoDay =
      formattedDateNoDay.slice(0, 5) + formattedDateNoDay.slice(6);
  }
  return formattedDateNoDay;
};

// converts 24 hr time to 12 hr (e.g. input 18:00, output is 6:00 PM)
export const formatTime = (time) => {
  let time_part_array = time.split(":");
  let ampm = "AM";
  if (time_part_array[0] >= 12) {
    ampm = "PM";
  }
  if (time_part_array[0] <= 9) {
    // this part takes off the leading 0
    time_part_array[0] = time_part_array[0].toString();
    time_part_array[0] = time_part_array[0].slice(1);
  }
  if (time_part_array[0] > 12) {
    time_part_array[0] = time_part_array[0] - 12;
  }
  const formatted_time =
    time_part_array[0] + ":" + time_part_array[1] + " " + ampm;
  return formatted_time;
};

// this converts YYYY-MM-DD into MM/DD/YYYY
export const changeDateFormat = (date) => {
  let array = (date || "").toString().split(/-/g);
  array.push(array.shift());
  return array.join("/") || null;
};

// converts date string (e.g. 2021-01-05) Output is 0105 so it's easy to sort by month/day only
export const justMonthDayForSort = (dateStr) => {
  let splitDate = dateStr.split("-");
  let slicedDate = splitDate.slice(1);
  let joinedDate = slicedDate.join("");
  return joinedDate;
};

// used when input is milliseconds (e.g. 1609826400000) Output format is 0105 for Jan 5th (any year)
export const formatMilliForSort = (milliseconds) => {
  const newDate = new Date(milliseconds);
  const isoDate = newDate.toISOString();
  let splitDate = isoDate.split("-");
  let slicedDate = splitDate.slice(1);
  let joinedDate = slicedDate.join("");
  return joinedDate;
};
