import api from "../utils/axios"
import { ipfsClient } from "../utils/ipfs-core"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"

export default function Resolve({id}){

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
        setTmpNotes([...tmpNotes,formData])
    }

    const [tmpNotes,setTmpNotes] = useState([])

    async function getTempNotes(id){
        const tmp = await api.post('/tmpnotes',{_id:id})
        setTmpNotes(tmp)
    }

    useEffect(()=>{
        getTempNotes(id)
    },[])

    function TempRequest({cid}){
        return(
            <div className="flex justify-between w-[750px] items-center p-5 rounded-md shadow-xl">
                <p className="font-semibold text-[20px]">{`Upload #${1}`}</p>
                <div className="flex gap-5">
                <button 
                className="border-2 rounded-md p-2 hover:bg-gray-200"><a target="_blank" href={`https://ipfs.io/ipfs/${cid}`}>Preview</a></button>
                <button className="border-2 rounded-md p-2 hover:bg-gray-200">Accept</button>
                <button className="border-2 rounded-md p-2 hover:bg-gray-200">Reject</button>
                </div>
            </div>
        )
    }

    return (
        <> 
            <div className="flex">
            <form className="flex flex-col">
                <div className="flex flex-col w-[500px] space-y-4 m-6 p-10 shadow-2xl rounded-md">
                    <h1 className="text-center text-5xl font-semibold">Resolve</h1>
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
            <div className="p-4 m-4 space-y-6 flex flex-col items-center justify-center w-full">
                <TempRequest cid={"QmWMxK4u76itNkVcLqHu8UjCLUZfipKGB1kr6Ywre3YDDS"}/>
                <TempRequest/>
                <TempRequest/>
                <TempRequest/>
            </div>
           </div>
        </>
    )
}