import React, { useState } from "react";
//import axios from "axios";

export default function WordSearch() {
  const [word, setWord] = useState("");
  const [pronounciation, setPronounciation] = useState("");
  const [definition, setDefinition] = useState("");

  function handleResponse(response) {
    console.log(response);
    setWord(<li>{word}</li>);
    setPronounciation(<li>pronunciation: {pronounciation}</li>);
    setDefinition(
      <li>
        {word} means {definition}{" "}
      </li>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleResponse();
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
      <p>{word}</p>
      <p>{pronounciation}</p>
      <p>{definition}</p>

      <div className="definition">
        <h2> meaning </h2>
        <p>A definition is the meaning of a word </p>
      </div>

      <p>
        Coded by <a href="https://github.com/dimbee40/dw-dictinary-hw">Deb</a>
      </p>
    </div>
  );
}
