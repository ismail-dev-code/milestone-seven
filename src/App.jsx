import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDo from "./Todo";

function App() {
  return (
    <>
      <h1>React Core Concept</h1>
      <ToDo task='learn react' isDone={true} time='0'></ToDo>
      <ToDo task='revise js' isDone={false} time='10'></ToDo>
      <ToDo task='take a shower' isDone={true} time='10'></ToDo>
      {/* <Student name="abul" id="244"></Student>
      <Person></Person>
      <Animal name="market" id="21"></Animal>
      <Developer name="mozumder" tech="JS"></Developer>
      <Developer name="kolimuddin" tech="Python"></Developer>
      <Developer name="shabana" tech="Java"></Developer>
      <Players name="tamim" runs="5000"></Players>
      <Players name="mushfiqur" runs="6000"></Players>
      <Salami event='rojar eid'></Salami> */}
    </>
  );
}

function Salami({event, amount=0}){
  return(
    <div className="Student">
      <h4>salami for: {event} </h4>
      <h4>amount: {amount} </h4>
    </div>
  )
}

// const {name, runs} ={name: 'mushfiqur', runs: '6000'}
function Players({name, runs}) {
  return (
    <div className="Student">
      <h3>Player: {name}</h3>
      <h3>Runs: {runs}</h3>
    </div>
  );
}

function Developer(props) {
  
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "10px",
        marginTop: "12px",
        borderRadius: "10px",
      }}
    >
      <h2>Developer: {props.name}</h2>
      <h2>Technologies: {props.tech}</h2>
    </div>
  );
}

function Student(props) {
  return (
    <div className="Student">
      <p>Name: {props.name}</p>
      <p>Student id: {props.id}</p>
    </div>
  );
}

function Person() {
  const name = "abul";
  const age = 10;

  const personStyle = {
    color: "red",
  };

  return (
    <p style={personStyle}>
      I am a person {name} age {age}{" "}
    </p>
  );
}
function Pet() {
  return <h3>biraler ghor</h3>;
}
function Animal(props) {
  return (
    <div>
      <h2>List of animal</h2>
      <ul>
        <li>dog {props.name}</li>
        <li>goat {props.id}</li>
        <li>birds</li>
      </ul>
    </div>
  );
}

function Sports() {
  const members = 11;
  return (
    <div>
      <h1>cricket</h1>
      <ul>
        <li>team {members}</li>
        <li>abul</li>
        <li>ghabla</li>
      </ul>
    </div>
  );
}

export default App;
