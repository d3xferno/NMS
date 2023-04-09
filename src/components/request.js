export default function Request(){
    return(
        <>
           <form>
                <div className="flex flex-col w-1/4 space-y-4 m-10 p-5">
                    <label className="text-[20px] font-semibold">Topic</label>
                    <input type="text" placeholder="Enter Title" className="rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black"/>
                    <label className="text-[20px] font-semibold">Department</label>
                    <select className="rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black">
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
                    <input type="text" placeholder="Enter tags" className="rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black"/>
                    <button type="button" className="border-2 p-2 text-[18px] font-semibold rounded-sm">Create New Request</button>
                </div>
           </form> 
        </>
    )
}