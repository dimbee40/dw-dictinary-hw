import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div>
          {" "}
          {props.photos.map(function (photo, index) {
            return (
              <div key={index}>
                {" "}
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt="word"
                />
              </div>
            );
          })}{" "}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
