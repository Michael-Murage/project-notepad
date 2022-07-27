import React from 'react'
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
        return (
            <div key={note?.id || index} className='card' style={{width: '18rem', backgroundColor: randomColor()}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2 onClick={changeTitle}>{!note.title ? 'Loading...' : note.title}</h2>
                    <button className='delete-note' onClick={(event) => deleteNote(note?.id)}>X</button>
                </div>
                <p>{!note.content ? 'Loading...' : note.content}</p>
            </div>
        )
    })

    function changeTitle(e){
        
    }

  return (
    <>
        <div className='card-container'>
            {notesDisp}
        </div>  
    </>
  )
}

export default CardDisplay