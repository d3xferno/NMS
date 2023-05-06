import api from "../utils/axios"
import { useState } from "react"

export default function Comment({cid,username,text,likes,index}){

    const [currLikes,setCurrLikes] = useState(likes || 0)

    async function handleLike(){
        const res = await api.post('/likecomment',{
            cid:cid,
            username:JSON.parse(sessionStorage.getItem('auth')).username,
            index:index
        })
        setCurrLikes(currLikes+1)
    }
    return(
        <>
            <div className="rounded-md mr-10 my-3 border-2 p-3 space-y-2 w-full">
                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="font-semibold">{username}</p>
                </div>
                <p className="ml-8">{text}</p>
                <div className="flex gap-2 items-center">
                    <img 
                        onClick={handleLike}
                    src="upvote.svg" alt="upvote" className="h-5 ml-8"/><p className="">{currLikes}</p>
                </div>
            </div>
        </>
    )
}