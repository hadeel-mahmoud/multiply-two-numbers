import React, { useState } from "react";
function MutiplyTwoNumbers(props) {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  function multiplyNumbers() {
    props.setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
  }
  return (
    <>
      <input
        value={firstNumber}
        type="number"
        onChange={(event) => {
          setFirstNumber(event.target.value);
        }}
      />
      <input
        type="number"
        value={secondNumber}
        onChange={(event) => {
          setSecondNumber(event.target.value);
        }}
      />
      <button onClick={multiplyNumbers}>Calculator</button>
      <h2>{props.result}</h2>
    </>
  );
}
export default MutiplyTwoNumbers;
