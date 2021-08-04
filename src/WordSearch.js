import React, { useState } from "react";
import axios from "axios";

export default function WordSearch() {
  const [word, setWord] = useState("");
  const [pronounciation, setPronounciation] = useState("");
  const [definition, setDefinition] = useState("");

  function handleResponse(response) {
    console.log(response);
    setWord(<p>{word}</p>);
    setPronounciation(<p>pronunciation: {pronounciation}</p>);
    setDefinition(
      <p>
        {word} means {definition}{" "}
      </p>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(url).then(handleResponse);
  }

  function changeWord(event) {
    setWord(event.target.value);
    console.log(word);
  }

  return (
    <div className="WordSearch">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="enter a word" onChange={changeWord} />
        <input type="submit" value="Search for word" />
      </form>

      <div>
        <p>{word}</p>
        <div className="definition">
          <h2> definition </h2>
          <p>{definition}</p>A definition is the meaning of a word
        </div>
        <div className="pronounciation">
          <h2> pronounciation </h2>
          <p>{pronounciation}</p>
        </div>
      </div>

      <p>
        Coded by{" "}
        <a href="https://github.com/dimbee40/dw-dictinary-hw" className="link">
          Deb{" "}
        </a>
      </p>
    </div>
  );
}
