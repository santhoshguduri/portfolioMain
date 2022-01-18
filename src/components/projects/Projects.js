import React from 'react'
import './Projects.css'
import githubLogo from '../../images/social/github.png'
import signalLogo from '../../images/social/signal.png'

const Projects = ({ experience }) => {
  let { github, liveSite, company, title, dateFrom, dateTo, info, stack } = experience
  return (
    <a
      className="experience-link"
      href={github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="experience-card-wrapper">
        <div className="projects-card">
          <div className="projects-card-bottom">
            <div>
              <h2>{title}</h2>
              <ul>
                {info.map((point, idx) => (
                  <li key={`${company}-point-${idx}`}>{point}</li>
                ))}
              </ul>
            </div>
            <div>
            <div className="projects-card-tech">
              <ul>
                {stack.map((tech) => (
                  <li key={`${company}-${tech}`}>{tech}</li>
                ))}
              </ul>
            </div>
            <div style={{"display":"flex","float":"right"}}>
                <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLinks"
                >
                  <img src={githubLogo} alt="Github Logo" width="40px" />
                </a>
                {liveSite &&<a
                href={liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLinks"
                >
                  <img src="https://img.icons8.com/ios-glyphs/30/26e07f/rfid-signal.png" alt="Live Site Logo" width="40px" aria-label="Live Site" />
                </a>}
            </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Projects
