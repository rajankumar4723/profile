// SkillPage.js
import React from 'react';
import './style/SkillsPage.css';

const skillsData = [
  { name: 'HTML', percentage: 80, color: '#3498db' },
  { name: 'CSS', percentage: 75, color: '#2ecc71' },
  { name: 'JavaScript', percentage: 85, color: 
  '#f39c12' }
  ,
  // Add more skills as needed
];
const skillsData2 = [
  { name: 'Java', percentage: 80, color: '#3498db' },
  { name: 'Next JS', percentage: 65, color: '#2ecc71' },
  { name: 'C++', percentage: 75, color: 
  '#f39c12' }
  ,
  // Add more skills as needed
];
const skillsData3 = [
  { name: 'React JS', percentage: 80, color: '#3498db' },
  { name: 'PHP', percentage: 70, color: '#2ecc71' },
  { name: 'MYSQL', percentage: 85, color: 
  '#f39c12' }
  ,
  // Add more skills as needed
];

const SkillsPage = () => {
  return (
    <div className='skill'>      <h1>Skills</h1>
    <div className="skill-page">
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar" style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}></div>
            <div className="skill-percentage">{skill.percentage}%</div>
          </div>
        ))}
      </div>
      <div className="skills-container">
        {skillsData2.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar" style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}></div>
            <div className="skill-percentage">{skill.percentage}%</div>
          </div>
        ))}
      </div> <div className="skills-container">
        {skillsData3.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar" style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}></div>
            <div className="skill-percentage">{skill.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
    <hr />

    </div>
  );
};

export default SkillsPage;
