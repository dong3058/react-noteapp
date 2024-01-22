import React, { useEffect } from 'react'

function Listags({settitle}) {

  console.log("Reload")
 const update=useEffect(()=>{
    if(localStorage.getItem("tags")==null){}
    else{
        let datas=JSON.parse(localStorage.getItem("tags"))
        let divs=document.querySelector("div")
        datas.map(el=>{
            let btn=document.createElement("button")
            btn.className="btns"
            btn.textContent=el
            btn.addEventListener("click",()=>{

                settitle(el)

            })

            divs.append(btn)


        })



    }

 },[])

  return (
    <div></div>
  )
}

export default Listags