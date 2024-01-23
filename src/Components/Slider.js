import React,{useEffect,useRef} from 'react'
import './slider.css'
import lottie from 'lottie-web'
//import Fade from 'react-reveal/Fade'

function Slider() {
    useEffect(() => {
        lottie.loadAnimation({
            container:ref.current,
            loop:true,
            autoplay:true,
            renderer:'svg',
            animationData:require('../coding.json')

        })
  

        
        return () => {
            //
        }
    }, [])
    const ref = useRef(null)
    
    return (
        <div className="slider">
        
            <div className="slider-left">
            
                <h1 className="slider-left-h1">Hi I am Jatin</h1>

                <h1 className="slider-left-h4">Full-time Php developer with 4 years of experience in 
building websites, api, responsive webpages and creating 
high performance applications.</h1>
                
                
                <h4 className="slider-left-h4">A passionate Full Stack Web Developer 
                having an experience of building
                 Web applications with Laravel Framework </h4>
                 

            </div>
        
            
            <div className="slider-right">
                <div    ref={ref} className="lottie-img">
                
                </div>

            </div>
    

        </div>
    )
}

export default Slider
