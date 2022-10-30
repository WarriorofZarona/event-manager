import React from "react";
import { Header, Subheader } from "../../components/Text";
import dayjs from "dayjs";
import "./style.css";
import { Person } from "../../components/Person";
import eventData from "../../utils/eventData.json";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";

const Home = () => {
  const { event, people } = eventData;

  const eventDate = dayjs(event.date);
  const formattedDate = eventDate.format("MM/DD/YYYY h:mma");
  const daysToDate = eventDate.diff(dayjs());
  const now = new Date().getTime();
  const timeToDate = daysToDate + now;
  const sortAttendingPeople = people.sort((a) => (a.isAttending ? -1 : 1));

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
        {people.map(({ id, name, image, isHost }) =>
          isHost ? (
            <Person key={id} isHost={isHost} name={name} img={image} />
          ) : null
        )}
      </div>
      <div className="attending-list">
        {sortAttendingPeople.map(
          ({ id, name, image, isHost, isAttending, text }) =>
            !isHost ? (
              <Person
                key={id}
                isAttending={isAttending}
                name={name}
                img={image}
                text={
                  isAttending
                    ? `Bringing ${text || "something"}`
                    : "Can't make it"
                }
              />
            ) : null
        )}
      </div>
      <CountdownTimer targetDate={timeToDate} />
      <Subheader>
        Note: If plans change, use the page sent to you to update your status!
      </Subheader>
    </div>
  );
};

export default Home;
