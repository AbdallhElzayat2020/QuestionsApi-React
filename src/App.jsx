import { useState } from "react";
import data from "./data";
import Questions from "./components/Questions";
const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveUd] = useState(null);
  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveUd(newActiveId);
  };
  return (
    <main>
      <Questions
        questions={questions}
        toggleQuestion={toggleQuestion}
        activeId={activeId}
      />
    </main>
  );
};
export default App;
