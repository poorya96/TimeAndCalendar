import React, { useState } from "react";

export default function Calendar() {
  const [currentDate] = useState(getFormattedDate());

  function getFormattedDate() {
    const today = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month} ${date}, ${year}`;
  }

  return <span>{currentDate}</span>;
}
