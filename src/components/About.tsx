import "./styles/About.css";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(aboutSectionRef.current, 
      { 
        y: 100, // Initial position (e.g., starting from below)
        opacity: 0 
      },
      {
        y: -20, // Final position (reduced upward translation)
        opacity: 1,
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top bottom", // When the top of the trigger hits the bottom of the viewport
          end: "bottom center", // When the bottom of the trigger hits the center of the viewport
          scrub: true, // Smoothly animate based on scroll position
        },
      }
    );
  }, []);

  return (
    <div className="about-section" id="about" ref={aboutSectionRef}>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Automation specialist completing M.Sc. in Computer Science (June 2026) 
          with a proven track record designing and implementing intelligent automation solutions. 
          Expertise in Python development, cloud automation (Azure, AWS), and delivering 
          automation projects using Agile methodologies. Experienced in establishing standards 
          and best practices for automation delivery while collaborating with cross-functional 
          stakeholders. Strong analytical and problem-solving skills with an ability to take 
          ownership of technical initiatives.
        </p>
      </div>
    </div>
  );
};

export default About;
