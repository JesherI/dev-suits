import { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const fullText = "BIENVENIDO A DEV-SUITS";

  useEffect(() => {
    let currentIndex = 0;
    let isCancelled = false;

    const typeText = () => {
      if (isCancelled) return;

      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          if (!isCancelled) setShowSubtitle(true);
        }, 500);
      }
    };

    typeText();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <main className="home-container">
      <h1 className="typing-text">{text}</h1>

      {showSubtitle && (
        <>
          <p className="subtitle fade-in">
            Creando soluciones modernas y minimalistas
          </p>
          <button className="btn-primary fade-in" onClick={() => alert("¡Vamos!")}>
            Explorar
          </button>
        </>
      )}
    </main>
  );
};

export default Home;
