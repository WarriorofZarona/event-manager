import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Invite from "./pages/Invite";
import dayjs from "dayjs";
import eventData from "./utils/eventData.json";

const App = () => {
  const eventDate = dayjs(eventData.event.date);
  const daysToDate = eventDate.diff(dayjs());
  const now = new Date().getTime();
  const timeToDate = daysToDate + now;

  return (
    <MainContainer>
      <Header data={eventData} />
      {/* TODO: Home component should go to / route */}
      <Routes>
        <Route path="/" element={<Home people={eventData.people} />} />
        {/* TODO: Add route for Invite page component that goes to invite/:id */}
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </MainContainer>
  );
};

export default App;
