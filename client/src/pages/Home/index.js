import React, { useEffect, useState } from "react";
import { Subtitle } from "../../components/Text";
import { Person } from "../../components/Person";
import "./style.css";
import { getPeople } from "../../utils/Api";

const Home = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    console.log("LOADING PEOPLE");
    getPeople().then((res) => {
      console.log(res.data);
      setPeople(res.data);
    });
  }, []);

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
        {people.map(
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
