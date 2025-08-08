import TickIcon from "../Icons/TickIcon"
function Building() {

  
  return (
   <>
    <div className="flex flex-col px-[8vh] py-[4vh]">

        <p className="text-2xl text-white font-bold">Assembling your agent</p>
        <p className="text-gray-400 leading-none mt-3 text-sm">We’ve gathered everything we need from you.</p>
        <p className="text-gray-400 leading-none mt-1 text-sm">Now we’re assembling your agent with all the tools, traits, and knowledge you’ve provided.</p>

        <div className="flex flex-row px-5 py-4 rounded-md border-1 border-[#AA59D6] bg-[#161730] mt-10">
            <div className="flex items-center h-full w-[3vh] rounded-full mr-3">
                <TickIcon />
            </div>
            <div className="flex flex-col">
                <p className="text-[#B2A1FF] font-semibold text-lg">Getting your agent aligned with its mission</p>
                <p className="text-xs text-white">Let’s define what it does, who it helps, and how it behaves.</p>
            </div>
        </div>
        <div className="h-[10vh] w-0.5 bg-[#161730] ml-10 mt-2 mb-2"></div>
        <div className="flex flex-row px-5 py-4 rounded-ul-md rounded-ur-md border-t-1 border-l-1 border-r-1 border-[#AA59D6] bg-[#161730]">
            <div className="flex flex-col">
                <p className="text-[#B2A1FF] font-semibold text-lg">Getting your agent aligned with its mission</p>
                <p className="text-xs text-white">Let’s define what it does, who it helps, and how it behaves.</p>
            </div>
        </div>
        <div className="flex flex-row px-5 py-4  border-l-1 border-r-1 border-[#AA59D6] bg-[#161730]">
            <div className="flex flex-col">
                <p className="text-[#B2A1FF] font-semibold text-lg">Getting your agent aligned with its mission</p>
                <p className="text-xs text-white">Let’s define what it does, who it helps, and how it behaves.</p>
            </div>
        </div>
        <div className="flex flex-row px-5 py-4 rounded-ul-md rounded-ur-md border-l-1 border-r-1 border-b-1 border-[#AA59D6] bg-[#161730]">
            <div className="flex flex-col">
                <p className="text-[#B2A1FF] font-semibold text-lg">Getting your agent aligned with its mission</p>
                <p className="text-xs text-white">Let’s define what it does, who it helps, and how it behaves.</p>
            </div>
        </div>
        

    </div>
   </>
  )
}

export default Building