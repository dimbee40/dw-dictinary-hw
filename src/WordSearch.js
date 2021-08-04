import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
export default function WordSearch() {
  const [word, setWord] = useState(null);
  const [results, setResults] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(url).then(handleResponse);
  }

  function changeWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="WordSearch">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="enter a word" onChange={changeWord} />
        <input type="submit" value="Search for word" />
      </form>
      <Results results={results} />
      <p>
        Coded by{" "}
        <a href="https://github.com/dimbee40/dw-dictinary-hw" className="link">
          Deb{" "}
        </a>
      </p>
    </div>
  );
}
