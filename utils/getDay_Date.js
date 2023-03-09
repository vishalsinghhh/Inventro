const getDay_Date = ()=>{
    const d = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = d.toLocaleString("en-US", "Asia/Delhi").split(',')[0]
  const day = weekday[d.getDay()]

  const timings = [date, day]

  return timings
}

module.exports = getDay_Date;
