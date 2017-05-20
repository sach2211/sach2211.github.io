import React from 'react'
import './resume.css';

const Resume = (props) => {
  return(
    <div className="resume-wrapper">
      <h3> About Me </h3>
      <div>
        I am a software developer, always on lookout for new technologies and trends to solve interesting problems. <br/>
        A graduate in <i> Computer Science </i> from 
        <a href="https://www.iiita.ac.in/" target="_blank"> Indian Institute of Information Technology</a>,
        I love brainstroming on interesting and challenging problems :).
        <hr />
      </div>

      <h3> Expertise </h3>
      <div>
        I have worked across many different tech-stacks and domains - from <i>banking</i> to <i>ecommerce</i>. Currently focussing on <i> Javascript </i> and Front End development challenges . <br />
        Most of my time these days is spend playing around with Javascript and related frameworks - mainly in <i> React </i> ecosystem.
        <hr />
      </div>
      
      <h3> Experience </h3>
      <div>
        <ul>

          <li> 
            <h4> 
              <span>
                Software Engineer @ 
              </span>
              <span>
                <a href="https://www.myntra.com" target="_blank"> Myntra.com </a>
              </span>
              <span style={{position: "relative", left: "72px"}}>
                (July 2016 - Present)
              </span>
            </h4> 
            <div>
              Part of the <i> Web team </i>. Working on website features, performance improvements and related stuff.
            </div>
          </li>

          <li> 
            <h4> 
              <span>
                Software Engineer Intern @ 
              </span>
              <span>
                <a href="https://www.myntra.com" target="_blank"> Myntra.com </a>
              </span>
              <span style={{position: "relative", left: "25px"}}>
                (December 2015 - May 2016)
              </span>
            </h4> 
            <div>
              Part of the core <i> growth hacking team </i>. Developed various online campaign (promotional games and features) for customer acquisition.
            </div>
          </li>

          <li> 
            <h4> 
              <span>
                Software Engineer Intern @ 
              </span>
              <span>
                <a href="https://www.citi.com/" target="_blank"> Citibank </a>
              </span>
              <span style={{position: "relative", left: "50px"}}>
                (May - July 2015)
              </span>
            </h4> 
            <div>
              Part of bonds trading team. Worked on automation of large part of municipal bonds trading business.
            </div>
          </li>

        </ul>
        <hr />
      </div>

      <h3> Links </h3>
      <div>
        <ul>
          <li> <a href="https://github.com/sach2211/"> Github </a></li>
          <li> <a href="https://www.linkedin.com/in/sachin199">  LinkedIn </a></li>
          <li> <a href="mailto:sachin.chopra2211@gmail.com">  Email </a></li>
        </ul>
      </div>
    </div>
  )
}

export default Resume;