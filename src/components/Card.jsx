import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'

function Card({ note, randomColor, deleteNote, fetchData }) {
    const [isNone, setIsNone] = useState(false)
    const [edit, setEdit] = useState([note.title, note.content])
    const [resize, setResize] = useState(false);
    const [resizeValue, setResizeValue] = useState(false)

    let conditionIsNone = isNone ? 'none' : ''
    let conditionNotNone = !isNone ? 'none' : ''
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
        // console.log(id);
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
    <div className='card'  style={{width: 'auto', backgroundColor: randomColor()}}>
                <div style={{display: 'flex'}}>
                    <h2 onClick={changeTitle} className={conditionIsNone + ' ' + note?.id}>{!note.title ? '<no header>' : note.title}</h2>
                    {/* togglling between the element above and the element below based on click to edit */}
                    <Form onSubmit={submitEdit} >
                        <input onChange={controlEdit} 
                        ref={focusRef} type='text' 
                        onBlur={offFocus} value={edit[0]} 
                        className={conditionNotNone + ' ' + note?.id + ' title-input '} 
                        autoFocus />
                    </Form>
                    <button className='delete-note text-danger ml-auto' title='Delete note' onClick={() => deleteNote(note?.id)}>X</button>
                </div>

                <p className={conditionIsNone + ' ' + note?.id} onClick={changeTitle}>{!note.content ? '<no content>' : note.content}</p>
                {/* togglling between the element above and the element below based on click to edit */}
                <form className={conditionNotNone}>
                    <div className='textarea-form'>
                        <textarea className='textarea-input' onChange={controlEdit} ref={focusRef} value={edit[1]} onBlur={offFocus}
                            style={{resize: resize ? "both" : "none"}} 
                        >
                        </textarea>
                    </div>
                    <div className='submit-form'>
                        <input type='submit' id={note?.id} value='Save' className='submit-input' onClick={submitEdit}/>
                        <input 
                            type="button"
                            title={resize ? "Resize is on" : "Resize is off"}
                            value={resizeValue ? (resize ? "On" : "Off") : "Toggle resize" }
                            className='submit-input' 
                            onClick={()=>setResize(!resize)}
                            onMouseOver={() => setResizeValue(true)}
                            onMouseOut={() => setResizeValue(false)}
                        />
                    </div>
                </form>

            </div>
  )
}

export default Card