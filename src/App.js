import "./App.css";
import WordSearch from "./WordSearch";

export default function App() {
  return (
    <div>
      {" "}
      <div className="App">
        <h1>ONLINE DICTIONARY</h1>
        <WordSearch />
        <p className="footer">
          Coded by{" "}
          <a
            href="https://github.com/dimbee40/dw-dictinary-hw"
            className="link"
          >
            Deb{" "}
          </a>
        </p>{" "}
      </div>
    </div>
  );
}
