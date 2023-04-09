export default function SignIn(){
    return(
        <>
            <form>
                <div className="flex flex-col w-1/4 space-y-5 m-10 p-5">
                    <label className="text-[20px] font-semibold">Username</label>
                    <input type="text" placeholder="Enter Username" className="rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black"/>
                    <label className="text-[20px] font-semibold">Password</label>
                    <input type="password" placeholder="Enter password" className="rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black"/>
                    <button type="button" className="border-2 p-2 text-[18px] font-semibold rounded-sm">Sign In</button>
                </div>
           </form> 
        </>
    )
}