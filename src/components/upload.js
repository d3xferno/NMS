import { ipfsClient } from "../utils/ipfs-core"
import { useState } from "react"

export default function Upload(){
    const [file,setFile] = useState(null)
    const [pdfUrl,setPdfUrl] = useState('')
    async function ipfsUpload(){
        const client = await ipfsClient()
        const {cid} = await client.add(file)
        const CID = cid.toString()
        setPdfUrl(`https://ipfs.io/ipfs/${CID}`)
        console.log(CID);       
    }

    return (
        <> 
            <form>
                <div className="flex flex-col w-1/4 space-y-4 m-10 p-5">
                    <label className="text-[20px] font-semibold">Topic</label>
                    <input type="text" placeholder="Enter Title" className="rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                    <label className="text-[20px] font-semibold">Department</label>
                    <select className="rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100">
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
                    <label className="text-[20px] font-semibold">Tags</label>
                    <input type="text" placeholder="Enter tags" className="rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                    <label className="text-[20px] font-semibold">File</label>
                    <input 
                        onChange = {e => {
                            setFile(e.target.files[0])
                        }}
                    type="file" className="rounded-sm p-4 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                    <button onClick={ipfsUpload} type="button" className="border-2 p-2 text-[18px] font-semibold rounded-sm hover:bg-gray-200">Upload</button>
                </div>
           </form> 
           <iframe src={pdfUrl} className="w-[50%] h-screen">

           </iframe>
        </>
    )
}