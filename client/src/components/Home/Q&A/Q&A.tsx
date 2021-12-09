import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../Forms/Elements/Buttons/Button';
import { motion, AnimatePresence } from 'framer-motion';

function AnswerGenerator() {
  const [interview, setInterview] = useState('');
  const [questions, setQuestions] = useState([] as []);
  const [answer, setAnswer] = useState('');
  const [expander, toggleExpand] = useState(false);

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
        Authorization: `Bearer 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`,
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
      .then(questions => {
        questions = questions.choices[0].text.split('\n');
        questions.map((question: string) => {
          console.log('Before: ', question);
          question = question.replace(/[^A-Za-z!?]/g, '');
          return question + '?';
        });
        setQuestions(questions);
        const answer = generateAnswer(questions[0]);
        console.log('Answer', answer);
      })
      .catch(error => console.error(error));
  };

  const generateAnswer = (question: string) => {
    toggleExpand(false);
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
        Authorization: `Bearer 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`,
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
      .then(answers => {
        console.log(answers);
        setAnswer(answers.choices[0].text);
        console.log(answer);
      })
      .catch(error => console.error(error));
  };

  function renderAnswer() {
    if (expander) {
      return (
        <motion.div
          className={`w-5/6 px-1 text-light`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween' }}
          exit={{ opacity: 0 }}
        >
          {answer}
        </motion.div>
      );
    }
  }

  function renderQuestions(array: []) {
    return array.map((question, index) => (
      <div className="flex flex-col bg-primary rounded-lg self-center items-center my-5 overflow-auto gap-4 text-center">
        <div
          key="question"
          onClick={() => toggleExpand(true)}
          data-tooltip-target="tooltip-default"
          className="w-5/6 bg-primary-bg rounded my-2 py-3 px-1 transform hover:scale-105 transition cursor-pointer"
        >
          {question}
        </div>
        {renderAnswer()}
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
        <div className="h-full w-auto mx-auto">
          {renderQuestions(questions)}
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
