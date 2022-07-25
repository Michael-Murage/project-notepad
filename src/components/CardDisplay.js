import React, { useEffect } from 'react'
import useDisplay from './useDisplay'
import { randomColor } from './randomColor'

function CardDisplay() {
    const { notes, setNotes, fetchData } = useDisplay()
    useEffect(()=>{
        fetchData()
    }, [])
    
    const notesDisp = notes.map((note)=>{
        return (
            <div className='card' style={{width: '18rem', backgroundColor: randomColor()}} key={note.id}>
                <h2>{!note.title ? <h2>Loading...</h2> : note.title}</h2>
                <p>{!note.content ? <h2>Loading...</h2> : note.content}</p>
            </div>
        )
    })
  return (
    <>
        <div className='card-container'>
            {notesDisp}
        </div>  
    </>
  )
}

export default CardDisplay