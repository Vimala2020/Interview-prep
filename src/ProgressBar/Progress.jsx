
import React, { useEffect, useState } from 'react'

function Progress({value=0, onComplete=()=>{}}) {
 const [percent, setPercent]=useState(value);
 useEffect(()=>{

  setPercent(Math.min(100, Math.max(value,0)));
  if (value>=100){
    onComplete();
  }
 },[value])


  return (
    <div className='progress'>
     
      <span
      style={{color: percent>50 ? 'white':'black'}}>{percent.toFixed()}%</span> 
      <div style={{transform:`scaleX(${percent/100})`, transformOrigin:'left'}}
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent.toFixed()}></div>
     
    </div>
  )
}

export default Progress