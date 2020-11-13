import React, { useState } from "react";
import classes from "./App.module.css";

import Input from "./components/Input/Input";
import TextArea from './components/TextArea/TextArea';
import CheckBox from './components/CheckBox/CheckBox';


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
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setState(prev => ({
        ...prev,
        [name] : value,
    }));

    if(e.currentTarget.type === 'checkbox') {
      setState(prev => ({
        ...prev,
        [name]: e.target.checked,
      }));
    }
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
            callbackChange    = {changeHandler}
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
            callbackChange    = {changeHandler}
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
            callbackChange    = {changeHandler}
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
            callbackChange    = {changeHandler}
          />
        </div>
        <div>
          <Input 
            name              = "password"
            type              = "password" 
            label             = "password" 
            value             = {state.password}
            callbackChange    = {changeHandler}
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
            callbackChange    = {changeHandler}
          />
        </div>
        <div>
          <Input 
            largeInput 
            labelInside 
            type              = "email" 
            label             = "Email" 
            name              = "secondEmail"
            callbackChange    = {changeHandler}
            value             = {state.secondEmail}
          />
        </div>
        <div>
          <Input 
            largeInput 
            leftIcon 
            type              = "email" 
            label             = "Email"
            name              = "thirdEmail"
            callbackChange    = {changeHandler} 
            value             = {state.thirdEmail}
          />
        </div>
        <div>
          <Input 
            leftIcon 
            type              = "search" 
            name              = "search"
            placeHolder       = "Search" 
            value             = {state.search}
            callbackChange    = {changeHandler}
          />
        </div>

        <div>
          <TextArea 
            name              = "bio"
            label             = "secondBio"
            value             = {state.bio}
            placeHolder       = "Bio" 
            calbackChange     = {changeHandler}
          />
        </div>
        <div>
          <TextArea 
            labelLeft 
            id                = "sBio"
            label             = "secondBio"
            name              = "secondBio"
            calbackChange     = {changeHandler} 
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
            calbackChange     = {changeHandler}
            value             = {state.thirdBio}
            defaultValue      = "readonly + disabled" 
          />
        </div>

        <div style={{ display: 'flex' }}>
          <CheckBox 
            name              = "male"
            label             = "Male"
            checked           = {state.male}
            callbackChange    = {changeHandler}
          />
          <CheckBox 
            leftLabel 
            name              = "female"
            label             = "Female"
            checked           = {state.female}
            callbackChange    = {changeHandler}
          />
          <CheckBox 
            name              = "other"
            label             = "Other"
            checked           = {state.other}
            callbackChange    = {changeHandler}
          />
        </div>
      </div>
    </>
  );
}

export default App;
