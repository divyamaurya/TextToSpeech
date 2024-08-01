import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import "./InputComp.css";

const InputComp = () => {
  const { speak } = useSpeechSynthesis();
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <h2>Text to Speech</h2>
      <textarea
        cols="30"
        rows="10"
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => speak({ text: value })}>Generate Speech</button>
    </div>
  );
};

export default InputComp;
