export default function SearchBar(){
    return(
        <>
            <form className="m-10">
                <div className="flex gap-1">
                    <input type="text" placeholder="Type Something . ." className="rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black w-[100%]"/>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 border-2 p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                <div className="flex my-2 gap-3">
                    <select className="rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black">
                        <option>Department</option>
                        <option>BME</option>
                        <option>CHEM</option>
                        <option>CIVIL</option>
                        <option>CSE</option>
                        <option>ECE</option>
                        <option>EEE</option>
                        <option>IT</option>
                        <option>MECH</option>
                    </select>
                    <input type="text" placeholder="Enter Course Code" className="rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black"/>
                    <input type="text" placeholder="Enter Tag" className="w-[25%] rounded-sm p-2 border-2 focus:outline-none focus:border-2 focus:border-black"/>
                    <button type="button" className="border-2 p-2 rounded-sm font-semibold">Add Tag</button>
                </div>
            </form>
        </>
    )
}