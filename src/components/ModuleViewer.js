import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import modules from "data/modules";
import "./module.css";

// Renders **bold** segments inside plain strings.
const Rich = ({ text }) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
  );

const Popup = ({ data, onClose }) => (
  <div className="mv-popup-back" onClick={onClose} role="dialog" aria-modal="true">
    <div className={`mv-popup ${data.tone || ""}`} onClick={(e) => e.stopPropagation()}>
      <button className="mv-close" onClick={onClose} aria-label="Cerrar">×</button>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </div>
  </div>
);

const Question = ({ question, options, answer, explanation, onAnswered }) => {
  const [selected, setSelected] = useState(null);
  const [sent, setSent] = useState(false);
  const isRight = selected === answer;

  const send = () => {
    setSent(true);
    if (onAnswered) onAnswered(isRight);
  };

  const optionClass = (i) => {
    if (!sent) return selected === i ? "selected" : "";
    if (i === answer) return "correct";
    return i === selected ? "wrong" : "";
  };

  return (
    <>
      <p className="mv-q">{question}</p>
      <div className="mv-options">
        {options.map((opt, i) => (
          <button key={i} className={`mv-option ${optionClass(i)}`} disabled={sent} onClick={() => setSelected(i)}>
            {opt}
          </button>
        ))}
      </div>
      {!sent && (
        <button className="mv-send" disabled={selected === null} onClick={send}>
          Enviar
        </button>
      )}
      {sent && (
        <div className="mv-feedback">
          <strong>{isRight ? "¡Correcto! " : "¡Incorrecto! "}</strong>
          {explanation || (isRight ? "¡Sigue así!" : `La respuesta correcta es: ${options[answer]}.`)}
        </div>
      )}
    </>
  );
};

