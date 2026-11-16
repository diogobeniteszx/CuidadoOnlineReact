import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [userName, setUserName] = useState("Visitante");
  const [completedLessons, setCompletedLessons] = useState([]);
  const [quizScore, setQuizScore] = useState(0);
  const value = useMemo(
    () => ({
      userName,
      setUserName,
      completedLessons,
      completeLesson: (id) =>
        setCompletedLessons((current) =>
          current.includes(id) ? current : [...current, id],
        ),
      quizScore,
      setQuizScore,
    }),
    [userName, completedLessons, quizScore],
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp deve ser usado dentro de AppProvider");
  return context;
}
