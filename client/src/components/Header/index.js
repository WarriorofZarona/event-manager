import React from "react";
import InfoCard from "../InfoCard";

const Header = ({ eventData }) => (
  <>
    <img
      src="./assets/img/banner.png"
      alt="Friendsgiving"
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
    <InfoCard
      name={eventData.name}
      address={eventData.address}
      date={eventData.date}
      city={eventData.city}
      state={eventData.state}
      zipcode={eventData.zipcode}
      phone={eventData.phone}
      food={eventData.food}
    />
  </>
);

export default Header;
