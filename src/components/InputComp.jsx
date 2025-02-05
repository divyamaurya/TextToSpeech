import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import "./InputComp.css";

const InputComp = () => {
  const { speak, voices } = useSpeechSynthesis();
  const [value, setValue] = useState("Hello, from divya");
  const [voiceSelection, setVoiceSelecetion] = useState("");
  const [speedSelection, setSpeedSelection] = useState(1);

  const speeds = [
    { rate: "0.5x", value: 0.5 },
    { rate: "1.5x", value: 1.5 },
    { rate: "2x", value: 2 },
  ];
  const handleSpeech = () => {
    speak({
      text: value,
      voice: voices[voiceSelection],
      rate: speedSelection,
    });
  };
  const handleReset = () => {
    setValue("");
  };

  return (
    <div className="container">
      <div>
        <img src="./speech_to_text.svg" />
        <h2>Text to Speech</h2>
      </div>
      <textarea
        cols="30"
        rows="10"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Provide text in any language and hear it spoken aloud"
      />
      <br />
      <button onClick={handleReset}>Reset Textbox</button>

      <select
        onChange={(e) => setVoiceSelecetion(e.target.value)}
        value={voiceSelection}
      >
        <option value="">Default Voice</option>
        {voices.map((voice, index) => {
          return (
            <option key={voice.name} value={index}>
              {voice.name}
            </option>
          );
        })}
      </select>
      <select
        onChange={(e) => setSpeedSelection(e.target.value)}
        value={speedSelection}
      >
        <option value="1">Default Audio Speed</option>
        {speeds.map((speed) => {
          return (
            <option key={speed.rate} value={speed.value}>
              {speed.rate}
            </option>
          );
        })}
      </select>
      <button onClick={handleSpeech}>Generate Speech</button>
    </div>
  );
};

export default InputComp;
