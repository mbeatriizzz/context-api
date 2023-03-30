import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [time, setTime] = useState("00:00");
  const [greeting, setGreeting] = useState("--");
  const [phrase, setPhrase] = useState("Seja bem vindo!");
  const [phraseAuthor, setPhraseAuthor] = useState("Espero que esteja tudo bem!");

  return (
    <AppContext.Provider value={{ time, setTime, greeting, setGreeting, phrase, setPhrase, phraseAuthor, setPhraseAuthor }}>
      {children}
    </AppContext.Provider>
  );
};