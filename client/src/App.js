import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Header from "./components/Header";
import Home from "./pages/Home";
import dayjs from "dayjs";
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
      <Routes>
        <Route path="/" element={<Home eventData={eventData} />} />
        {/* TODO: Add route for Invite page component that goes to invite/:id */}
      </Routes>
    </MainContainer>
  );
};

export default App;
