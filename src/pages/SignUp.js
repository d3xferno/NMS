import { useContext, useState } from "react";
import { AuthContext, TestContext } from "../contexts/context";
import api from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(){

    const {auth,setAuth} = useContext(AuthContext)

    function SignUp(){
        const [uname,setUname] = useState('')
        const [pwd,setPwd] = useState('')
        const navigate = useNavigate()
        const [error,setError] = useState(null)

        async function handleSubmit(e){
            e.preventDefault();
            const formData = {
                username:uname,
                password:pwd
            }
            console.log(formData);
            api.post('/register',formData)
            .then(res =>{
                if(res.status==201){
                    setError("User Already Exists")
                }else{
                    navigate("/")
                    setAuth(formData)
                    console.log(JSON.stringify(formData))
                    sessionStorage.setItem('auth',JSON.stringify(formData))
                }
            })
            .catch(err => {
                setError("Couldn't Register")
            })
        }
    
        return(
            <>
                <form className="bg-white m-4 rounded-md p-4 my-8 shadow-2xl">
                    <p className="text-center text-5xl font-semibold m-4">Sign Up</p>
                    <div className="flex flex-col space-y-4 p-5 w-[450px]">
                        <label className="text-[20px] font-semibold">Username</label>
                        <input 
                            value={uname}
                            onChange={(e)=>{setUname(e.target.value)}}
                        type="text" placeholder="Enter Username" className="rounded-sm p-3 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                        <label className="text-[20px] font-semibold">Password</label>
                        <input 
                            value={pwd}
                            onChange={(e)=>{setPwd(e.target.value)}}
                        type="password" placeholder="Enter password" className="rounded-sm p-3 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                        <label className="text-[20px] font-semibold">Confirm Password</label>
                        <input type="password" placeholder="Re-Enter password" className="rounded-sm p-3 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                        <button 
                            onClick={handleSubmit}
                        type="button" className="border-2 p-3 text-[18px] font-semibold rounded-md hover:bg-gray-200">Sign Up</button>
                        {error &&
                        <p className='bg-red-500 p-2 rounded-md text-white text-center'>{error}</p>
                        }
                    </div>
               </form> 
            </>
        )
    }
    return(
        <div className="mt-12 flex justify-center items-center w-full 2xl:min-h-screen">
                <SignUp/>
        </div>
    )
}