import React from "react";
import { Header } from "../../components/Header";
import { Subheader } from "../../components/Subheader";
import dayjs from "dayjs";
import "./style.css";
import { Attendant } from "../../components/Attendant";

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
      <img
        className="banner"
        src="./assets/img/banner.png"
        alt="Friendsgiving"
      />
      <div className="info">
        <Header style={{ textAlign: "center" }}>{event.name}</Header>
        <Subheader>{event.address}</Subheader>
        <Subheader>
          {event.city}, {event.state} {event.zipcode}
        </Subheader>
        <Subheader>Date: {formattedDate}</Subheader>
        <Subheader>Phone: {event.phone}</Subheader>
      </div>
      <div className="attending-list">
        <Attendant
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          food={"food"}
        />
        <Attendant
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          food={"food"}
        />
        <Attendant
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          food={"food"}
        />
        <Attendant
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          food={"food"}
        />
        <Attendant
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          food={"food"}
        />
        <Attendant
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          food={"food"}
        />
        <Attendant
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          food={"food"}
        />
        <Attendant
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          food={"food"}
        />
      </div>
    </div>
  );
};
