import React from 'react'
import "./editmodal.css"
import {useState,useEffect,useRef} from "react"
function Editmodal({modal,seteditmodal,setcheck,check,check2}) {
    console.log("modalreload")
    const [text,setext]=useState("")
    const mounted=useRef(false);
    const quits=()=>{
        
        seteditmodal(!modal)
        setcheck(check)
        let tags=document.querySelector(".tagedit")

        

    }
    const changes=(e)=>{

       setext(e.target.value)

    }

    const submits=(e)=>{
        setext("")
        e.preventDefault()
        if(JSON.parse(localStorage.getItem("tags"))==null){
            const datas={title:e.target.children[0].value}
            localStorage.setItem("tags",JSON.stringify([datas]))
            let divs=document.createElement("div")
            divs.textContent=e.target.children[0].value
            let divs2=document.querySelector(".addlist2")



            let buttons=document.createElement("button")
            buttons.textContent="delete"
            buttons.addEventListener("click",()=>{

                let filters=JSON.parse(localStorage.getItem("tags"))
                filters=filters.filter(el=>el.title!==datas.title)
                
                localStorage.setItem("tags",JSON.stringify([...filters]))
                console.log("remove!")
                divs.remove()
               

            })

            divs.appendChild(buttons)



            




            divs2.append(divs)
        }
        else{
            
            let datas=JSON.parse(localStorage.getItem("tags"))
            let divs=document.createElement("div")
            divs.textContent=e.target.children[0].value
            let divs2=document.querySelector(".addlist2")
            
            let datas2={title:e.target.children[0].value}
            localStorage.setItem("tags",JSON.stringify([...datas,datas2]))


            let buttons=document.createElement("button")
            buttons.textContent="delete"
            buttons.addEventListener("click",()=>{

                let filters=JSON.parse(localStorage.getItem("tags"))
                filters=filters.filter(el=>el.title!==datas2.title)
                
                console.log("filters:",filters)
                localStorage.setItem("tags",JSON.stringify([...filters]))
                console.log("remove!")
                divs.remove()
                

            })


            divs.appendChild(buttons)
            divs2.append(divs)




        }
        
        
    }


    const first=useEffect(()=>{


        if(!mounted.current){
            mounted.current=true;
        }
        else{
        
        let tags=document.querySelector(".tagedit")
        
        console.log("useeffect")
        if(JSON.parse(localStorage.getItem("tags"))==null){

        }
        else{
        let divs2=document.querySelector(".addlist2")
        while(divs2.firstChild){
            divs2.removeChild(divs2.firstChild)
        }
        let datas=JSON.parse(localStorage.getItem("tags"))
        datas.map(el=>{
            
            
            let divs=document.createElement("div")
            divs.textContent=el.title
            



            let buttons=document.createElement("button")
            buttons.textContent="delete"
            buttons.addEventListener("click",()=>{
                console.log("Deletecheck")
                console.log("el:",el.title)
                let filters=JSON.parse(localStorage.getItem("tags"))
                filters=filters.filter(el2=>el2.title!=el.title)
                
                localStorage.setItem("tags",JSON.stringify([...filters]))
                divs.remove()

            })

            divs.appendChild(buttons)
            divs2.append(divs)


        })}}



    },[check2])//modal 을 쓰지않는 이유는
    //x창을 눌러서끌떄 modal이 false가돈다 즉 이떄 변화가 생기면서 이함수가 한번더
    //실행되는대 modal=false이면 빈 hhtml를 주므로 어떤것도 찾을수없어서 오류가 생긴다.
    //그러나 check2의 경우 밖의것 즉 sidebar에서 다루기에 x를 누른다고 변화가없다.


    if (modal){
        return(
        <div>
            <div className="tagedit">
                <button className="quit" onClick={quits}>X</button>
                <form onSubmit={submits}>

                    <input className="addtag" value={text} onChange={changes}/>

                </form>

                <div className="addlist2"></div>
            </div>
            
        </div>

        )

    }


    else{
  return (
        <div>

        </div>
  )}
}

export default Editmodal