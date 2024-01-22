import logo from './logo.svg';
import './App.css';
import Topbar from "./component/Topbar.js"
import Sidebar from "./component/Sidebar.js"

import {useState} from "react"
import Editmodal from  "./component/Editmodal.js"
function App() {
  const [title,settitle]=useState("Notes")
  const [editmodal,seteditmodal]=useState(false)
  const [check,setcheck]=useState(true);
  const [check2,setcheck2]=useState(true)
  const getstyle=(editmodal)=>{

    return {
      backgroundColor: editmodal? "rgba(0,0,0,0.7)":"rgba(0,0,0,0)",
      zIndex:editmodal? "30":"0",
      width:editmodal?  "100%":"0px",
      height:editmodal? "100%":"0px",
      position: editmodal? "absolute":"static"
    }


  }

  return (
    
    <div className="App">
    <Editmodal modal={editmodal} seteditmodal={seteditmodal} setcheck={setcheck} check={check} check2={check2}/>
    <div className="blur" style={getstyle(editmodal)}></div>
    
    
    <Sidebar title={title} settitle={settitle} editmodal={editmodal} seteditmodal={seteditmodal}
     check={check} check2={check2} setcheck2={setcheck2}/>
    <Topbar title={title}/>
  
    </div>
  );
}

export default App;
