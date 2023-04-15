import SignIn from './../components/signin'

export default function SignInPage(){
    return(
        <div className="flex flex-col justify-center items-center h-[85vh] w-full gap-4">
                <p className="text-4xl font-semibold">Sign In</p>
                <SignIn/>
        </div>
    )
}