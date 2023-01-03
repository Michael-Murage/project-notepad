import React from 'react'
import { randomColor } from './utilities/randomColor'

function About() {
  return (
    <div style={{paddingTop: '4rem'}} className='card-container'>   
        <div className='card-form card about-form' style={{width: '18rem', backgroundColor: randomColor(), marginTop: '2px'}}>
            <h2>General description:</h2>
                <p> This is my version of a working notepad using our stubborn but beloved JavaScript (along with React.js).</p>
        </div>
        <div className='card-form card about-form' style={{width: '18rem', backgroundColor: randomColor(), marginTop: '2px'}}>
            <h2>React version:</h2>
                <p>Version 18.</p>
        </div>
        <div className='card-form card about-form' style={{width: '18rem', backgroundColor: randomColor(), marginTop: '2px'}}>
            <h2>React router dom</h2>
                <p> Version 6.</p>
        </div>
        {/* <div className='card-form card about-form' style={{width: '18rem', backgroundColor: randomColor(), marginTop: '2px'}}>
            <h2>Time of creation:</h2>
                <p> July 2022.</p>
        </div> */}
    </div>
  )
}

export default About