import React, { useState } from "react";
import classes from "./App.module.css";

import Input from "./components/Input/Input";
import TextArea from './components/TextArea/TextArea';
import CheckBox from './components/CheckBox/CheckBox';
import RadioBtn from './components/Radio/RadioBtn';


function App() {
  const [state, setState] = useState({
    age         : '', 
    job         : '',
    bio         : '',
    name        : '',
    email       : '',
    search      : '',
    salary      : '',
    password    : '',
    thirdBio    : '',
    secondBio   : '',
    thirdEmail  : '',
    secondEmail : '',
    male        : false,
    female      : false,
    other       : false,
    radio1      : false,
    radio2      : false,
  });
  const [radioValue, setRadioValue] = useState('radio1');
  const radioBtns = { radio1: false, radio2: false }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setState(prev => ({
        ...prev,
        [name] : value,
    }));
  }

  const checkBoxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setState(prev => ({
      ...prev,
      [name]: checked,
    }));
  }

  const radioBtnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    setState(prev => ({
      ...prev,
      ...radioBtns,
      [name]: checked,
    }));

    setRadioValue(value);
  }

  const submitHandler = () => {
    console.log(state);
  }
  return (
    <>
      <span onClick={submitHandler}>Submit</span>
      <div className={classes.app}>
        <div>
          <Input
            mediumInput
            label             = "Age"
            name              = "age"
            type              = "number"
            value             = {state.age}
            err               = "error message"
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input
            leftIcon
            largeInput
            labelInside
            name              = "name"
            type              = "text"
            label             = "Username"
            pattern           = {"[A-Z]+"}
            value             = {state.name}
            err               = "error message"
            callbackChange    = {inputChangeHandler}
            icon              = {<i className="fas fa-user" />}
          />
        </div>

        <div>
          <Input 
            label             = "Job"
            name              = "job" 
            type              = "text" 
            value             = {state.job}
            defaultValue      = "programmer" 
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input 
            step              = {500} 
            defaultValue      = {500} 
            label             = "Count"
            type              = "number" 
            name              = "salary" 
            value             = {state.salary}
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input 
            name              = "password"
            type              = "password" 
            label             = "password" 
            value             = {state.password}
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input 
            leftIcon 
            mediumInput 
            name              = "email"
            type              = "email"  
            placeHolder       = "Email" 
            value             = {state.email}
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input 
            largeInput 
            labelInside 
            type              = "email" 
            label             = "Email" 
            name              = "secondEmail"
            value             = {state.secondEmail}
            callbackChange    = {inputChangeHandler}
          />
        </div>
        <div>
          <Input 
            largeInput 
            leftIcon 
            type              = "email" 
            label             = "Email"
            name              = "thirdEmail"
            value             = {state.thirdEmail}
            callbackChange    = {inputChangeHandler} 
            />
        </div>
        <div>
          <Input 
            leftIcon 
            type              = "search" 
            name              = "search"
            placeHolder       = "Search" 
            value             = {state.search}
            callbackChange    = {inputChangeHandler}
          />
        </div>

        <div>
          <TextArea 
            name              = "bio"
            label             = "secondBio"
            value             = {state.bio}
            placeHolder       = "Bio" 
            calbackChange     = {inputChangeHandler}
          />
        </div>
        <div>
          <TextArea 
            labelLeft 
            id                = "sBio"
            label             = "secondBio"
            name              = "secondBio"
            calbackChange     = {inputChangeHandler} 
            value             = {state.secondBio}
          />
        </div>
        <div>
          <TextArea 
            readonly 
            disabled 
            nonResize 
            labelRight 
            name              = "thirdBio"
            label             = "right Label" 
            calbackChange     = {inputChangeHandler}
            value             = {state.thirdBio}
            defaultValue      = "readonly + disabled" 
          />
        </div>

        <div style={{ display: 'flex' }}>
          <CheckBox 
            name              = "male"
            label             = "Male"
            checked           = {state.male}
            callbackChange    = {checkBoxChangeHandler}
          />
          <CheckBox 
            leftLabel 
            name              = "female"
            label             = "Female"
            checked           = {state.female}
            callbackChange    = {checkBoxChangeHandler}
          />
          <CheckBox 
            name              = "other"
            label             = "Other"
            checked           = {state.other}
            callbackChange    = {checkBoxChangeHandler}
          />
        </div>

        <div style={{ display: 'flex' }}>
          <RadioBtn 
            leftLabel
            name              = "radio1"
            label             = "Radio1"
            value             = "radio1"
            callbackChange    = {radioBtnChangeHandler}
            checked           = {radioValue === "radio1"}
          />
          <RadioBtn 
            name              = "radio2"
            label             = "Radio2"
            value             = "radio2"
            callbackChange    = {radioBtnChangeHandler}
            checked           = {radioValue === "radio2"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
