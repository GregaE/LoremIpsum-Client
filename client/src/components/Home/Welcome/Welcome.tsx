/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import { connect } from 'react-redux'


function Welcome({personalDetails}:any) {

  /*
  Get name from state and display it here
  */

  const {personal_details} = personalDetails
  const {id, email, phone_number, image, first_name, last_name, street, city, country, headline} = personal_details

  return (
    <div id="" className="w-full h-1/2 flex flex-row justify-center content-center">
      <div className="w-5/6 h-4/5 bg-primary my-auto flex flex-col p-4 rounded-lg">
        <h1 className="text-light">Dias buenas {personal_details && personal_details.first_name}</h1>
        <p>What about looking for a job you lazy piece of shit¿¿¿¿¿¿¿</p>
      </div>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    personalDetails: state.personal_details,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);