import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { randomColor } from './utilities/randomColor'

import useVal from './hooks/useVal'

function NotesForm({ fetchData }) {
    const { val } = useVal()
    const [testNote, setTestNote] = useState([])
    
    useEffect(()=>{
        fetchData()
        // eslint-disable-next-line    
    }, [testNote])

    const submitNote =(e)=>{
        e.preventDefault()
        fetchData()
        fetch('http://localhost:7000/notes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                title: val.title,
                content: val.content
            })
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data);
            
        })
        .finally(() => {
            setTestNote(['sup'])
        })


        document.querySelector('.card').reset()
    }

    const handleChange =(e)=>{
        if(e.target.id === 'title-input'){
            val.title = e.target.value
        }else if(e.target.id === 'textarea-input'){
            val.content = e.target.value
        }
    }

    return (
        <Form className='card-form card' onSubmit={submitNote} style={{width: '18rem', backgroundColor: randomColor(), marginTop: '2px'}}>
                <div id='title-form'>
                    <h2>Title: </h2>
                    <input type='text' id='title-input' placeholder='Enter text' onChange={handleChange}/>
                </div>
                <div id='textarea-form'>
                    <textarea placeholder='Enter note here...' id='textarea-input' onChange={handleChange}>
                        
                    </textarea>
                </div>
                <div id='submit-form'>
                    <input type='submit' value='OK' id='submit-input'/>
                </div>
        </Form>
  )
}

export default NotesForm