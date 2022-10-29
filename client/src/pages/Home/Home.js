import React from "react";
import "./style.css";
import dayjs from "dayjs";

export const Home = () => {
  const event = {
    name: "Potluck at Andrew (WoZ) and Michelle's Home",
    address: "2466 Wilson Terrace",
    city: "Union",
    state: "NJ",
    zipcode: "07083",
    date: "2022-11-25",
    phone: "908-922-6538",
  };

  const formattedDate = dayjs(event.date).format("MM/DD/YYYY");

  return (
    <div className="main">
      <img className="banner" src="./assets/img/banner.png" />
      <div className="info">
        <h1>{event.name}</h1>
        <h2>{event.address}</h2>
        <h2>{`${event.city}, ${event.state} ${event.zipcode}`}</h2>
        <h2>Date: {formattedDate}</h2>
        <h2>Phone: {event.phone}</h2>
      </div>
    </div>
  );
};
