import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import questions from "./data/questions";
import { generateWord } from "./utils/generateWord";
import "./App.css";

function App() {
  const [auditor, setAuditor] = useState("");
  const [area, setArea] = useState("");

  const [answers, setAnswers] = useState({});
  const [comments, setComments] = useState({});
  const [images, setImages] = useState({});

  const exportarWord = async () => {
    await generateWord(
      auditor,
      area,
      questions,
      answers,
      comments
    );
  };

  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleCommentChange = (id, value) => {
    setComments((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleImageChange = (id, file) => {
    setImages((prev) => ({
      ...prev,
      [id]: file
    }));
  };

  return (
    <div className="container">
      <h1>GALLEY FINAL INSPECTION</h1>

      <input
        type="text"
        placeholder="Nombre Auditor"
        value={auditor}
        onChange={(e) => setAuditor(e.target.value)}
      />

      <input
        type="text"
        placeholder="Área"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />

      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          question={q}
          answer={answers[q.id]}
          comment={comments[q.id]}
          image={images[q.id]}
          onAnswerChange={handleAnswerChange}
          onCommentChange={handleCommentChange}
          onImageChange={handleImageChange}
        />
      ))}

      <button
        className="finish-btn"
        onClick={exportarWord}
      >
        Generar Word
      </button>

    </div>
  );
}

export default App;