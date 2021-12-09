import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../Forms/Elements/Buttons/Button';

function AnswerGenerator() {
  const [interview, setInterview] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState({} as any);

  const generateQuestions = (prompt: string) => {
    fetch(process.env.REACT_APP_OPENAI_Q_URL || '', {
      body: JSON.stringify({
        prompt: `${prompt.trim()}:\n\n1.`,
        temperature: 0.8,
        max_tokens: 256,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ['\n\n'],
      }),
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error(
          'Error: ' + response.status + ' ' + response.statusText
        );
      })
      .then(questions => setQuestions(questions.choices))
      .catch(error => console.error(error));
  };

  const generateAnswer = (question: string) => {
    fetch(process.env.REACT_APP_OPENAI_A_URL || '', {
      body: JSON.stringify({
        prompt: `Q: ${question.trim()}?\nA: `,
        temperature: 0.8,
        max_tokens: 256,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ['\n'],
      }),
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error(
          'Error: ' + response.status + ' ' + response.statusText
        );
      })
      .then(answer => console.log(answer))
      .catch(error => console.error(error));
  };

  function renderQuestions() {
    console.log(questions);
    return (
      questions.length !== 0 &&
      questions.map((question: any) => (
        <div
          key="question"
          data-tooltip-target="tooltip-default"
          className="w-5/6 my-2 py-3 px-1 text-light transition"
        >
          {question.text}
        </div>
      ))
    );
  }

  function renderAnswers() {
    const answersArray = ['one', 'two'];

    return answersArray.map(answer => (
      <div
        key="answer"
        data-tooltip-target="tooltip-default"
        className="w-5/6 bg-primary-bg rounded my-2 py-3 px-1 transform hover:scale-105 transition"
      >
        {answer}
      </div>
    ));
  }

  return (
    <div
      id=""
      className="w-5/6 h-1/2 flex flex-col bg-primary rounded-lg self-center items-center my-5 overflow-auto gap-4 text-center"
    >
      <h3 className="mb-3 capitalize">Generate your interview questions</h3>
      <div className="w-full">
        <div className="flex gap-5 items-center px-20">
          <input
            className="w-3/4 leading-none text-dark p-3 bg-primary-bg border-primary-bg rounded focus:outline-none focus:border focus:ring-2 focus:ring-primary"
            onChange={event => setInterview(event.target.value)}
          />
          <div className="w-1/4">
            <button
              className="flex justify-center w-44 font-bold bg-accent hover:text-light hover:bg-primary-x rounded-lg p-3 mx-auto cursor-pointer"
              onClick={() => generateQuestions(interview)}
            >
              Generate
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-primary rounded-lg self-center items-center my-5 overflow-auto gap-4 text-center">
          {renderQuestions()}
        </div>
        <div className="flex flex-col bg-primary rounded-lg self-center items-center my-5 overflow-auto gap-4 text-center">
          {renderAnswers()}
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
