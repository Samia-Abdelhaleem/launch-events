import React, { useRef } from "react";
import classes from "../../styles/event-search.module.css";
import Button from "../Ui/Button";
const EventsSearch = ({ onSearchEvent }) => {
  const yearInput = useRef();
  const monthInput = useRef();
  const years = ["2021", "2022"];
  const months = [
    { value: 1, name: "January" },
    { value: 2, name: "February" },
    { value: 3, name: "March" },
    { value: 4, name: "April" },
    { value: 5, name: "May" },
    { value: 6, name: "June" },
    { value: 7, name: "July" },
    { value: 8, name: "August" },
    { value: 9, name: "September" },
    { value: 10, name: "October" },
    { value: 11, name: "November" },
    { value: 12, name: "December" },
  ];
  function handelSearchEvent(event) {
    event.preventDefault();
    onSearchEvent(yearInput.current.value, monthInput.current.value);
  }
  return (
    <>
      <form className={classes.form} onSubmit={handelSearchEvent}>
        <div className={classes.controls}>
          <div className={classes.controls}>
            <label htmlFor="year"> Year</label>
            <select id="year" ref={yearInput}>
              {years.map((year) => (
                <option key={year} value={year}>
                  {" "}
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.controls}>
            <label htmlFor="month"> Month</label>
            <select id="month" ref={monthInput}>
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {" "}
                  {month.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button> Search Event</Button>
      </form>
    </>
  );
};

export default EventsSearch;
