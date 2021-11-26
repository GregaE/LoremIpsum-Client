import React from 'react';
import Welcome from './Welcome/Welcome';
import Calendar from './Calendar/Calendar';
import Tracker from './Tracker/Tracker';

export default function Home() {

  return (
    <div>
      <Welcome/>
      <Tracker/>
      <Calendar/>
    </div>
  );
}