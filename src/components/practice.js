import React from "react";
import { useState } from "react";
function practice() {
  const [person, setperson] = useState({
    name: "saif",
    age: 21,
  });

  function myfunc() {
    setperson({ ...person, name: (person.name = "ali") });
  }

  return (
    <div>
      <h1>Hello i am the Main Section!!</h1>
      <h2>My name is {person.name}</h2>
      <h2>My age is {person.age}</h2>
      <button onClick={myfunc}>update person</button>
    </div>
  );
}

export default practice;
