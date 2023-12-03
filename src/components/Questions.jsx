import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions {questions.length}</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            toggleQuestion={toggleQuestion}
            activeId={activeId}
            {...question}
          />
        );
      })}
    </section>
  );
};
export default Questions;
