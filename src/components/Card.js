import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'

function Card({ note, randomColor, deleteNote, fetchData }) {
    const [isNone, setIsNone] = useState(false)
    const [edit, setEdit] = useState([note.title, note.content])
    let conditionIsNone = isNone ? 'none' : 'block'
    let conditionNotNone = !isNone ? 'none' : 'block'
    const focusRef = useRef()

    useEffect(()=>{
        focusRef.current.focus()
    }, [isNone])
    
    function offFocus(e){
        if(e.target.className === 'title-input' ){
            setIsNone(false)
        }
    }

    function changeTitle(e){
        setIsNone(true)
    }   

    function submitEdit(e){
        e.preventDefault()
        let id = parseFloat(e.target?.id)
        console.log(id);
        setIsNone(false)
        fetch(`http://localhost:7000/notes/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                title: edit[0],
                content: edit[1]
            })
        })
        .then(resp=>resp.json())
        .then(data=>{
            // console.log(data)
            fetchData()
        })
        .catch(err=>console.log(err.message))
    }

    function controlEdit(e){
        if(e.target.className.includes('title-input')){
            let clonedEdit1 = [...edit[1]]
            setEdit([e.target.value, clonedEdit1.join('')])
        }else if(e.target.className === 'textarea-input'){
            let clonedEdit0 = [...edit[0]]
            setEdit([clonedEdit0.join(''), e.target.value])
        }
    }

  return (
    <div className='card'  style={{width: '18rem', backgroundColor: randomColor()}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2 onClick={changeTitle} className={conditionIsNone + ' ' + note?.id}>{!note.title ? 'Loading...' : note.title}</h2>
                    {/* togglling between the element above and the element below based on click to edit */}
                    <Form onSubmit={submitEdit} >
                        <input onChange={controlEdit} ref={focusRef} type='text' onBlur={offFocus} value={edit[0]} className={conditionNotNone + ' ' + note?.id + ' ' + 'title-input'} autoFocus />
                    </Form>
                    <button className='delete-note' onClick={() => deleteNote(note?.id)}>X</button>
                </div>

                <p className={conditionIsNone + ' ' + note?.id} onClick={changeTitle}>{!note.content ? 'Loading...' : note.content}</p>
                {/* togglling between the element above and the element below based on click to edit */}
                <form className={conditionNotNone}>
                    <div className='textarea-form'>
                        <textarea className='textarea-input' onChange={controlEdit} ref={focusRef} value={edit[1]} onBlur={offFocus} >
                        </textarea>
                    </div>
                    <div className='submit-form'>
                        <input type='submit' id={note?.id} value='OK' className='submit-input' onClick={submitEdit}/>
                    </div>
                </form>

            </div>
  )
}

export default Card