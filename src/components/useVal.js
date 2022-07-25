import { useState } from 'react'

function useVal() {
    const [val, setVal] = useState({
        title: '',
        content: ''
    })
  return { val, setVal }    
}

export default useVal