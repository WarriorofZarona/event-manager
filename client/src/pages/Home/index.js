import React from "react";
import { Subtitle } from "../../components/Text";
import { Person } from "../../components/Person";
import "./style.css";

const Home = ({ people }) => {
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
          ({ id, name, image, isHost, isAttending, hasResponded, food }) => {
            let text;

            if (!hasResponded) {
              text = "Waiting for a response";
            } else if (!isAttending) {
              text = "Can't make it";
            } else {
              text = `Bringing ${food || "something"}`;
            }

            return !isHost ? (
              <Person
                key={id}
                isAttending={isAttending}
                name={name}
                img={image}
                text={text}
              />
            ) : null;
          }
        )}
      </div>
      <Subtitle>
        Note: If plans change, use the page sent to you to update your status!
      </Subtitle>
    </>
  );
};

export default Home;
