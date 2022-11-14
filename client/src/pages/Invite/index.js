import React, { useState, useRef, useEffect } from "react";
import { Subtitle, Title } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import { RadioButton } from "../../components/RadioButton";
import { Link, useParams } from "react-router-dom";
import { getPerson, updatePerson } from "../../utils/Api";

const Invite = ({ person }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [hasResponded, setHasResponded] = useState(false);
  const [isAttending, setIsAttending] = useState(false);
  const [attendingEnum, setAttendingEnum] = useState("UNDECIDED");
  const [food, setFood] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { id } = useParams();
  const myRef = useRef();

  const isComing = attendingEnum === "YES";
  const isNotComing = attendingEnum === "NO";

  useEffect(() => {
    getPerson(id).then((res) => {
      setName(res.data[0].name);
      setImage(res.data[0].image);
    });
  }, [id]);

  useEffect(() => {
    if (isComing) setIsAttending(true);
    if (isNotComing) setIsAttending(false);
  }, [attendingEnum]);

  const radioChangeHandler = (e) => {
    if (myRef) {
      myRef.current.scrollIntoView(false);
    }
    if (isComing) setIsAttending(true);
    setIsSubmitted(false);
    setHasResponded(true);
    setAttendingEnum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePerson(id, {
      hasResponded,
      isAttending,
      food,
    }).then((res) => {
      if (res.status === 200) setIsSubmitted(true);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      <figure style={{ margin: 0 }}>
        <Avatar size={250} src={image} />
        <figcaption style={{ textAlign: "center" }}>
          Avatar is based on the video game you told me about
        </figcaption>
      </figure>
      <Title textCenter>
        This is your invitation to Friendsgiving this year, {name}!
      </Title>
      <div style={{ display: "flex", gap: 24 }}>
        <Subtitle textCenter>Are you coming?</Subtitle>
        <div
          style={{
            display: "flex",
            gap: 32,
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <RadioButton
            onChange={radioChangeHandler}
            id="1"
            isSelected={attendingEnum === "YES"}
            label="Yes"
            value="YES"
          />
          <RadioButton
            onChange={radioChangeHandler}
            id="2"
            isSelected={attendingEnum === "NO"}
            label="No"
            value="NO"
          />
        </div>
      </div>
      {isComing ? (
        <form
          onSubmit={handleSubmit}
          ref={myRef}
          style={{
            width: "100%",
            display: "flex",
            gap: 32,
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 700 }}>
            What are you bringing?
          </p>
          <input
            type="text"
            placeholder="Something delicious and yummy!"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
          <button>Submit</button>
        </form>
      ) : null}
      {isNotComing ? (
        <form
          onSubmit={handleSubmit}
          ref={myRef}
          style={{
            width: "100%",
            display: "flex",
            gap: 32,
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 700 }}>
            Any reason why you can't come?
          </p>
          <input
            type="text"
            placeholder="Because I suck (LOL J/K!)"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
          <button>Submit</button>
        </form>
      ) : null}
      {isSubmitted ? (
        <Subtitle textCenter>
          {isComing ? (
            <>
              THANK YOU! Click <Link to="/">here</Link> to check out who else is
              coming!
            </>
          ) : (
            <>
              WE'LL MISS YOU!! Meanwhile, you can click <Link to="/">here</Link>{" "}
              to check out who else is coming!
            </>
          )}
        </Subtitle>
      ) : null}
      <div ref={myRef} />
    </div>
  );
};

export default Invite;
