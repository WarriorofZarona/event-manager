import React, { useState, useRef } from "react";
import { Subtitle, Title } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import { RadioButton } from "../../components/RadioButton";
import { Link } from "react-router-dom";

const Invite = ({ person }) => {
  const [coming, setIsComing] = useState("UNDECIDED");
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const myRef = useRef();

  const radioChangeHandler = (e) => {
    if (myRef) {
      myRef.current.scrollIntoView(false);
    }
    setIsComing(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    // TODO: Sends API call to set correct values of coming
    setIsSubmitted(true)
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
        <Avatar size={250} src="./assets/img/nioh2.png" />
        <figcaption style={{ textAlign: "center" }}>
          Avatar is based on the video game you told me about
        </figcaption>
      </figure>
      <Title textCenter>
        This is your invitation to Friendsgiving this year, Marcel!
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
            isSelected={coming === "YES"}
            label="Yes"
            value="YES"
          />
          <RadioButton
            onChange={radioChangeHandler}
            id="2"
            isSelected={coming === "NO"}
            label="No"
            value="NO"
          />
        </div>
      </div>
      {coming === "YES" ? (
        <form
          onSubmit={handleSubmit}
          ref={myRef}
          style={{
            display: "flex",
            gap: 32,
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <p style={{ fontSize: 24, fontWeight: 700 }}>
            What are you bringing?
          </p>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>Submit</button>
        </form>
      ) : null}
      {isSubmitted ? (
        <Subtitle textCenter>
          THANK YOU! We'll see you then! Click <Link to="/">here</Link> to check
          out who else is coming!
        </Subtitle>
      ) : null}
      {coming === "NO" ? (
        <div ref={myRef} style={{ display: "flex" }}>
          <p style={{ fontSize: 24, fontWeight: 700 }}>
            Sorry we won't see you!
          </p>
        </div>
      ) : null}
      <div ref={myRef} />
    </div>
  );
};

export default Invite;
