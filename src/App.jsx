import { useState } from "react";
import "./App.css";

function App() {
  const [auditor, setAuditor] = useState("");
  const [area, setArea] = useState("");

  return (
    <div className="container">
      <h1>Auditoría 5S</h1>

      <input
        type="text"
        placeholder="Nombre del Auditor"
        value={auditor}
        onChange={(e) => setAuditor(e.target.value)}
      />

      <input
        type="text"
        placeholder="Área"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />

      <div className="card">
        <h3>1. ¿Área limpia?</h3>

        <label>
          <input type="radio" name="p1" />
          Sí
        </label>

        <label>
          <input type="radio" name="p1" />
          No
        </label>

        <textarea placeholder="Comentario"></textarea>

        <input type="file" accept="image/*" />
      </div>

      <button className="finish-btn">
        Finalizar Auditoría
      </button>
    </div>
  );
}

export default App;