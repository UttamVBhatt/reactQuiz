function NextQuestion({ dispatch, answer, index, numOfQuestions }) {
  if (answer === null) return null;

  if (index < numOfQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );

  if (index === numOfQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "finish" })}
        className="btn btn-ui"
      >
        Finish
      </button>
    );
}

export default NextQuestion;
