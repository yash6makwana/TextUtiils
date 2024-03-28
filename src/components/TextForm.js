import React, { useState } from "react";

const TextForm = (props) => {
  const ClickHandler = () => {
    let newText = text.toUpperCase();
    serTitle(newText);
    props.showAlert("Converted to UpperCase..!!","success");
  };

  const ClickLoHandler = () => {
    let newText = text.toLowerCase();
    serTitle(newText);
    props.showAlert("Converted to LowerCase..!!","success");

  };

  const ClickClearHandler = () => {
    let newText = "";
    serTitle(newText);
    props.showAlert("Clear All Text..!!","success");

  };

  // Define a function named ClickReverseHandler
  const ClickReverseHandler = () => {
    // Split the text into an array of characters, reverse the array, and join it back into a string
    let newText = text.split("").reverse().join("");
    // Update the state variable (assuming setTtitle is a state setter function) with the reversed text
    serTitle(newText);
    props.showAlert("Converted to ReverseText..!!","success");

  };

  const handleOnChange = (event) => {
    serTitle(event.target.value);
    console.log(serTitle);
  };


  const ClickHandlerRemoveExtraSpace = () => {
    let newText = text.split(/[]+/);
    serTitle(newText.join(""))
  }




  const ClickHandlerCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Converted to CopyCase..!!","success");

  }

  const [text, serTitle] = useState("");

  return (
    <>
      <div className="container">
        <div class="mb-3">
          <h1>{props.heading}</h1>
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="3"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode === 'light'?'dark':'light'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={ClickHandler}>
          CONVERT TO UPPERCASE LETTER
        </button>
        <button className="btn btn-primary mx-2" onClick={ClickLoHandler}>
          CONVERT TO LOWERCASE LETTER
        </button>
        <button className="btn btn-primary mx-2" onClick={ClickClearHandler}>
          CLEAR LETTER
        </button>
        <button className="btn btn-primary mx-2" onClick={ClickReverseHandler}>
          CONVERT TO REVERSE LETTER
        </button>
        <button className="btn btn-primary mx-2 mt-4" onClick={ClickHandlerCopy}>
          COPY LETTER
        </button>
        <button className="btn btn-primary mx-2 mt-4" onClick={ClickHandlerRemoveExtraSpace}>
          REMOVE EXTRA SPACE
        </button>
      </div>
      <div className="container my-5">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes Read</p>
      </div>
    </>
  );
};

export default TextForm;
