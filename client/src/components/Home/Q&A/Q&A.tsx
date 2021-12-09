import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../Forms/Elements/Buttons/Button';

function AnswerGenerator() {
  function generateAnswer() {
    // do stuff here
  }

  return (
    <div
      id=""
      className="w-5/6 h-1/2 flex flex-col bg-primary rounded-lg self-center items-center my-5 overflow-auto gap-4 text-center"
    >
      <h3 className="mb-3">Ask Our AI a Question</h3>
      <div className="w-full">
        <div className="flex gap-5 items-center px-10">
          <input className="w-3/4 leading-none text-dark p-3 bg-primary-bg border-primary-bg rounded focus:outline-none focus:border focus:ring-2 focus:ring-primary" />
          <div>
            <Button name={'Generate'} onClick={generateAnswer()} />
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerGenerator);
