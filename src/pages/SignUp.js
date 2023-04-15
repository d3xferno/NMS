import SignUp from "../components/signup";

export default function SignUpPage(){
    return(
        <div className="flex flex-col justify-center items-center h-[85vh] w-full gap-8">
                <p className="text-4xl font-semibold">Sign Up</p>
                <SignUp/>
        </div>
    )
}