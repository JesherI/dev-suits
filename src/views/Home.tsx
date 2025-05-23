import { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "BIENVENIDO A DEV-SUITS";
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        // Aquí agregamos la letra correcta
        setText((prev) => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowSubtitle(true), 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <main className="home-container">
      <h1 className="typing-text">{text}</h1>
      {showSubtitle && (
        <p className="subtitle fade-in">
          Creando soluciones modernas y minimalistas
        </p>
      )}
      {showSubtitle && (
        <button className="btn-primary" onClick={() => alert("¡Vamos!")}>
          Explorar
        </button>
      )}
    </main>
  );
};

export default Home;
