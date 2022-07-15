import logo from "./logo.svg";
// import "./App.css";
// import "./btn.css";
import { Routes, Route, Link } from "react-router-dom";
import Comp from "./components/firstComp";
import Challenge1 from "./components/challenge1";
import JSXexp from "./components/JSXexpression";
import Challenge2 from "./components/challenge2";
import Card from "./components/props";
import HookState from "./Aptech/Hooks";
import PracticeState from "./Aptech/practiceState";
import ToDo from "./Aptech/ToDo";
import MultiBtn from "./Aptech/MultiBtn";
import InputAss from "./Aptech/InputAss";
import AccordionAss from "./Aptech/AccordionAss";
import AccordianUseReducer from "./Aptech/AccordianUseReducer";
import BottomnavigationReducer from "./Aptech/BottomnavigationReducer";
import BTN from './Aptech/BTNState'
import Home from './PrivateRouter/Home'
import Login from './PrivateRouter/Login'
import About from './PrivateRouter/About'
import PR from './PrivateRouter/PR'
function App({name}) {
  var paraObj={
        
    para1 : "lorem1",


    para2 : "lorem2",


    para3 : "lorem3"

}
  var myValue = "Arshia";
  const myFunc = (e) => {
    return e;
  };
  
  return (
    <div className="App">
    <Routes>
     <Route path='/'  element={<PR VC={Login} />}/>
  
  <Route  path ='/home' element={<PR VC={Home} />}     />

  <Route  path ='/about' element={<PR VC={About} />}      />
  </Routes>
    </div>
  );
}

export default App;


 {/* <PracticeState  valuePass={myValue} func ={myFunc("aq")}/> */}
    
      {/* <MultiBtn/> */}
      {/* <InputAss /> */}
      {/* <Route path="/" element={<AccordionAss  btnValue="Accordion Item #1" paragraph={paraObj.para1} name="btn1"/>} />
      <Route path="/2" element={<AccordionAss   btnValue="Accordion Item #2" paragraph={paraObj.para2} name="btn2"/>} />
      <Route path="/3" element={ <AccordionAss  btnValue="Accordion Item #3" paragraph={paraObj.para3} name="btn3"/>} />
       
        */}
       
       {/* <AccordionAss  btnValue="Accordion Item #1" paragraph={paraObj.para1} name="btn1"/>
      <AccordionAss   btnValue="Accordion Item #2" paragraph={paraObj.para2} name="btn2"/>
      <AccordionAss  btnValue="Accordion Item #3" paragraph={paraObj.para3} name="btn3"/> */}
      {/* <AccordianUseReducer  btnValue="Accordion Item #1"  name="btn1"/>
      <AccordianUseReducer   btnValue="Accordion Item #2"  name="btn2"/>
      <AccordianUseReducer  btnValue="Accordion Item #3"  name="btn3"/>  */}
   {/* <BottomnavigationReducer />  */}
  {/* <BTN /> */}