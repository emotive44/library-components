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
import Dots from './components/Dots/Dots';
import Note from './components/Note/Note';
import NotFound from './components/NotFound/NotFound';
import Accordion from './components/Accordion/Accordion';
import Text from './components/Text/Text';
import Notification from './components/Notification/Notification';
import Modal from './components/Modal/Modal';
import CustomScroll from './components/CustomScroll/CustomScroll';
import { Tabs, Tab } from './components/Tabs';
import Datepicker from './components/Datepicker/Datepicker';
import RangeSlider from './components/RangeSlider/RangeSlider';
import Carousel from './components/Carousel/Carousel';
import { Select, Option } from './components/Select';
import Tag from './components/Tag/Tag';


interface IState {
  [key: string]: any,
  multiSelect: string[]
}

function App() {
  const [state, setState] = useState<IState>({
    age         : '', 
    job         : '',
    bio         : '',
    name        : '',
    date        : '',
    email       : '',
    search      : '',
    salary      : '',
    password    : '',
    thirdBio    : '',
    secondBio   : '',
    thirdEmail  : '',
    secondEmail : '',
    range       : '',
    select      : '',
    multiSelect : [],
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

  const arrayWithImgs = [
    'https://images.unsplash.com/photo-1581320546160-0078de357255?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    'https://images.unsplash.com/photo-1552580535-49f1f22dfbcb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=694&q=80',
    'https://images.unsplash.com/photo-1598294203210-2be32d3bf7be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
    'https://images.unsplash.com/photo-1547336863-6491b008052b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1214&q=80',
    'https://images.unsplash.com/photo-1567364301956-d143bd377905?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80',
    'https://images.unsplash.com/photo-1564097449148-f629e6dc0402?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80',
  ];

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setState(prev => ({
        ...prev,
        [name] : value,
    }));
  }

  const dateChangeHandler = (date: string, name: string) => {
    setState(prev => ({
      ...prev,
      [name]: date,
    }))
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

  const selectChangeHandler = (value: string, multi?: false, remove?: false) => {
    // reset values for multiselect
    if(multi && value === '') {
      setState(prev => ({
        ...prev,
        multiSelect: [],
      }));
      return;
    }

    // remove selected values from multi select
    if(multi && remove) {
      setState(prev => ({
        ...prev,
        multiSelect: prev.multiSelect.filter(selected => selected !== value),
      }));
      return;
    }

    if(!multi) {
      setState(prev => ({
        ...prev,
        select: value,
      }));
    } else {
      setState(prev => ({
        ...prev,
        multiSelect: [...prev.multiSelect, value],
      }));
    }
  }

  const submitHandler = () => {
    console.log(state);
  }

  const ModalFooter = (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>Modal Footer</div>
      <Button>Send</Button>
    </div>
  );

  const ModalMain = (
    <div>
      <p>Custom Modal Main Content Custom Modal Main Content Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
      <p>Custom Modal Main Content</p>
    </div>
  );

  return (
    <>
      {/* <Modal 
        main                  = {ModalMain}
        title                 = "Modal Title"
        footer                = {ModalFooter}
      /> */}
    
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

        <Divider title="Title" />

        <Divider icon={<i className="fas fa-user" />} horizontal/>

        <p></p>

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
          <Button type="link" href="login" newBlank >
            <i className="fas fa-user" />
            Go to link
          </Button>
        </div>

        <div className={classes.flex}>
          <Avatar abbr="Marko Streleshki" />
          <Avatar abbr="Vildan V" />
          <Avatar abbr="Georgi A" />
          <Avatar abbr="Nikolay" />
          <Avatar 
            abbr               = "Marko"
            image              = "https://scontent.fsof9-1.fna.fbcdn.net/v/t1.0-9/45359201_1776432789146396_8383390134426402816_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=v_bx88Op0_YAX9653kW&_nc_ht=scontent.fsof9-1.fna&oh=12e1d3afec812afb5a16ebfb488f1bcb&oe=6023D3E0" 
          />
        </div>
      
        <Dots 
          count                =  {4} 
          dotSize              =  {5}
          dotColor             =  '#b6babd'
        >
          Some Text
        </Dots>
     
        <Note size={15} >
          This is note
        </Note>

        <p>-</p>

        <Accordion>
          <div title = 'First Title'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, culpa.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae?</p>
          </div>
          <div title = 'Second Title'>
            <div>Some text</div>
            <div>Some text</div>
            <div>Some text</div>
            <div>Some text</div>
            <div>Some text</div>
          </div>
          <div title = 'Third Title'>
            <i className="fas fa-user" />
            <span style={{ marginLeft: '1rem' }} >Some text</span>
          </div>
        </Accordion>

        <Accordion multipleOpen>
          <div title = 'Multi open'>
            <p>Multi open</p>
          </div>
          <div title = 'Second Title'>
            <div>Some text</div>
            <div>Some text</div>
            <div>Some text</div>
          </div>
        </Accordion>

        <Accordion 
                                  // check for size of window, like media query 
          maxWidth             = {window.innerWidth > 800 ? 40 : 11} 
          sectionHeight        = {15} 
          horizontal 
        >
          <div title = 'Multi open'>
            <p>Multi open Multi open</p>
          </div>
          <div title = 'Second Title'>
            <div>Some text sa djasdj oaisdj saoid jaosidj aosidji aod a</div>
            <div>Some text</div>
            <div>Some text</div>
          </div>
        </Accordion>

        <Text
          fontSize             = {18}
          lineHeight           = {30}
          textIndent           = {20}
          wordSpacing          = {10}
          letterSpacing        = {10}
          color                = 'red'
          verticalAlign        = "top"
          fontWeight           = "900"
          textAlign            = "right"
          textTransform        = 'uppercase'
          textDecoration       = {['line-through', 'overline', 'underline']}
        >
          text component
        </Text>

        <CustomScroll size="small" >
          <div style={{ height: '6rem', width: '5rem', margin: '0 auto'}}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </div>
        </CustomScroll>

        <Datepicker 
          name                  = "date"
          label                 = "Your Label"
          maxDate               = "2020-03-12"
          minDate               = "2020-01-12"
          callbackChange        = {dateChangeHandler}
        />

        <Tabs position="top">
          <Tab 
            label="tabname1"
            tabName="Tabname1" 
            icon={<i className="fas fa-user" />}
          >
              <p>Tabname 1 Content</p>
              <p>1111</p>
          </Tab>
          <Tab 
            label="tabname-user"
            icon={<i className="fas fa-user" />}
          >
              <p>Tabname 2 Content</p>
              <p>2222</p>
          </Tab>
          <Tab 
            label="tabname3"
            tabName="Tabname3"
          >
              <p>Tabname 3 Content</p>
              <p>3333</p>
          </Tab>
        </Tabs>

        <RangeSlider
          minValue              = {1}
          maxValue              = {99}
          defaultValue          = {21}
          name                  = "range"
          value                 = {state.range}
          onChange              = {inputChangeHandler}
        />

        <div style={{ maxHeight: '10rem', minWidth: '25rem' }}>    
          <Select 
            clearable
            searchable
            optsMaxHeight       = {300}
            label               = "Car Model"
            value               = {state.select}
            placeholder         = "Select car...."
            err                 = "Please select value"
            onChange            = {selectChangeHandler}
          > 
            <Option value={'Audi  Audi Audi  Audi Audi Audi AudiAudiAudiAudiAudiAudi Audi Audi   Audi Audi Audi Audi Audi Audi Audi  Audi Audi Audi Audi Audi Audi Audi'} icon={<i className="fas fa-user" />} />
            <Option value={'BMW'} icon={<i className="fas fa-user" />} />
            <Option value={'Opel'} icon={<i className="fas fa-user" />} />
            <Option value={'Mercedes'} icon={<i className="fas fa-user" />} />
            <Option value={'Ford'}/>
            <Option value={'Renault'}> 
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                <span>Custom Template</span>
                <small>one</small>
                <p>Two</p>
              </div>
            </Option>
          </Select>
        </div>

        
        <div>    
          <Select
            multiple
            clearable
            searchable
            optsMaxHeight       = {300}
            label               = "Car Model Multi"
            value               = {state.multiSelect}
            placeholder         = "Select car...."
            onChange            = {selectChangeHandler}
          > 
            <Option value={'Audi'} icon={<i className="fas fa-user" />} />
            <Option value={'BMW'} icon={<i className='fas fa-times' />} />
            <Option value={'Opel'} >
              <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                <small
                  style={{width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'red'}}
                />
                <span>User one</span>
              </div>
            </Option>
            <Option value={'Mercedes'} icon={<i className="fas fa-user" />} />
            <Option value={'Ford'} icon={<i className="fas fa-user" />} />
          </Select>
        </div>
      </div>

      {/* <div style={{ width: '70%', margin: '1rem auto', height: '30rem'}} >
        <Tabs position="right">
          <Tab 
            label="tab1"
            tabName="Tabname1 ds dfdsf sdf fsd " 
            icon={<i className="fas fa-user" />}
          >
              <p>Tabname 1 Content</p>
              <p>1111</p>
          </Tab>
          <Tab 
            label="tab-user"
            tabName="Tabname two" 
            icon={<i className="fas fa-user" />}
          >
              <p>Tabname 2 Content</p>
              <p>2222</p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam iure nobis, dolore aliquid dolorum necessitatibus tempora numquam, earum sint accusantium, ducimus molestias quisquam quaerat ea asperiores temporibus ut adipisci veritatis optio. Ipsa numquam illo nobis voluptates perferendis, in temporibus illum nihil culpa consectetur iusto cupiditate esse eos voluptatum earum? Eum ut obcaecati dolor. Architecto laborum iste animi libero quas magnam.
          </Tab>
          <Tab 
            label="tab3"
            tabName="Tabname thee" 
            icon={<i className="fas fa-user" />}
          >
              <p>Tabname 3 Content</p>
              <p>3333</p>
          </Tab>
        </Tabs>
      </div> */}

      <Notification
        type                  = "warning"
        title                 = "Warning"
        position              = "bottom-left"
        message               = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, earum."
        autoClose
        secondsDelay          = {3}
      />

      <div className={classes.flex}>
        <Tag type="warning" text="Some Text" closeClickCallback/>
        <Tag type="dark" text="Some Text" closeClickCallback />
        <Tag type="success" text="Some Text" />
        <Tag type="light" text="Text" closeClickCallback />
        <Tag type="danger" text="Text" icon={<i className="fas fa-user" />} closeClickCallback />
        <Tag type="secondary" closeClickCallback> 
          <p>ONE</p>
          <span>Username</span>
          <small 
            style={{width: '25px', height: '25px', margin: '0 1rem', backgroundColor: 'red', borderRadius: '50%'}}
          />
         </Tag>
      </div>

      <div style={{ width: '90%', margin: '10rem auto', height: '45rem' }}>
        <Carousel 
          imgData={arrayWithImgs} 
          // clickImgChange
          withFooter
        />
      </div>

      <Button fullWidth>
        Full width button
      </Button>

      <NotFound 
        title                 = "Not Found Page" 
        message               = "Some message" 
        icon                  = {<i className="fas fa-user" />}
      >
          <div>Children Content</div>
      </NotFound>
    </>
  );
}

export default App;