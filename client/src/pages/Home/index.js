import React from "react";
import { Subtitle } from "../../components/Text";
import dayjs from "dayjs";
import "./style.css";
import { Person } from "../../components/Person";
import eventData from "../../utils/eventData.json";
import CountdownTimer from "../../components/CountdownTimer";

const Home = ({eventData}) => {
  const { people } = eventData;
  const sortAttendingPeople = people.sort((a) => (a.isAttending ? -1 : 1));

  return (
    <>
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
      <Subtitle>
        Note: If plans change, use the page sent to you to update your status!
      </Subtitle>
    </>
  );
};

export default Home;
