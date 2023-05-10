import { useContext, useEffect,useState } from "react"
import Comments from "../components/comments"
import api from "../utils/axios"
import { NoteContext } from "../contexts/context"

export default function Note(){

    const {cid,id} = useContext(NoteContext)
    

    async function fetchNote(){
        const data = await api.get(`note/${id}`)
        console.log(data.data)
    }

    useEffect(()=>{
        fetchNote()
        console.log('note loaded')
    },[])

    return(
        <div className="flex justify-center gap-4">
            <div className="w-1/2">
                <div className="mx-4 mt-5 flex justify-between font-semibold text-[20px]">
                    <p>Sample PDF</p>
                    <div className="space-x-2 flex justify-center items-center">
                    <button type="button" className="flex items-center gap-2">
                        <img src="upvote.svg" alt="upvote" className="h-5"/>
                        <p>{0}</p>
                    </button>
                    </div>
                </div>
                <iframe src={`https://ipfs.io/ipfs/${cid}`} className="w-full h-[80vh] p-4 outline-none"/>
            </div>
            <Comments id={id}/>
        </div>
    )
}