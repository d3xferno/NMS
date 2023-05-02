import Navbar from "./components/navbar"
import {Routes,Route} from 'react-router-dom'
import Upload from "./components/upload"
import SignUpPage from "./pages/SignUp"
import SignInPage from "./pages/SignIn"
import SearchPage from "./pages/Search"
import Note from "./pages/Note"
import Error from "./pages/Error"
import LandingPage from "./pages/LandingPage"
import RequestPage from "./pages/RequestPage"
import Footer from './components/footer'

import { useState } from "react"
import Test from "./pages/Test"

import { AuthContext, TestContext } from "./contexts/context"

export default function App(){
    const [count,setCount] = useState(sessionStorage.getItem('count') || 0);
    const [auth,setAuth] = useState((sessionStorage.getItem('auth')) || false)
    return (
        <div className="app">
            <AuthContext.Provider value={{auth,setAuth}}>
            <TestContext.Provider value={{count,setCount}}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/note" element={<Note/>}/>
                <Route path="/request" element={<RequestPage/>}/>
                <Route path="*" element={<Test/>}/>
            </Routes>
            </TestContext.Provider>
            </AuthContext.Provider>
        </div>
    )
}