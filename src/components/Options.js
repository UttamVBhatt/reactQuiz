function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswered}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
