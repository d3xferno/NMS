import axios from 'axios'
import { useState } from 'react'

export default function SignIn(){

    return(
        <>
            <form>
                <div className="flex flex-col space-y-5 m-10 p-5 w-[450px]">
                    <label className="text-[20px] font-semibold">Username</label>
                    <input type="text" placeholder="Enter Username" className="rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                    <label className="text-[20px] font-semibold">Password</label>
                    <input type="password" placeholder="Enter password" className="rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                    <button type="button" className="border-2 p-2 text-[18px] font-semibold rounded-sm hover:bg-gray-200">Sign In</button>
                </div>
           </form> 
        </>
    )
}