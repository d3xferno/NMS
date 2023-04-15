import Comment from './components/comment'

export default function Comments(){
    return (
        <>  
            <div className='mx-10 my-5 w-1/4 space-y-4 p-1'>
                <p className='text-[20px] font-semibold'>Comments</p>
                <input type='text' placeholder='type something . .' className='rounded-sm p-2 border-2 focus:outline-none focus:border-b-gray-500 focus:bg-gray-100 w-full'/>
                <button type='button' className="border-2 p-2 text-[15px] font-semibold rounded-sm hover:bg-gray-200">Add Comment</button>
            </div>
            <div>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </>
    )
}