import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import "./InputComp.css";

const InputComp = () => {
  const { speak, voices, rate } = useSpeechSynthesis();
  const [value, setValue] = useState("");
  const [voiceSelection, setVoiceSelecetion] = useState("");
  const [speedSelection, setSpeedSelection] = useState();

  const speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  const handleSpeech = () => {
    console.log("rate", rate);
    speak({
      text: value,
      voice: voices.find((voice) => voice.name === voiceSelection),
    });
  };

  return (
    <div className="container">
      <h2>Text to Speech</h2>
      <textarea
        cols="30"
        rows="10"
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <select
        onChange={(e) => setVoiceSelecetion(e.target.value)}
        value={voiceSelection}
      >
        <option value="">Default</option>
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
        <option value="">1</option>
        {speeds.map((speed, index) => {
          return (
            <option key={speed.rate} value={index}>
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
