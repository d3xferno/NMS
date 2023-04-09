import Card from "./components/card"
import Comment from "./components/comment"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Request from "./components/request"
import SearchBar from "./components/searchbar"
import SignIn from "./components/signin"
import SignUp from "./components/signup"

export default function App(){
    return (
        <div>
            <Navbar/>
            <Request/>
            <SignIn/>
            <SignUp/>
            <SearchBar/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Footer/>
        </div>
    )
}