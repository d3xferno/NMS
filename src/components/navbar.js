import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/context";

export default function Navbar(){

    const [show,setShow] = useState(false);
    const {auth,setAuth} = useContext(AuthContext)

    useEffect(()=>{
        sessionStorage.setItem('auth',JSON.stringify(auth))
    },[auth])

    return(
        <>
        {
            auth 
            ?
            <>
                <nav className="z-40 text-[20px] font-semibold flex gap-5 justify-between items-center h-[100px] border-b-2 sticky top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ml-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <div className="flex gap-5 mr-10 justify-center items-center">
                        <Link to="/" className="p-2 border-2 rounded-md hover:bg-gray-200">Home</Link>
                        <Link to="/request" className="p-2 border-2 rounded-md hover:bg-gray-200">Requests</Link>
                        <Link to="/upload" className="p-2 border-2 rounded-md hover:bg-gray-200">Upload</Link>
                        <Link to="/search" className="p-2 border-2 rounded-md hover:bg-gray-200">Search</Link>
                        <div className="relative inline-block">
                            <svg onClick={()=>{setShow(!show)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {
                                show 
                                &&
                                <div className="z-1 absolute top-20 right-10 text-[18px] shadow-md p-5 w-[200px] text-center space-y-4 rounded-md bg-white flex flex-col justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="">{auth.username}</p>
                                    <Link 
                                        to="/"
                                        onClick={()=>{
                                            setAuth(false)
                                            setShow(false)
                                            sessionStorage.setItem('search_data',null)
                                            sessionStorage.setItem('id','')
                                            sessionStorage.setItem('cid','')
                                        }}
                                    className="border-2 p-2 hover:bg-gray-200 rounded-md">Sign Out</Link>
                                </div>
                            }
                        </div>
                        
                    </div>
                </nav>
            </>
            :
            <>
                <nav className="z-40 text-[20px] font-semibold flex gap-5 justify-between items-center h-[100px] border-b-2 sticky top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ml-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <div className="flex gap-5 mr-10 justify-center items-center">
                        <Link to="/signup" className="p-1 border-b-2 rounded-sm hover:border-b-black">Sign Up</Link>
                        <Link 
                        to="/signin" className="border-2 rounded-md p-2 px-4 hover:bg-gray-200">Login</Link>
                    </div>
                </nav>
            </>
        }
        </>
    )
}