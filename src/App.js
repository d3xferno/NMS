import Navbar from "./components/navbar"
import {Routes,Route} from 'react-router-dom'
import Upload from "./components/upload"
import SignUpPage from "./pages/SignUp"
import SignInPage from "./pages/SignIn"
import SearchPage from "./pages/Search"

export default function App(){
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
            </Routes>
        </div>
    )
}