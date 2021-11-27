import React from 'react';
import Welcome from './Welcome/Welcome';
import Calendar from './Calendar/Calendar';
import Tracker from './Tracker/Tracker';

export default function Home() {

  return (
    <div id="home-container" className="w-full bg-primary-bg flex flex-row">
      <div id="main-section" className="w-5/6 h-full bg-primary-bg flex flex-col justify-start">
        <Welcome/>
        <Tracker/>
      </div>
      <div id="right-section" className="w-2/6 h-full">
        <Calendar/>
      </div>
    </div>
  );
}