
import React, { useState, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useGSAP} from '@gsap/react'
const ShowCaseSection = () => {

  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  
  
  
  useGSAP(() => {
    const projects = [project1Ref.current,project2Ref.current,project3Ref.current];
    projects.forEach((card,index) => {
    gsap.fromTo(
      card,
      { 
        y:50,opacity:0 
      },
      {
        y:0,
        opacity:1,
        duration:1,
        delay:0.1 * (index + 1),
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100'
        }
      }
    )
  })
    gsap.fromTo(sectionRef.current,
      {opacity:0},
      {opacity:1, duration: 1.5})
  }, { scope: sectionRef });

  return (
      <div>
      <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
        {/* LEFT SIDE */}
        <div className="first-project-wrapper" ref={project1Ref}>
         <div className="image-wrapper">
            <img src="/images/SmartLuxe.png" alt="Ryde" />
         </div>
         <div className="text-content">
              <h2>
                Smart Luxury Zero Guesswork
              </h2>
              <p>
                An app built with React Native, & TailwindCSS for a fast,
                user-friendly experience. SmartLuxe is a cutting-edge AI-powered e-commerce platform that revolutionizes online shopping through intelligent agent interactions. Built for modern consumers who demand personalized, conversational,
                 and intuitive shopping experiences
              </p>
            </div>
        </div>
        
         {/* RIGHT SIDE */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project"  ref= {project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/NuclearOps.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Harness the power of Al and data science to ensure safety reduce maintenant costs, and minimize downtime Industrial operations.</h2>
            </div>

            <div className="project" ref={project3Ref} >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/Sociolens.jpeg" alt="YC Directory App" />
              </div>
              <h2>Sociolens is an interactive dashboard for visually exploring Twitter data trends and engagement using Panel, hvPlot, and Plotly.
 </h2>           </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};




export default ShowCaseSection;
