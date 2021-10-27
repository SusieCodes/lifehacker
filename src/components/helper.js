export const formatDate = (obj) => {
  const date = new Date(obj);
  const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
  return formattedDate;
};

// used when input is string (e.g. 01-01-2021) Output is Sun Jan 05 2021
export const formatStringDate = (dateStr) => {
  const newDateStr = new Date(dateStr + "T12:00:00");
  const formattedDate = newDateStr.toDateString();
  return formattedDate;
};

// used when input is string (e.g. 01-01-2021) Output is Jan 05 2021
export const formatJustMonthDay = (dateStr) => {
  const newDateStr = new Date(dateStr + "T12:00:00");
  let formattedDate = newDateStr.toDateString();
  let formattedDateNoDay = formattedDate.slice(3);
  console.log("formattedDateNoDay is ", formattedDateNoDay);
  // let newDate =
  //   formattedDateNoDay.slice(0, 7) + "," + formattedDateNoDay.slice(7);
  // console.log("newDate is ", newDate);
  // console.log("newDate type is ", typeof newDate);
  let onlyMonthDay = formattedDateNoDay.slice(0, 7);
  console.log("onlyMonthDay is ", onlyMonthDay);
  const checkZero = onlyMonthDay.charAt(5);
  console.log("charAt returns ", onlyMonthDay.charAt(5));
  if (checkZero === "0") {
    onlyMonthDay = onlyMonthDay.slice(0, 5) + onlyMonthDay.slice(6);
  }
  return onlyMonthDay;
};

// used when input is string (e.g. 01-01-2021) Output is Jan 05 2021
export const formatDateNoWeekday = (dateStr) => {
  const newDateStr = new Date(dateStr + "T12:00:00");
  let formattedDate = newDateStr.toDateString();
  let formattedDateNoDay = formattedDate.slice(3);
  console.log("formattedDateNoDay is ", formattedDateNoDay);
  formattedDateNoDay =
    formattedDateNoDay.slice(0, 7) + "," + formattedDateNoDay.slice(7);
  // console.log("newDate is ", newDate);
  // console.log("newDate type is ", typeof newDate);
  const checkZero = formattedDateNoDay.charAt(5);
  console.log("charAt returns ", formattedDateNoDay.charAt(5));
  if (checkZero === "0") {
    formattedDateNoDay =
      formattedDateNoDay.slice(0, 5) + formattedDateNoDay.slice(6);
  }
  return formattedDateNoDay;
};

// converts 24 hr time to 12 hr (e.g. input 18:00 output is 6:00 PM)
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
