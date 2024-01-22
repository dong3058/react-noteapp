import React from 'react'
import "./sidebar.css"
import Notes from "./Notes.js"
import {useState,useEffect} from "react"

function Sidebar({title,settitle,editmodal,seteditmodal,check,check2,setcheck2}) {

console.log("sidebarreload")
const setting=(e)=>{
    settitle(e.target.textContent)
    console.log(e.target.textContent)

    }
const modalon=()=>{
    setcheck2(!check2)
    seteditmodal(!editmodal)
    console.log("edit")
    console.log(editmodal)


}
const update=useEffect(()=>{
  if(localStorage.getItem("tags")==null){}
  else{
      let datas=JSON.parse(localStorage.getItem("tags"))
      let divs=document.querySelector(".addlist")
      while(divs.firstChild){
        divs.removeChild(divs.firstChild)
      }
     
    
      datas.map(el=>{

        let btns=document.createElement("button")
        btns.className="btns"
        btns.textContent=el.title
        

        btns.addEventListener("click",()=>{
            settitle(el.title)
        })


        divs.append(btns)


      })



  }

},[check])

 
    return(
      <div>
      <div className="sidebars">
             
          <button className="btns" onClick={setting}>Notes</button>
          <divs className="addlist"></divs>
         
          <button className="btns" onClick={modalon}>edit notes</button>
          <button className="btns">Trash</button>

         
      </div>
  </div>


    )





}

export default Sidebar