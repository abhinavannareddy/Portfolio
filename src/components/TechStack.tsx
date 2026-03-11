import { useState } from "react";
import "./TechStack.css";

type SkillCategory = {
  title: string;
  skills: string[];
  color: string;
  icon: string;
};

const categories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "R", "HTML", "CSS", "JavaScript", "TypeScript"],
    color: "#c481ff",
    icon: "⟨/⟩",
  },
  {
    title: "ML & Data Science",
    skills: [
      "scikit-learn",
      "PyTorch",
      "Keras",
      "TensorFlow",
      "Feature Engineering",
      "Model Selection",
      "Statistical Analysis",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
    color: "#fb8dff",
    icon: "🧠",
  },
  {
    title: "Data Analysis",
    skills: [
      "Data Mining",
      "Anomaly Detection",
      "EDA",
      "Data Visualization",
      "Statistical Analysis",
      "Power BI",
      "Tableau",
    ],
    color: "#7ec8e3",
    icon: "📊",
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Microsoft Azure",
      "Azure Synapse",
      "Azure Data Factory",
      "Azure Databricks",
      "Azure Data Lake",
    ],
    color: "#ffa45b",
    icon: "☁️",
  },
  {
    title: "DevOps & Deployment",
    skills: ["CI/CD", "Jenkins", "Docker", "Kubernetes", "Git", "Version Control"],
    color: "#5ce0d2",
    icon: "⚙️",
  },
  {
    title: "Collaboration & Agile",
    skills: [
      "Agile Methodologies",
      "Jira",
      "Cross-Functional Collaboration",
      "Teamwork",
      "Communication Skills",
    ],
    color: "#f7c948",
    icon: "🤝",
  },
];

const TechStack = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="techstack-new">
      <div className="techstack-slider-container">
        <div className="techstack-content">
          <h2>Tech Stack</h2>

          <div className="techstack-pyramid">
            {categories.map((cat) => (
              <div className="tech-category" key={cat.title}>
                <div className="tech-category-header" style={{ color: cat.color }}>
                  <span className="tech-category-icon">{cat.icon}</span>
                  <span className="tech-category-title">{cat.title}</span>
                </div>
                <div className="tech-skills-grid">
                  {cat.skills.map((skill) => (
                    <div
                      className={`tech-skill-pill ${hoveredSkill === skill ? "hovered" : ""}`}
                      key={skill}
                      style={{
                        borderColor: hoveredSkill === skill ? cat.color : "rgba(255,255,255,0.1)",
                        boxShadow:
                          hoveredSkill === skill
                            ? `0 0 20px ${cat.color}40, inset 0 0 15px ${cat.color}15`
                            : "none",
                      }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <span className="skill-text">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
