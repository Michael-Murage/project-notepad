import React, { useEffect, useRef, useState } from 'react'

function Card({ note, randomColor, deleteNote }) {
    const [isNone, setIsNone] = useState(false)
    const [edit, setEdit] = useState(note.title)
    let conditionIsNone = isNone ? 'none' : 'block'
    let conditionNotNone = !isNone ? 'none' : 'block'
    const focusRef = useRef()
    // focusRef.focus();

    useEffect(()=>{
        focusRef.current.focus()
    }, [isNone])
    
    function offFocus(){
        setIsNone(false)
    }

    function changeTitle(e){
        setIsNone(true)
        
    }   

    function submitEdit(e){
        
    }

    function controlEdit(e){
        setEdit(e.target.value)
    }

  return (
    <div className='card'  style={{width: '18rem', backgroundColor: randomColor()}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2 onClick={changeTitle} className={conditionIsNone + ' ' + note?.id}>{!note.title ? 'Loading...' : note.title}</h2>
                    <form onSubmit={submitEdit} >
                        <input onChange={controlEdit} ref={focusRef} type='text' id='title-input' onBlur={offFocus} value={edit} className={conditionNotNone + ' ' + note?.id} autoFocus />
                    </form>
                    <button className='delete-note' onClick={() => deleteNote(note?.id)}>X</button>
                </div>
                <p>{!note.content ? 'Loading...' : note.content}</p>
            </div>
  )
}

export default Card