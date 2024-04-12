function returnModifiedDateString(date: string): string | Error {
  if (date) {
    return date;
  } else
    throw new Error(
      "Could not find a valid 'date' property on the Weather Data..."
    );
}

export default returnModifiedDateString;
