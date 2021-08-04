import React from "react";

import Meaning from "./Meaning";

export default function Results(props) {
  //const [pronounciation, setPronounciation] = useState("");
  console.log(props.results);

  if (props.results) {
    return (
      <div className="searchResults">
        {" "}
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <Meaning meaning={meaning} />{" "}
            </div>
          );
        })}{" "}
      </div>
    );
  } else {
    return null;
  }
}
