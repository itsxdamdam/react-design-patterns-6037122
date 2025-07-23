import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ControlledForm = ({
  initialName,
  initialAge,
  initialHairColor,
}) => {
  const [name, setName] = useState(initialName || " ");
  const [age, setAge] = useState(initialAge);
  const [hairColor, setHairColor] = useState(initialHairColor || "");
  const [nameError, setNameError] = useState("")

  useEffect(() => {
    if(name.length < 2) {
setNameError("Name must be two or more characters!")
    } else {
      setNameError("")
    }
  }, [name])

  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();

  const handleSubmit = (e) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      {nameError && <p>{nameError}</p>}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
        placeholder="Name"
      />
      <input
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        name="age"
        type="number"
        placeholder="Age"
      />
      <input
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
        name="hairColor"
        type="text"
        placeholder="Hair Color"
      />
      <button>Submit</button>
    </form>
  );
};
