exports.calculateTime = () => {
  let date = new Date();
  date.setTime(date.getTime() + 60 * 1000 * 5); // 5 minute
  return date;
};
