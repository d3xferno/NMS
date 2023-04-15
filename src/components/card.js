export default function Card(){
    return(
        <>
            <div className="border-2 px-3 m-1 py-1 mx-10 flex justify-between rounded-sm hover:bg-gray-200">
                <p className="text-[18px] font-semibold p-1">Title</p>
                <p className="text-[15px] p-1 font-mono">Date: 30th Feb 2023 Uploded by: Username</p>
            </div>
        </>
    )
}