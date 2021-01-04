import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import sound from '../sound.mp3'


function Timer (){

    const  [timeRemaining, setTimeRemaining] = useState(1200+60*5)
    const  [isActive, setIsActive] = useState(false)
  
  
  const [makeSound] = useSound(sound,{volume:0.25})

  // Start Timer depending on State -> isActive
  useEffect(()=>{
    if(isActive){
      const id = window.setInterval(()=>{
            setTimeRemaining(seconds => seconds -1)
        },1000)
        return () => window.clearInterval(id)
    }
    return undefined
  },[isActive])


// Play Sound as soon as Timer has finished
//
  useEffect(()=>{
    if(timeRemaining <= 0){
      makeSound()
      setTimeRemaining(1200+60*5)
      setIsActive(false)

  }
  },[timeRemaining, makeSound])
  
  const styleClock = !isActive ? {cursor: "wait",
    opacity: "0.6"} : null

  return(
    <div className="app">
    <div className='time-circle'>
      <div className="time" style={styleClock} >
        {Math.floor(timeRemaining/60)}:{timeRemaining % 60}
      </div>
    </div>
    <div className="buttons">
      <button name="start" className="play-pause" onClick={()=> setIsActive(true)}  disabled={isActive}>
        <i className="fa fa-play fa-2x" />
      </button>
      <button className="play-pause" onClick={()=> setIsActive(false)} name="pause" disabled={!(isActive)}>
        <i className="fa fa-pause fa-2x" />
      </button>
      <button className="reset" onClick={()=>{setTimeRemaining(1200); setIsActive(false)}} disabled={timeRemaining === 1200}>
        Reset
      </button>

    </div>
  </div>

  )

    
}

export default Timer