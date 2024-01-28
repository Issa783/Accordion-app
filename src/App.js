import React, { useState } from "react";
import Data from "./data";
import styles from "./style.module.css";
import Questions from "./Components/Questions";

function App() {
  const [question, setQuestion] = useState(Data);
  const questiondata = question.map((questionData) => (
    <Questions key={questionData.id} questionData={questionData} />
  ));

  return (
    <main>
      <div className={styles.container}>
        <h3>Questions and answers about login</h3>
        {questiondata}
        
        </div>
    </main>
  );
}

export default App;
