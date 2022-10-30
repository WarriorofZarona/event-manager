import React from "react";
import { Header, Subheader } from "../../components/Text";
import dayjs from "dayjs";
import "./style.css";
import { Person } from "../../components/Person";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";

export const Home = () => {
  const event = {
    name: "Potluck at Andrew (WoZ) and Michelle's Home",
    address: "2466 Wilson Terrace",
    city: "Union",
    state: "NJ",
    zipcode: "07083",
    date: "2022-11-26 15:00",
    phone: "908-922-6538",
    food: "Classic Adobo Turkey",
  };

  const eventDate = dayjs(event.date);
  const formattedDate = eventDate.format("MM/DD/YYYY h:mma");
  const daysToDate = eventDate.diff(dayjs());
  const now = new Date().getTime();
  const timeToDate = daysToDate + now;

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
        <Subheader>Serving: {event.food}</Subheader>
      </div>
      <div className="hosts">
        <Person
          name={"Andrew"}
          img={"https://via.placeholder.com/150"}
          text={"Host"}
        />
        <Person
          name={"Michelle"}
          img={"https://via.placeholder.com/150"}
          text={"Host"}
        />
      </div>
      <div className="attending-list">
        <Person
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          text={`Bringing Mac and Cheese`}
        />
        <Person
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          text={`Bringing Cake`}
        />
        <Person
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          text={`Bringing Beers`}
        />
        <Person
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          text={`Bringing BBQ Chicken`}
        />
        <Person
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          text={`Bringing Pork Belly`}
        />
        <Person
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          text={`Bringing Sweet Potato Pie`}
        />
        <Person
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          text={`Bringing Mashed Potatoes`}
        />
        <Person
          name={"Attendant name"}
          img={"https://via.placeholder.com/150"}
          text={`Bringing Vegetable Lasagna`}
        />
      </div>
      <CountdownTimer targetDate={timeToDate} />
      <Subheader>Note: If plans change, use the page sent to you to update your status!</Subheader>
    </div>
  );
};
