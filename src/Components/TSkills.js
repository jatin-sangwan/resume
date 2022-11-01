import React,{useEffect,useRef} from 'react'
import './tskill.css'
import lottie from 'lottie-web'

function TSkills() {
    useEffect(() => {
        lottie.loadAnimation({
            container:ref.current,
            loop:true,
            autoplay:true,
            renderer:'svg',
            animationData:require('../tskill.json')

        })
  

        
        return () => {
            //
        }
    }, [])
    const ref = useRef(null)
    return (
        <div className="tskill">
        <h1 className="tskill-h1">Technical Skills</h1>
        <div className="tskill-m">
        <div className="tskill-c">
        <p>Comprehensive Knowledge 
        of Reactjs platform and Angular</p>
        <p> Command over 
        HTML, CSS3, Media quaries, Javascript</p>
        <p>Node Package manager, Git Repository</p>
        <p>Command over developing reuseble React JS Components</p>
        <p>Angular Components Management</p>
        <p>UI/UX Design and development</p>
        <p>Knowledge of continues Testing, Trubleshooting, Integration and Deployment</p>
        <p>Command over Website Live on Server</p>
        <p>Payment Gateways Integration</p>
        </div>
        <div  className="tskill-lottie" ref={ref}>
        
        
        </div>
        </div>
            
        </div>
    )
}

export default TSkills 
