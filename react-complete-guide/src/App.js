import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Moisés", age: 33 },
      { name: "Carina", age: 35 },
      { name: "Marcos", age: 31 },
    ],
    otherState: "Some othe state",
  });

  console.log(personsState);
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Moisés P R", age: 33 },
        { name: "Carina K P", age: 36 },
        { name: "Marcos P R", age: 31 },
      ],
      otherState: personsState.otherState,
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        My hobbies: Jiu-Jistu
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
