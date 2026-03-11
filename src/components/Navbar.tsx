import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const elem = e.currentTarget as HTMLAnchorElement;
          const sectionId = elem.getAttribute("data-href");
          if (sectionId) {
            const section = document.querySelector(sectionId);
            if (section) {
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }
      });
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/ab-logo.svg" alt="Abhinav Logo" style={{ height: '40px' }} />
          <img src="/profile.png" alt="Profile" style={{ height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
        </a>
        <a
          href="mailto:reddyanna.abhinav@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          reddyanna.abhinav@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
