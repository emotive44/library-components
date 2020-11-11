import React from "react";
import classes from "./App.module.css";

import Input from "./components/Input/Input";

function App() {
  return (
    <div className={classes.app}>
      <div>
        <Input
          type="text"
          pattern={"[A-Z]+"}
          err="error message"
          label="label input"
          mediumInput
        />
      </div>
      <div>
        <Input
          type="text"
          pattern={"[A-Z]+"}
          err="error message"
          label="label input"
          largeInput
          labelInside
          leftIcon
          icon={<i className="fas fa-user" />}
        />
      </div>

      <div>
        <Input type="text" defaultValue="default value" label="label" />
      </div>
      <div>
        <Input type="number" step={10} defaultValue={10} label="Count" />
      </div>
      <div>
        <Input type="password" label="password" />
      </div>
      <div>
        <Input type="email" placeHolder="email" leftIcon mediumInput />
      </div>
      <div>
        <Input type="email" label="email" largeInput labelInside />
      </div>
      <div>
        <Input type="email" label="email" leftIcon largeInput />
      </div>
      <div>
        <Input type="search" placeHolder="search" leftIcon />
      </div>
    </div>
  );
}

export default App;
