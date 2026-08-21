export default function QuestionCard({
  question,
  answer,
  comment,
  image,
  onAnswerChange,
  onCommentChange,
  onImageChange
}) {
  const referenceSrc = `${import.meta.env.BASE_URL}references/${question.id}.png`;

  return (
    <div className="card">

      <h3>
        {question.id}. {question.es}
      </h3>

      <p>
        <strong>EN:</strong> {question.en}
      </p>

      <details>
        <summary>📸 Ver Imagen de Referencia</summary>

        <div className="reference-wrapper">
          <img
            src={referenceSrc}
            alt={`Referencia pregunta ${question.id}`}
            className="reference-image"
            onClick={(e) => window.open(e.target.src, "_blank")}
          />
          <span className="reference-caption">✅ Ejemplo aceptable — clic para ampliar</span>
        </div>
      </details>

      <div className="answer-group">

        <label>
          <input
            type="radio"
            name={`q-${question.id}`}
            value="ACCEPTABLE"
            checked={answer === "ACCEPTABLE"}
            onChange={(e) =>
              onAnswerChange(
                question.id,
                e.target.value
              )
            }
          />
          ✅ Acceptable
        </label>

        <label>
          <input
            type="radio"
            name={`q-${question.id}`}
            value="REJECTED"
            checked={answer === "REJECTED"}
            onChange={(e) =>
              onAnswerChange(
                question.id,
                e.target.value
              )
            }
          />
          ❌ Rejected
        </label>

        <label>
          <input
            type="radio"
            name={`q-${question.id}`}
            value="NA"
            checked={answer === "NA"}
            onChange={(e) =>
              onAnswerChange(
                question.id,
                e.target.value
              )
            }
          />
          ➖ N/A
        </label>

      </div>

      <textarea
        placeholder="Comentario"
        value={comment || ""}
        onChange={(e) =>
          onCommentChange(
            question.id,
            e.target.value
          )
        }
      />

      {answer === "REJECTED" && (
        <div>
          <label
            htmlFor={`photo-${question.id}`}
            className="camera-btn"
          >
            📷 Tomar Evidencia
          </label>

          <input
            id={`photo-${question.id}`}
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: "none" }}
            onChange={(e) =>
              onImageChange(
                question.id,
                e.target.files[0]
              )
            }
          />
        </div>
      )}

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="evidencia"
          className="preview"
        />
      )}

    </div>
  );
}