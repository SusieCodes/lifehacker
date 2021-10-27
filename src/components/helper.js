export const formatDate = (obj) => {
  const date = new Date(obj);
  const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
  return formattedDate;
};

export const formatStringDate = (dateStr) => {
  const newDateStr = new Date(dateStr + "T12:00:00");
  const formattedDate = newDateStr.toDateString();
  return formattedDate;
};

export const formatDateNoDay = (dateStr) => {
  const newDateStr = new Date(dateStr + "T12:00:00");
  const formattedDate = newDateStr.toDateString();
  const formattedDateNoDay = formattedDate.slice(3);
  return formattedDateNoDay;
};
