import "./App.css";
import Counter from "./counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriend = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
const friendsPromise = fetchFriend()


  function handleClick() {
    alert("i am clicked sir");
  }
  const handleClick3 = () => {
    alert("clicked 3");
  };
  const handleClick5 = (sum) => {
    const newNum = sum + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Counter></Counter>
      <Batsman></Batsman>

      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick() {
          alert("clicked 2 sir");
        }}
      >
        Click Me2
      </button>
      <button onClick={handleClick3}>click me 3</button>
      <button
        onClick={() => {
          alert("im clicked 4");
        }}
      >
        click me 4
      </button>
      <button onClick={() => handleClick5(132)}>click me 5</button>
    </>
  );
}

export default App;
