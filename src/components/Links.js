import React from 'react'
import { Link } from 'react-router-dom'
import { randomColor } from './utilities/randomColor'

function Links() {
  return (
    <div style={{paddingTop: '4rem'}} className='card-container'>
        <div className='about-form card-form card' style={{width: '18rem', backgroundColor: randomColor(), marginTop: '2px'}}>
            <h2>Link:</h2>
                <Link style={{textDecoration: 'none'}} to='https://michael-murage.github.io/Portfolio/'>Portfolio</Link>
        </div>
        <div className='about-form card-form card' style={{width: '18rem', backgroundColor: randomColor(), marginTop: '2px'}}>
            <h2>Other link:</h2>
                <Link style={{textDecoration: 'none'}} to='https://michael-murage.github.io/phase-1-project-game-library/'>Game library</Link>
        </div>
        <p>Above are links to my portfolio and a simple game library project</p>
    </div>
  )
}

export default Links