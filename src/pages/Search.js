import { useState } from "react";

export default function SearchPage(){
    
    const [tags,setTags] = useState([])
    const [tag,setTag] = useState('')

    function handleTags(e){
        if(tag!=="")setTags([...tags,tag])
        setTag('')
    }

    const [results,setResults] = useState(null);

    function Content(){
        if(results===null)return <div>No Search Results</div>
        else return <div>Results Found</div>    
    }

    const [search,setSearch] = useState('');
    const [dept,setDept] = useState('');
    const [course,setCourse] = useState('');

    function submit(e){
        e.preventDefault();
        const formData = {
            text:search,
            dept:dept,
            course:course,
            tags:tags
        }
        console.log(formData);
    }

    return(
        <div className="bg-white">
            <form className="mx-10 pt-10">
                <div className="flex gap-1">
                    <input type="text" placeholder="Type Something . ." value={search} 
                    onChange={e => setSearch(e.target.value)}
                    className="rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-200 w-[100%]"/>
                    <button
                        onClick={submit}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-white rounded-md w-12 h-12 border-2 p-2 hover:bg-gray-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                <div className="flex my-2 gap-3">
                    <select 
                        onChange={e => setDept(e.target.value)} value={dept}
                    className="rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-200">
                        <option value="">Department</option>
                        <option value="bme">BME</option>
                        <option value="chem">CHEM</option>
                        <option value="civil">CIVIL</option>
                        <option value="cse">CSE</option>
                        <option value="ece">ECE</option>
                        <option value="eee">EEE</option>
                        <option value="it">IT</option>
                        <option value="mech">MECH</option>
                    </select>
                    <input type="text" 
                        onChange={e => setCourse(e.target.value)}
                        value={course}
                    placeholder="Enter Course Code" className="rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-200"/>
                    <input type="text" placeholder="Enter Tag" className="w-[25%] rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-200"
                        onChange={(e)=>{setTag(e.target.value)}}
                        value={tag}
                    />
                    <button type="button" className="bg-white border-2 p-2 rounded-md font-semibold hover:bg-gray-200" onClick={e => handleTags(e)}>Add Tag</button>
                    <div className='flex'>
                        {   tags.length>0
                            &&
                            tags.map((t,i)=> (
                                    <div className='flex mx-1' key={i}>
                                        <p className='font-mono border-2 px-4 p-2 text-center'>#{t}</p>
                                        <button type='button' className='bg-gray-200 p-2' onClick={()=>{
                                            const newTags = tags.filter(function(e){
                                                return e!==t
                                            })
                                            setTags(newTags)
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        </button>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </form>
            <div className="bg-white flex justify-center font-semibold text-[25px] min-h-screen">
                <Content/>
            </div>
        </div>
    )
}

