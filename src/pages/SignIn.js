import { Link, Navigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/context';
import api from '../utils/axios';
import { useNavigate } from 'react-router-dom';

export default function SignInPage(){

    const {auth,setAuth} = useContext(AuthContext)

    function SignIn(){

        const [uname,setUname] = useState('')
        const [pwd,setPwd] = useState('')
        const [error,setError] = useState(null)
        const navigate = useNavigate()
    
        function handleSubmit(e){
            e.preventDefault();
            const formData = {
                username:uname,
                password:pwd
            }
            console.log(formData);

            api.post('/login',formData)
            .then(res => {
                if(res.status==200){
                    navigate("/")
                    setAuth(formData)
                    console.log(JSON.stringify(formData))
                    sessionStorage.setItem('auth',JSON.stringify(formData))
                }else{
                    setError("Incorrect Credentials")
                }
            })
            .catch(err => {
                setError("Unable to Sign In")
            })
        }
    
        return(
            <>
                <form>
                    <div className="flex flex-col space-y-5 m-10 p-5 w-[450px]">
                        <label className="text-[20px] font-semibold">Username</label>
                        <input 
                            value={uname}
                            onChange={e=>setUname(e.target.value)}
                        type="text" placeholder="Enter Username" className="rounded-sm p-3 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                        <label className="text-[20px] font-semibold">Password</label>
                        <input 
                            value={pwd}
                            onChange={e=>setPwd(e.target.value)}
                        type="password" placeholder="Enter password" className="rounded-sm p-3 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100"/>
                        <Link 
                            onClick={handleSubmit}
                        to="/" type="button" className="text-center border-2 p-3 text-[22px] font-semibold rounded-md hover:bg-gray-200">Sign In</Link>
                        {error &&
                        <p className='bg-red-500 p-2 rounded-md text-white text-center'>{error}</p>
                        }
                    </div>
               </form> 
            </>
        )
    }
    return(
        <div className='flex w-full justify-center items-center h-[88vh] signin'>
            <div className="shadow-xl bg-white rounded-md flex flex-col justify-center items-center h-[540px] w-[480px]">
                        <p className="text-5xl font-semibold pt-5">Sign In</p>
                        <SignIn/>
            </div>
        </div>
        
    )
}