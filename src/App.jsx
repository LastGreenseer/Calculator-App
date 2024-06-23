import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

//'App' will handle the calculater's logic and display
const App = () => {
  //'State' is a method of managing and storing data that can change
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    ".",
    "=",
    "C",
  ];

  const handleClick = (button) => {
    if (button === "=") {
      //Evaluate current expression in 'input'
      try {
        const calculatedResult = evaluate(input);
        setResult(calculatedResult.toString());
        setInput("");
      } catch (error) {
        setResult("Error");
      }
    } else if (button === "C") {
      setInput("");
      setResult("");
    } else {
      const lastChar = input.slice(-1);
      // This check prevents multiple consecutive operators (e.g., `++`,`--`, etc) and multiple decimals in a single number
      if (
        ["+", "-", "*", "/", "."].includes(button) &&
        ["+", "-", "*", "/", "."].includes(lastChar)
      ) {
        return;
      }
    setInput((prevInput) => prevInput + button);  
    }
    
  };

  return (
    <div className="centre">
      <h2>Ryan's Calculater</h2>
      <div className="calculater">
        <div className="display">
          <div className="inputDisplay">{input}</div>
          <div className="resultDisplay">{result}</div>
        </div>

        {/* Responsible for displaying the calculator buttons on the screen and handling what happens when each button is clicked. */}
        <div className="buttonWrap">
          {buttons.map(
            (
              button,
              index //  Iterates over the 'buttons' array. The 'map' function takes a callback function and applies it to each element of the array.
            ) => (
              // buttons are created from the 'buttons' array
              <button
                key={index} // React requires a 'key' attribute for list items to uniquely identify them. Here, we use the 'index' of the button in the array as the key.
                onClick={() => handleClick(button)}
                className="btn"
              >
                {button}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
