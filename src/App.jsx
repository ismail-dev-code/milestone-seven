import "./App.css";

function App() {
  function handleClick() {
    alert("i am clicked sir");
  }
  const handleClick3 = () => {
    alert("clicked 3");
  };
  const handleClick5 = (sum)=>{
    const newNum = sum + 5;
    alert(newNum)
  }
  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick() {
          alert("clicked 2 sir");
        }}
      >
        Click Me2
      </button>
      <button onClick={handleClick3}>click me 3</button>
      <button onClick={()=>{alert("im clicked 4")}}>click me 4</button>
      <button onClick={()=>handleClick5(132)}>click me 5</button>
    </>
  );
}

export default App;
