import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const Phrase = () => {
  const { phrase, setPhrase, phraseAuthor, setPhraseAuthor } = useContext(AppContext);

  useEffect(() => {
    const getPhrase = async () => {
      const res = await axios.get("https://allugofrases.herokuapp.com/frases/random");
      setPhrase(res.data.frase);
      setPhraseAuthor(res.data.autor);
    };
    getPhrase();
  }, [setPhrase, setPhraseAuthor]);

  return (
    <div className="phrase">
      "{phrase}"
      <div className="author">{phraseAuthor}</div>
    </div>
  );
};

export default Phrase;