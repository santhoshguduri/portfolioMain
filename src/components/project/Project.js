import React from 'react'
import './Project.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import ExperienceCard from '../projects/Projects.js'
import projectseData from '../../data/projects.json'

const Project = () => {
  return (
    <Section title="Projects">
      <div className="project-content">
        <ul className="project-list">
          {projectseData.experience.reverse().map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ExperienceCard experience={exp} />
              </Fade>
            </li>
          ))}
        </ul>
      </div>
    </Section>  
  )
}

export default Project
