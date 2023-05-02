import Comment from './comment'
import { useState } from 'react'

export default function Comments(){
    let cmnts = [
        {
            username:"Shajith",likes:0,text:"Thanks for this PDF"
        },
        {
            username:"Shajith",likes:0,text:"Thanks for this PDF"
        },
        {
            username:"Shajith",likes:0,text:"Thanks for this PDF"
        },
        {
            username:"Shajith",likes:0,text:"Thanks for this PDF"
        },
        {
            username:"Shajith",likes:0,text:"Thanks for this PDF"
        },
    ]
    const [comments,setComments] = useState(cmnts);
    const [text,setText] = useState('')

    return (
        <div className=''>  
            <div className='mr-10 mt-4 mb-2 w-full space-y-4 p-1'>
                <p className='text-[20px] font-semibold'>Comments</p>
                <input
                    onChange={e => {
                        setText(e.target.value)
                    }}
                    value={text}
                    type='text' placeholder='type something . .' className='rounded-md p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100 w-full'/>
                <button
                    onClick={e => {setComments([...comments,{
                        username:"New User",
                        likes:0,
                        text:text
                    }])
                    setText('')
                    }
                    } 
                    type='button' className="border-2 p-2 text-[15px] font-semibold rounded-md hover:bg-gray-200">Add Comment</button>
            </div>
            <div className='h-[62vh] overflow-auto p-0'>
                {
                    comments
                    &&
                    comments.map((comment,index)=>(
                        <Comment key={index} username={comment.username} text={comment.text} likes={comment.likes}/>
                    ))
                }
            </div>
        </div>
    )
}