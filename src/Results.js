import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
  //const [pronounciation, setPronounciation] = useState("");
  console.log(props.results);

  if (props.results) {
    return (
      <section>
        {" "}
        <h2 className="searchWord">{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              {" "}
              <Phonetics phonetic={phonetic} />{" "}
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div className="searchResults" key={index}>
              {" "}
              <Meaning meaning={meaning} />{" "}
            </div>
          );
        })}{" "}
      </section>
    );
  } else {
    return null;
  }
}
