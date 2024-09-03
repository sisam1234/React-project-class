import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";
export default function HomePage(){
    const [count, setCount] = useState(0)
    const [animate,setAnimate] = useState(false)
    const handleIncrement = () =>{
        startAnimation()
        setCount((preValue) => {
            return preValue+1
        })
    }
    const handleDecrement = () =>{
        startAnimation()
        setCount((postValue) => {
            return postValue-1
        })
    }
    const startAnimation = ()=>{
        setAnimate(true)
    }
    const stopAnimation = ()=>{
        setAnimate(false)
    }
    return(
        <>
            <Navbar title ={"HomePage"}/>
            <h1>Homepage</h1>
            <p id="centertext" className={animate?"scale-text":""} onAnimationEnd={stopAnimation}>{count}</p>
            <div id="button" onClick={handleIncrement}>+</div>
            <div id="button"className="minus_button" onClick={handleDecrement}>-</div>
        </>
    );
}
