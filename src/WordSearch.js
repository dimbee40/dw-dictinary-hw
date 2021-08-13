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
    <div>
      <section className="WordSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="enter a word e.g. garden, hello, window"
            onChange={changeWord}
            className="searchField"
          />
          <input
            className="searchButton"
            type="submit"
            value="Search definition"
          />
        </form>
      </section>
      <section>
        <Results results={results} />
      </section>
    </div>
  );
}
