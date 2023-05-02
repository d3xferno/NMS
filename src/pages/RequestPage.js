import { useState } from "react"

export default function RequestPage(){

    const [show,setShow] = useState(false);

    function handleClick(e){
        setShow(!show);
    }

    function Request(){
        return(
            <div className="bg-white w-[80vw] flex justify-between items-center border-2 rounded-md m-2 p-3 text-[20px] font-semibold">
                <p className="text-[20px]">Title</p>
                <button className="border-2 p-2 rounded-md hover:bg-gray-200">Resolve</button>
            </div>
        )
    }

    return(
        <div className="relative z-0 w-full flex justify-center flex-col items-center">
            <button 
                    onClick={()=>{setShow(!show)}}
                type="button" className="bg-white m-2 mt-5 relative z-20 border-2 p-2 text-[18px] font-semibold rounded-md hover:bg-gray-200">Create Request</button>
            <div className="w-full flex flex-col items-center fixed z-10 m-5">
                <div className={`m-2 w-[35%] bottom-[-130px] absolute z-30 shadow-2xl rounded-md bg-white ${show ? 'p-6':'p-0'}`}>
                    {
                        show
                        &&
                        <form>
                            <div className="flex flex-col space-y-4 p-5">
                                <label className="text-[20px] font-semibold">Topic</label>
                                <input type="text" placeholder="Enter Title" className="rounded-sm p-3 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                                <label className="text-[20px] font-semibold">Department</label>
                                <select className="rounded-sm p-3 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100">
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
                                <input type="text" placeholder="Enter tags" className="rounded-sm p-3 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                                <button 
                                    onClick={handleClick}
                                type="button" className="border-2 p-3 text-[18px] font-semibold rounded-md hover:bg-gray-200">Create New Request</button>
                            </div>
                        </form> 
                    }
                </div>
            </div>
            <div className="relative z-0 my-4 min-h-screen rounded-md">
                    <Request/>
                    <Request/>
                    <Request/>
                    <Request/>
                    <Request/>
                    <Request/>
                    <Request/>
                    <Request/>
                    <Request/>
                    <Request/>
                </div>
        </div>
    )
}