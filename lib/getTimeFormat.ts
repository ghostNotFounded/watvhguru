const getDateFormat = (date: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const values = date.split("-");

  date = `${values[2]} ${months[parseInt(values[1]) - 1]} ${values[0]}`;

  return date;
};

export default getDateFormat;
