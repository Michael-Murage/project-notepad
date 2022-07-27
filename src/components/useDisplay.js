import { useEffect, useState } from 'react'

function useDisplay() {
    const [notes, setNotes] = useState([{
        title: '',
        content: ''
    }])
    
    

     async function fetchData(){
        fetch('http://localhost:7000/notes')
        .then(resp=>resp.json())
        .then(data=>setNotes(data))
     }

     useEffect(()=>{
        fetchData()

        
    }, [])
  return { notes, setNotes, fetchData }
}

export default useDisplay