import React, { useEffect } from 'react'
import useDisplay from './useDisplay'
import { randomColor } from './randomColor'

function CardDisplay() {
    let color = randomColor()
    const { notes, setNotes, fetchData } = useDisplay()
    useEffect(()=>{
        fetchData()
    }, [])
    
    const notesDisp = notes.map((note)=>{
        return (
            <div className='card-container card' style={{width: '18rem', backgroundColor: color}} key={note.id}>
                <h2>{!note.title ? <h2>Loading...</h2> : note.title}</h2>
                <p>{!note.content ? <h2>Loading...</h2> : note.content}</p>
            </div>
        )
    })
  return (
    <>
        <div>
            {/* {false ? <h2>Loading...</h2> : notesDisp} */}
            {notesDisp}
        </div>  
    </>
  )
}

export default CardDisplay