import React from 'react'
import Card from './Card'
import { randomColor } from './randomColor'


function CardDisplay({ notes, fetchData }) {
    let noten = [...notes].reverse()

    function deleteNote(id){
        fetch(`http://localhost:7000/notes/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }           
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
            fetchData()
        })
        .catch(error=>console.log(error.message))
    }
    
    const notesDisp = noten.map((note, index)=>{ 
        return <Card key={note?.id || index} note={note} index={index} randomColor={randomColor} deleteNote={deleteNote}/>
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