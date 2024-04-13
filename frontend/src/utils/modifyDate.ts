const modifyDate = (date: string): string => {
  const dateClass = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "long",
    day: "numeric",
  };
  return dateClass.toLocaleDateString("en-US", options);
};

export default modifyDate;
