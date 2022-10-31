import React from "react";
import MainContainer from "./components/MainContainer";
import Header from "./components/Header";
import Home from "./pages/Home";
import dayjs from "dayjs";
import CountdownTimer from "./components/CountdownTimer";

import eventData from "./utils/eventData.json";

const App = () => {
  const { event, people } = eventData;
  const eventDate = dayjs(event.date);
  const daysToDate = eventDate.diff(dayjs());
  const now = new Date().getTime();
  const timeToDate = daysToDate + now;

  return (
    <MainContainer>
      <Header eventData={event} />
      {/* TODO: Home component should go to / route */}
      <Home eventData={eventData} />
      {/* TODO: Add route for Invite page component that goes to invite/:id */}

    </MainContainer>
  );
};

export default App;
