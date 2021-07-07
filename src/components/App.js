import React, {Component, useState,useEffect} from "react";
import '../styles/App.css';
import Slide from "./Slide";

const App = (props) => {
  
  let {slides}=props;
  // console.log(slides)
  let[currSlide,setCurrSlide]=useState(0);


  const prevSlide = () =>{
    if(currSlide===0)
    return;
    setCurrSlide(currSlide-1);
  }


  const nextSlide = ()=> {
      
    if(currSlide ===slides.length-1)
    return;
    setCurrSlide(currSlide+1)
  }

const restartSlide = () =>{
  setCurrSlide(0)
}
  
useEffect(() => {
  if (currSlide === 0) {
      document.querySelector("[data-testid='button-prev']").disabled = true;
      document.querySelector("[data-testid='button-restart']").disabled = true;
  } else {
      document.querySelector("[data-testid='button-prev']").disabled = false;
      document.querySelector("[data-testid='button-restart']").disabled = false;

  }
  if (currSlide === slides.length - 1) {
      document.querySelector("[data-testid='button-next']").disabled = true;
  } else {
      document.querySelector("[data-testid='button-next']").disabled = false;
  }
});


  return (
    <div className="App">
             <Slide props={slides[currSlide]}/>
       <div id="navigation">
           <button data-testid="button-prev" onClick={prevSlide}>
             {"Prev"}
           </button>
           <button data-testid="button-restart" onClick={restartSlide}>
             {"Restart"}
           </button>
           <button data-testid="button-next" onClick={nextSlide}>
             {"Next"}
           </button>
       </div>
    </div>
  )
}


export default App;
