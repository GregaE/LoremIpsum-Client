import React from 'react';

export default function Buttons() {
//TODO this needs to be a single button and reused later
  return (
    <div className="btns-container flex flex-row">
      <button className="save-btn">Save</button>
      <button className="cancel-btn">Cancel</button>
    </div>
  );
}