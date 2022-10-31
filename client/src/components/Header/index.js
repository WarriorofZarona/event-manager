import React from "react";
import InfoCard from "../InfoCard";

const Header = ({ data }) => (
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
      name={data.event.name}
      address={data.event.address}
      date={data.event.date}
      city={data.event.city}
      state={data.event.state}
      zipcode={data.event.zipcode}
      phone={data.event.phone}
      food={data.event.food}
    />
  </>
);

export default Header;
