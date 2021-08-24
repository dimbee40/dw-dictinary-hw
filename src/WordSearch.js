import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
export default function WordSearch() {
  const [word, setWord] = useState(null);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePicResponse(response) {
    setPhotos(response.data.photos);
  }

  function handlePictures(event) {
    let pexelsApiKey =
      "563492ad6f91700001000001146ead05d18843709430ffdb9601fe25";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    axios.defaults.headers.common["Authorization"] = `Bearer ${pexelsApiKey}`;
    axios.get(pexelsApiUrl).then(handlePicResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(url).then(handleResponse);
    handlePictures();
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
      <section>
        {" "}
        <Photos photos={photos} />
      </section>
    </div>
  );
}
