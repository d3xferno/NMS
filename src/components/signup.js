export default function SignUp(){
    return(
        <>
            <form>
                <div className="flex flex-col w-1/4 space-y-5 m-10 p-5">
                    <label className="text-[20px] font-semibold">Username</label>
                    <input type="text" placeholder="Enter Username" className="rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black"/>
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
                    <label className="text-[20px] font-semibold">Password</label>
                    <input type="password" placeholder="Enter password" className="rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black"/>
                    <label className="text-[20px] font-semibold">Confirm Password</label>
                    <input type="password" placeholder="Re-Enter password" className="rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black"/>
                    <label className="text-[20px] font-semibold">Profile Image <span className="text-[14px] font-normal">(Optional)</span></label>
                    <input type="file" className="rounded-sm p-4 border-2 focus:outline-none focus:border-2 focus:border-black"/>
                    <button type="button" className="border-2 p-2 text-[18px] font-semibold rounded-sm">Sign Up</button>
                </div>
           </form> 
        </>
    )
}