import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext, TestContext } from '../contexts/context'

function Test() {
    const {count,setCount} = useContext(TestContext)
    const {auth} = useContext(AuthContext)

    useEffect(()=>{
        sessionStorage.setItem('count',count)
    },[count])

  return (
    <div className='m-10 space-y-3 flex flex-col items-center'>
        <p className='text-2xl'>{count}</p>
        <div className='space-x-2'>
        <button className='border-2 p-2 rounded-md' onClick={e => setCount(parseInt(count)+1)}>Click Me!!</button>
        <button className='border-2 p-2 rounded-md' onClick={()=>setCount(0)}>Clear</button>
        </div>
        {
            auth
            &&
            <p>Logged In</p>
        }
    </div>
  )
}

export default Test