import api from '../utils/axios';
import Comment from './comment'
import { useEffect, useState } from 'react'

export default function Comments({cid}){
    const [comments,setComments] = useState([]);
    const [text,setText] = useState('')

    async function handleAddComment(){
        const cmnt = {
            username:JSON.parse(sessionStorage.getItem('auth')).username,
            likes:0,
            comment:text
        }
        setComments([...comments,cmnt])
        setText('')
        const res = await api.post('/comment',{
            cid:cid,
            username:cmnt.username,
            content:cmnt.comment
        })
        console.log(res)
    }

    async function loadComments(){
        const cmnts = (await api.get(`note/${cid}`)).data.comments
        setComments(cmnts) 
    }

    useEffect(()=>{
        loadComments()
    },[])

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
                    onClick={handleAddComment} 
                    type='button' className="border-2 p-2 text-[15px] font-semibold rounded-md hover:bg-gray-200">Add Comment</button>
            </div>
            <div className='h-[62vh] overflow-auto p-0'>
                {
                    comments
                    &&
                    comments.map((comment,index)=>(
                        <Comment 
                            cid={cid}
                            key={index} 
                            username={comment.username} 
                            text={comment.comment} 
                            likes={comment.likes} 
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}