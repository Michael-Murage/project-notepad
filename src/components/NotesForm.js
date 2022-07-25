import React from 'react'
import { Form } from 'react-bootstrap'
import { randomColor } from './randomColor'
import useVal from './useVal'

function NotesForm() {
    const {val, setVal} = useVal()
    return (
        <Form className='card-form card' style={{width: '18rem', backgroundColor: randomColor(), marginTop: '2px'}}>
                <div id='title-form'>
                    <h2>Title: </h2>
                    <input type='text' id='title-input' placeholder='Enter text' value={val.title}/>
                </div>
                <div id='textarea-form'>
                    <textarea placeholder='Enter note here...' id='textarea-input' value={val.content}>
                        
                    </textarea>
                </div>
                <div id='submit-form'>
                    <input type='submit' value='OK' id='submit-input'/>
                </div>
        </Form>
  )
}

export default NotesForm