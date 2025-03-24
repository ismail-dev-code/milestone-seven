import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const counterStyle = {
    border: "2px solid aquamarine",
  };
  return (
    <div style={counterStyle}>
      <h1>counter: {count}</h1>
      <button onClick={handleAdd}>add:</button>
    </div>
  );
}
