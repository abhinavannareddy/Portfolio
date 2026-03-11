import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.Sc. in Computer Science</h4>
                <h5>BTH, Karlskrona, Sweden</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Completing Master of Science in Computer Science. Specialized in automation solutions, cloud automation, and predictive modeling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Process Analyst</h4>
                <h5>Viak Group, Pvt. Ltd.</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Designed automation operating model and implemented intelligent automation for dispatch logistics using Python, reducing manual planning effort by 80% and improving on-time delivery by 25%. Built automated BI solutions with Power BI and data pipelines with Azure Data Factory.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>JNTU-H and BTH</h5>
              </div>
              <h3>2020 - 2024</h3>
            </div>
            <p>
              Completed 3 and half years at JNTUH, India, and the final year at BTH, Sweden, as part of a collaborative program. GPA: 8.46/10.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Application Pentester Intern</h4>
                <h5>Indian Servers</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Performed vulnerability assessment and penetration testing (VAPT) on web applications, identifying and documenting security vulnerabilities. Conducted web security auditing using automated and manual testing techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
