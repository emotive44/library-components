import React, { useState } from "react";
import classes from "./App.module.css";

import Input from "./components/Input/Input";
import TextArea from './components/TextArea/TextArea';
import CheckBox from './components/CheckBox/CheckBox';
import RadioBtn from './components/Radio/RadioBtn';
import Toggle from './components/Toggle/Toggle';
import InfoBox from './components/InfoBox/InfoBox';
import Divider from './components/Divider/Divider';
import Tooltip from './components/Tooltip/Tooltip';
import Button from './components/Button/Button';
import Avatar from './components/Avatar/Avatar';

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
    toggle1     : false,
    toggle2     : false,
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

        <div className={classes.flex}>
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

        <div className={classes.flex}>
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

        <div className={classes.flex}>
          <Toggle 
            leftLabel
            name              = "toggle1"
            label             = "Toggle"
            checked           = {state.toggle1}
            callbackChange    = {checkBoxChangeHandler}
          />
          <Toggle 
            name              = "toggle2"
            label             = "Toggle"
            checked           = {state.toggle2}
            callbackChange    = {checkBoxChangeHandler}
          />
        </div>

        <InfoBox title='Title'>
          <h3>Subtitle</h3>
          <p>Content</p>
        </InfoBox>

        <Divider title="Title" basicDivider />

        <Divider icon={<i className="fas fa-user" />} basicDivider />

        <Divider 
          basicDivider 
          imgSrc              = "https://static.thenounproject.com/png/1070843-200.png"
        />

        <Tooltip message="Tooltip message Tooltip message">
          <p>Tooltip top</p>
        </Tooltip>

        <Tooltip position="left"  message="Tooltip message Tooltip message ">
          <p>Tooltip left</p>
        </Tooltip>

        <Tooltip position="right"  message="Tooltip message Tooltip message Tooltip message Tooltip message Tooltip message ">
          <p style={{textAlign: 'right'}}>Tooltip right</p>
        </Tooltip>

        <p></p>

        <Tooltip position="bottom"  message="Tooltip message Tooltip message ">
          <p>Tooltip bottom</p>
        </Tooltip>

        <div className={classes.flex}>
          <Button>Send Message</Button>
          <Button type="secondary">Send Message</Button>
          <Button type="success" outline>Send Message</Button>
          <Button type="danger">Send Message</Button>
        </div>

        <div className={classes.flex}>
          <Button type="warning">Send Message</Button>
          <Button type="light">Send Message</Button>
          <Button type="dark" loading>Send Message</Button>
          <Button type="link" href="login" newBlank >Go to link</Button>
        </div>

        <div className={classes.flex}>
          <Avatar abbr="Marko" />
          <Avatar abbr="Vildan" />
          <Avatar abbr="Georgi" />
          <Avatar abbr="Nikolay" />
          <Avatar 
            abbr               = "Marko"
            image              = "https://scontent.fsof9-1.fna.fbcdn.net/v/t1.0-9/45359201_1776432789146396_8383390134426402816_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=v_bx88Op0_YAX9653kW&_nc_ht=scontent.fsof9-1.fna&oh=12e1d3afec812afb5a16ebfb488f1bcb&oe=6023D3E0" 
          />
        </div>
      
      </div>

      <Button fullWidth>
        Full width button
      </Button>

      <div style={{ margin: '3rem 0' }}>
        <Divider 
          basicDivider 
          longerLines
          imgSrc              = "https://cdn.dribbble.com/users/46067/screenshots/446200/hr.png"
        />
      </div>
    </>
  );
}

export default App;