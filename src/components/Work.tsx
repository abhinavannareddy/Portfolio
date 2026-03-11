import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  { name: "Stock Market Analysis", category: "Time-Series Forecasting", tools: "Python, LSTM, Data Validation", image: "/images/projects/project_1.png" },
  { name: "Decision Support System", category: "Simulation & Optimization", tools: "Python, Cloud, XGBoost", image: "/images/projects/project_2.png" },
  { name: "RAG Pipeline", category: "Information Retrieval", tools: "AWS Bedrock, Claude, LLaMA 2", image: "/images/projects/project_3.png" },
  { name: "Ticket Classifier API", category: "Backend & ML", tools: "Flask, Scikit-learn, FastText", image: "/images/projects/project_4.png" },
  { name: "Heart Disease Predictor", category: "Cloud-Native ML", tools: "Kubernetes, Docker, AWS", image: "/images/projects/project_5.png" },
  { name: "Support Chatbot", category: "Generative AI", tools: "LangChain, OpenAI, Pinecone", image: "/images/projects/project_6.png" }
];

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const workContainer = document.querySelector(".work-container");
      if (!workContainer || !box.length) return 0;
      
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = workContainer.getBoundingClientRect().width;
      const padding: number = parseInt(window.getComputedStyle(box[0]).paddingLeft) || 0;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project: { name: string, category: string, tools: string, image: string }, index: number) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
