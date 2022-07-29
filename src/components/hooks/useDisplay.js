import { useEffect, useState } from 'react'

function useDisplay() {
    const [notes, setNotes] = useState([{
        title: '',
        content: ''
    }])
    
    

     const fetchData = async ()=>{
        try{
            const response = await fetch('https://project-notepad-json.herokuapp.com/notes');
            if(response.ok){
            const jsonResp = await response.json();
            setNotes(jsonResp)
            }
         }
         catch(error){
            console.log(error);
         }
        }

     useEffect(()=>{
        fetchData()

        
    }, [])
  return { notes, setNotes, fetchData }
}

export default useDisplay