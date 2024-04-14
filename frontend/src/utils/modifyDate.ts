const modifyDate = (
  date: string,
  setError: (error: string) => void
): string | undefined => {
  const dateClass = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "long",
    day: "numeric",
  };
  const formattedDate = dateClass.toLocaleDateString("en-US", options);

  if (!formattedDate || formattedDate === "Invalid Date") {
    setError("Could not format the Date property properly...");
    return;
  }
  return formattedDate;
};

export default modifyDate;
