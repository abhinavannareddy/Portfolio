import "./styles/About.css";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1025;

    if (isMobile) {
      // On mobile, skip the scroll animation and make section visible immediately
      if (aboutSectionRef.current) {
        gsap.set(aboutSectionRef.current, { y: 0, opacity: 1 });
      }
      return;
    }

    const anim = gsap.fromTo(aboutSectionRef.current, 
      { 
        y: 100,
        opacity: 0 
      },
      {
        y: -20,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    return () => {
      anim.kill();
    };
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
