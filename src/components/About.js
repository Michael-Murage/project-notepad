import React from 'react'
import { randomColor } from './utilities/randomColor'

function About() {
  return (
    <div style={{paddingTop: '4rem'}}>   
        <div id='title-form' className='card-form card' style={{width: '18rem', backgroundColor: randomColor(), marginTop: '2px'}}>
            <h2>Info about the app:</h2>
                <p> This is my version of a working notepad using our stubborn but beloved JavaScript (along with React.js).</p>
            </div>
            {/* <div id='textarea-form'>
                <textarea placeholder='Enter note here...' id='textarea-input' onChange={handleChange}>
                    
                </textarea>
            </div> */}
    </div>
  )
}

export default About