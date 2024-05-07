import { useMemo } from "react";

export const useFormatDate = (dateString) => {
  return useMemo(() => {
    const [day, month, year] = dateString
      .split("-")
      .map((num) => parseInt(num, 10));
    const date = new Date(year, month - 1, day);

    // Create formatters for the day and year in en-US and the month in ar-SY
    const dayFormatter = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
    });
    const yearFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
    });
    const monthFormatter = new Intl.DateTimeFormat("ar-SY", {
      month: "long",
    });

    // Format each part of the date
    const formattedDay = dayFormatter.format(date);
    const formattedYear = yearFormatter.format(date);
    const formattedMonth = monthFormatter.format(date);

    // Combine all parts into the final string
    return `${formattedDay} ${formattedMonth} ` + `${formattedYear}`;
  }, [dateString]);
};
