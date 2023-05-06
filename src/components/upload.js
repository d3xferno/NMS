import api from "../utils/axios"
import { ipfsClient } from "../utils/ipfs-core"
import { useEffect, useState } from "react"
import Loading from "./Loading"

export default function Upload(){

    const [formData,setFormData] = useState({
        title:'',
        cid:'',
        tags:'',
        department:'Department',
        course_code:''
    })

    const [loading,setLoading] = useState(false)

    const [Cid,setCid] = useState('')

    const [file,setFile] = useState(null)
    const [pdfUrl,setPdfUrl] = useState(null)
    async function ipfsUpload(){
        setLoading(true)
        const client = await ipfsClient()
        const {cid} = await client.add(file)
        const CID = cid.toString()
        setPdfUrl(`https://ipfs.io/ipfs/${CID}`)
        sessionStorage.setItem('pdf-url',`https://ipfs.io/ipfs/${CID}`)
        setFormData({...formData,cid:CID})
        setCid(CID)
        setLoading(false)
        // await api.post('/upload',formData)
    }

    function handleInput(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    async function addNote(){
        setLoading(true)
        const res = await api.post('/upload',formData)
        setLoading(false)
        setFormData({
            title:'',
            cid:'',
            tags:'',
            department:'Department',
            course_code:''
        }
        )
        setPdfUrl(null)
        setFile(null)
        alert('file added')
    }

    return (
        <> 
            <form className="w-full flex flex-col justify-center items-center">
                <div className="flex flex-col w-[500px] space-y-4 m-6 p-10 shadow-2xl rounded-md">
                    <h1 className="text-center text-5xl font-semibold">Upload</h1>
                    <label className="text-[20px] font-semibold">Topic</label>
                    <input 
                        value={formData.title}
                        onChange={handleInput}
                        name="title"
                    type="text" placeholder="Enter Title" className="rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-3 w-1/2">
                        <label className="text-[20px] font-semibold">Department</label>
                        <select 
                            value={formData.department}
                            onChange={handleInput}
                            name="department"
                        className="rounded-sm p-[10px] border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100">
                            <option>Department</option>
                            <option>BME</option>
                            <option>CHEM</option>
                            <option>CIVIL</option>
                            <option>CSE</option>
                            <option>ECE</option>
                            <option>EEE</option>
                            <option>IT</option>
                            <option>MECH</option>
                        </select>
                        </div>
                        <div className="flex flex-col gap-3 w-1/2">
                        <label className="text-[20px] font-semibold">Course Code</label>
                        <input 
                            value={formData.course_code}
                            onChange={handleInput}
                            name="course_code"
                        type="text" placeholder="Enter Course Code" className="rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                        </div>
                    </div>
                    <label className="text-[20px] font-semibold">Tags</label>
                    <input 
                        value={formData.tags}
                        onChange={handleInput}
                        name="tags"
                    type="text" placeholder="Enter tags" className="rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                    <label className="text-[20px] font-semibold">File</label>
                    <input 
                        onChange = {e => {
                            setFile(e.target.files[0])
                        }}
                    type="file" className="rounded-sm p-4 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                    {
                        pdfUrl
                        ?
                        <button onClick={async()=>{
                            await addNote()
                        }} type="button" className="border-2 p-2 text-[18px] font-semibold rounded-md hover:bg-gray-200">Confirm</button>
                        :
                        <button onClick={async()=>{
                            await ipfsUpload()
                        }} type="button" className="border-2 p-2 text-[18px] font-semibold rounded-md hover:bg-gray-200">Upload to IPFS</button>

                    }
                    {
                        loading
                        &&
                        <Loading/>
                    }
                </div>
           </form> 
        </>
    )
}