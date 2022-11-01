import React from "react";
import dayjs from "dayjs";
import { Subtitle, Title } from "../Text";
import CountdownTimer from "../CountdownTimer";

const InfoCard = ({
  name,
  address,
  city,
  state,
  zipcode,
  date,
  phone,
  food,
}) => {
  const eventDate = dayjs(date);
  const formattedDate = eventDate.format("MM/DD/YYYY h:mma");
  const daysToDate = eventDate.diff(dayjs());
  const now = new Date().getTime();
  const timeToDate = daysToDate + now;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: 'nowrap',
        width: "100%",
        maxWidth: 808,
        height: "auto",
        border: "4px solid #fcedda",
        gap: 8,
        padding: "24px 8px",
      }}
    >
      <Title textCenter>{name}</Title>
      <Subtitle textCenter>{address}</Subtitle>
      <Subtitle textCenter>
        {city}, {state} {zipcode}
      </Subtitle>
      <Subtitle textCenter>Date: {formattedDate}</Subtitle>
      <Subtitle textCenter>Phone: {phone}</Subtitle>
      <Subtitle textCenter>Serving: {food}</Subtitle>
      <CountdownTimer targetDate={timeToDate} />
    </div>
  );
};

export default InfoCard;
