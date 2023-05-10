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
import Resolve from "./pages/Resolve"

import { useState } from "react"
import Test from "./pages/Test"

import { AuthContext, TestContext,NoteContext } from "./contexts/context"

export default function App(){
    const [auth,setAuth] = useState(JSON.parse(sessionStorage.getItem('auth')) || false)
    const [cid,setCid] = useState(sessionStorage.getItem('cid')|| '')
    const [id,setId] = useState(sessionStorage.getItem('id') || '')

    return (
        <div className="app">
            <AuthContext.Provider value={{auth,setAuth}}>
            <NoteContext.Provider value={{cid,setCid,id,setId}}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/note" element={<Note cid={cid}/>}/>
                <Route path="/request" element={<RequestPage/>}/>
                <Route path="/upload" element={<Upload/>}/>
                <Route path="/resolve" element={<Resolve/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            </NoteContext.Provider>
            </AuthContext.Provider>
        </div>
    )
}