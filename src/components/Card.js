import React, { useState } from 'react'

function Card({ note, randomColor, deleteNote }) {
    const [isNone, setIsNone] = useState(false)
    let conditionIsNone = isNone ? 'none' : 'block'
    let conditionNotNone = !isNone ? 'none' : 'block'
    
    function offFocus(){
        // setIsNone(false)
    }

    function changeTitle(e){
        setIsNone(true)
    }   

  return (
    <div className='card'  style={{width: '18rem', backgroundColor: randomColor()}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2 onClick={changeTitle} className={conditionIsNone + ' ' + note?.id}>{!note.title ? 'Loading...' : note.title}</h2>
                    <input type='text' id='title-input' onBlur={offFocus} placeholder='Enter text' className={conditionNotNone + ' ' + note?.id}/>
                    <button className='delete-note' onClick={() => deleteNote(note?.id)}>X</button>
                </div>
                <p>{!note.content ? 'Loading...' : note.content}</p>
            </div>
  )
}

export default Card