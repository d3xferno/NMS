import SearchBar from "../components/searchbar";
import { useState } from "react";

export default function SearchPage(){
    
    const [results,setResults] = useState(null)

    function Content(){
        if(results===null)return <div>No Search Results</div>
        else return <div>Results Found</div>    
    }

    return(
        <div className="">
            <SearchBar/>
            <div className="flex justify-center font-semibold text-[25px]">
                <Content/>
            </div>
        </div>
    )
}