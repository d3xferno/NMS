import React, { useState } from 'react'
import axios from 'axios'

function Test() {
  const [text,setText] = useState('')
  const [response,setResponse] = useState('')
  const OPENAI_API_KEY = "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"

  async function moderate(){
    const res = await axios.post("https://api.openai.com/v1/moderations",JSON.stringify({input:text}),{
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      }
    })
    setResponse(res)
  }
  
  return (
    <div className='m-10 space-y-3 flex flex-col items-center'>
        <input type='text' placeholder='Type something...' value={text} onChange={(e)=>{setText(e.target.value)}}
          className='border-2 p-3 rounded-md outline-none w-[500px]'
        />
        <button className='border-2 rounded-md p-3 hover:bg-gray-200' onClick={moderate}>Moderate</button>
        <p>{response}</p>
    </div>
  )
}

export default Test