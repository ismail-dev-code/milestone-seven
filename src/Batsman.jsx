import { useState } from "react";

export default function Batsman() {
  const [runs, setCount] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setFours] = useState(0);
  

  const handleSingle = () => {
    const newRun = runs + 1;
    setCount(newRun);
  };

  const handleFour = () => {
    const newFour = runs + 4;
    const updatedFours = fours + 1;
    setFours(updatedFours);
    setCount(newFour);
  };

  const handleSix = () => {
    const newSix = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setCount(newSix);
  };

  return (
    <div>
      {runs > 50 && <p>You Score 50</p>}
      <p><small>Total Sixes: {sixes}</small></p>
      <p><small>Total Fours: {fours}</small></p>
      {/* <p><small>Total Singles: {runs}</small></p> */}
      <h3>Player: bangladesh batsman</h3>
      <h1>Score: {runs} </h1>
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