const SlideContent = ({ slide, module, openPopup, seen, markSeen, onNextModule, onCourses }) => {
  switch (slide.type) {
    case "cover":
      return (
        <div className="mv-slide mv-cover mv-stagger">
          <h1 className="mv-cover-title">{slide.title}</h1>
          <p className="mv-cover-sub">{slide.subtitle}</p>
        </div>
      );
    case "text":
      return (
        <div className="mv-slide mv-stagger">
          <h2 className="mv-title">{slide.title}</h2>
          <div className="mv-rule" />
          {slide.body.map((p, i) => (
            <p className="mv-text" key={i}><Rich text={p} /></p>
          ))}
          {slide.emoji && <div className="mv-emoji" aria-hidden="true">{slide.emoji}</div>}
        </div>
      );
    case "pills":
    case "choice":
      return (
        <div className="mv-slide mv-stagger">
          <h2 className="mv-title">{slide.title}</h2>
          {slide.intro && <p className="mv-intro">{slide.intro}</p>}
          <div className="mv-pills mv-stagger">
            {slide.items.map((item, i) => (
              <button
                key={i}
                className={`mv-pill ${seen.has(i) ? "seen" : ""}`}
                onClick={() => {
                  markSeen(i);
                  openPopup(slide.type === "pills" ? { title: item.label, text: item.detail } : item.feedback);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      );
    case "question":
      return (
        <div className="mv-slide mv-stagger">
          <Question {...slide} />
        </div>
      );
    case "list":
      return (
        <div className="mv-slide mv-stagger">
          <h2 className="mv-title">{slide.title}</h2>
          <ul className={`mv-list ${slide.items.some((t) => /^\p{Extended_Pictographic}/u.test(t)) ? "plain" : ""}`}>
            {slide.items.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
      );
    case "reflect":
      return (
        <div className="mv-slide mv-stagger">
          <h2 className="mv-title">Reflexiona ✍️</h2>
          <div className="mv-reflect">{slide.prompt}</div>
          <p className="mv-intro">Anota tu respuesta en tu hoja o en tu aplicación de notas.</p>
        </div>
      );
    case "end":
      return (
        <div className="mv-slide mv-stagger">
          <h2 className="mv-end-title">¡Enhorabuena!</h2>
          <p className="mv-end-sub">¡Continúa aprendiendo!</p>
          {onNextModule && <button className="mv-btn" onClick={onNextModule}>Módulo {module.number + 1}</button>}
          <button className="mv-btn light" onClick={onCourses}>Cursos</button>
        </div>
      );
    default:
      return null;
  }
};

// Quiz modules: intro → one question per screen → score.
const Quiz = ({ module, onCourses, onBack }) => {
  const { questions, subtitle } = module.quiz;
  const [step, setStep] = useState(-1); // -1 intro, questions.length = results
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const total = questions.length;

  const next = () => {
    setAnswered(false);
    setStep((s) => s + 1);
  };

  return (
    <div className="mv-card bg-slate">
      <button className="mv-round mv-home" onClick={onBack} aria-label="Volver al curso">⌂</button>
      {step >= 0 && step < total && <div className="mv-progress" style={{ width: `${((step + 1) / total) * 100}%` }} />}

      {step === -1 && (
        <div className="mv-slide mv-stagger" key="intro">
          <h1 className="mv-cover-title">¡Pon en práctica lo aprendido!</h1>
          <p className="mv-cover-sub">{module.course.name}</p>
          <p className="mv-intro">{subtitle}</p>
          <button className="mv-btn light" onClick={next}>Comenzar</button>
        </div>
      )}

      {step >= 0 && step < total && (
        <div className="mv-slide mv-stagger" key={step}>
          <div className="mv-counter">{step + 1} de {total}</div>
          <Question
            question={questions[step].q}
            options={questions[step].options}
            answer={questions[step].answer}
            explanation={questions[step].explanation}
            onAnswered={(right) => {
              setAnswered(true);
              if (right) setScore((s) => s + 1);
            }}
          />
          {answered && (
            <button className="mv-btn light" onClick={next}>
              {step + 1 < total ? "Siguiente" : "Ver resultado"}
            </button>
          )}
        </div>
      )}

      {step === total && (
        <div className="mv-slide mv-stagger" key="end">
          <h2 className="mv-end-title">¡Enhorabuena!</h2>
          <div className="mv-score">{score} / {total}</div>
          <p className="mv-end-sub">
            {score / total >= 0.8 ? "¡Excelente dominio del tema!" : "¡Continúa aprendiendo!"}
          </p>
          <button className="mv-btn" onClick={() => { setScore(0); setStep(-1); }}>Intentar de nuevo</button>
          <button className="mv-btn light" onClick={onCourses}>Cursos</button>
        </div>
      )}
    </div>
  );
};

const ModuleViewer = ({ id }) => {
  const navigate = useNavigate();
  const module = modules[id];
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [popup, setPopup] = useState(null);
  const [seen, setSeen] = useState(() => new Set());
  const touchX = useRef(null);

  const slides = module && module.slides;
  const count = slides ? slides.length : 0;

  const go = useCallback(
    (delta) => {
      setPopup(null);
      setIndex((i) => {
        const nextIndex = Math.min(Math.max(i + delta, 0), count - 1);
        if (nextIndex !== i) {
          setDir(delta);
          setSeen(new Set());
        }
        return nextIndex;
      });
    },
    [count]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") setPopup(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!module) {
    return <div className="mv-stage"><p style={{ color: "#333" }}>Módulo no encontrado.</p></div>;
  }

  const back = () => navigate(`/courses/${module.course.slug}`);
  const courses = () => navigate("/");
  const nextId = Number(id) + 1;
  const hasNext = modules[nextId] && modules[nextId].course === module.course;

  if (module.quiz) {
    return (
      <div className="mv-stage">
        <Quiz module={module} onCourses={courses} onBack={back} />
      </div>
    );
  }

  const slide = slides[index];

  return (
    <div className="mv-stage">
      <div
        className={`mv-card bg-${slide.bg}`}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null || popup) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div className="mv-progress" style={{ width: `${((index + 1) / count) * 100}%` }} />
        <button className="mv-round mv-home" onClick={back} aria-label="Volver al curso">⌂</button>

        <div key={index} className={dir < 0 ? "mv-slide-wrap back" : "mv-slide-wrap"}>
          <SlideContent
            slide={slide}
            module={module}
            openPopup={setPopup}
            seen={seen}
            markSeen={(i) => setSeen((s) => new Set(s).add(i))}
            onNextModule={hasNext ? () => navigate(`/course/${nextId}`) : null}
            onCourses={courses}
          />
        </div>

        {slide.type === "cover" && <div className="mv-badge">Módulo {module.number}</div>}
        <button className="mv-round mv-prev" onClick={() => go(-1)} disabled={index === 0} aria-label="Anterior">←</button>
        <button className="mv-round mv-next" onClick={() => go(1)} disabled={index === count - 1} aria-label="Siguiente">→</button>

        {popup && <Popup data={popup} onClose={() => setPopup(null)} />}
      </div>
    </div>
  );
};

export default ModuleViewer;
