import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [displayColor, setDisplayColor] = useState<string>('')
  const [answerList, setAnswerList] = useState<string[]>([])
  const [message, setMessage] = useState<string>('')
  const color = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
useEffect(()=>{
  loadAll()
},[])

const getAnswerOptions =(col:string)=>{
  const out =[col,getRandomColor(),getRandomColor()].sort(()=>(Math.random()-0.5))
  setAnswerList(out)
}
const getRandomColor =()=>{
  let currentColor ='#'
  for (let index = 0; index < 6; index++) {
    const rand = Math.ceil(Math.random()*15)
    currentColor = currentColor + color[rand]
  }
  return currentColor;
}
const loadAll =()=>{
  let col = getRandomColor()
    setDisplayColor(col)
    getAnswerOptions(col)

  }
const buttonClick =(color:string)=>{
  if(color == displayColor){
    setMessage('Correct Answer')
    setTimeout(() => {
      setMessage('')
    }, 2000);
    setTimeout(() => {
      setMessage('Continue your winning streak :)')
      loadAll()
    }, 2000);
  }
    else{
      setMessage('Wrong Answer')
      setTimeout(() => {
        setMessage('')
      }, 1000);
    }
  }

  return (
    <div className="App">
        <h2 style={{fontFamily:'sans-serif'}}>Guess the Colours</h2>
      <div className="color-box" style={{backgroundColor:displayColor}}>
      </div>
      <div className="btns">
        {
          answerList.map((item,index)=>(
            <button key={index} className="btn" onClick={()=>{buttonClick(item)}}>{item}</button>
          ))
        }
      </div>
      <div>
        {
          message.length ==12 ?
          <p style={{color:'red'}} className="msgclass">{message}</p>
          :
          message.length==0? 
          <p className="msgclass">{}</p>
          :
          <p style={{color:'green'}} className="msgclass">{message}</p> 
        }
      </div>

    </div>
  );
}

export default App;
