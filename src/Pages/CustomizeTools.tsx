import { useState } from "react"
import BackIcon from "../Icons/BackIcon"
import { useNavigate } from "react-router";
import GmailIcon from "../Icons/ToolsIcon/GmailIcon";



function CustomizeTools() {

    
    const navigate = useNavigate()
    const [recommendedTools] = useState<string[]>(["Gmail"])
 
  return (
    <>
      <div className="min-h-[75vh] w-full  mt-[5vh] rounded-[12px] overflow-y-auto  flex flex-col gap-2 text-gray-200 overflow-x-hidden
                [&::-webkit-scrollbar]:w-0.5
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-green-600
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className="headerConfig">
            <div className="flex flex-row gap-5 ml-10 items-center ">
                <button onClick={() => navigate("/conversation/configure")}>
                    <BackIcon/>
                </button>
                <div className="flex flex-col">
                    <p className="text-xl font-bold text-white">Connect your tools</p>
                    <p className="text-gray-600">Let your agent access the tools it needs to perform tasks and fetch the right information.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col ml-10 mr-10 w-full px-[6vh] py-1 text-lg gap-3 h-[10vh]">
            <div className="bg-[#161730] w-[90%] p-3 rounded-md">
                <p className="text-[2.3vh]">Recommended for you</p>
                <p className="text-[2.3vh] text-gray-600">Let your agent access the tools it needs to perform tasks and fetch the right information.</p>
                <div className="grid mt-5">
                    {recommendedTools.map((tool, index) => (
                        <div key={index} className="flex flex-row items-center py-3 px-6 border-2 w-fit border-[#7B61EF] gap-3 rounded-lg">
                            <input 
                                className="bg-[#18C47A]" 
                                type="checkbox"
                                style={{ transform: 'scale(1.5)' }}/>
                            <div className="flex flex-row h-full items-center gap-2">
                                <GmailIcon/>
                                <p className="font-semibold text-[2.2vh]"> {tool}</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
                
            </div>
            <div className="bg-[#161730] w-[90%] p-3 rounded-md">
                <p className="text-[2.3vh]">Explore all tools</p>
                <p className="text-[2.3vh] text-gray-600">Need something else? Search or browse the full catalogue.</p>
                <div className="grid mt-5">
                    {recommendedTools.map((tool, index) => (
                        <div key={index} className="flex flex-row items-center py-3 px-6 border-2 w-fit border-[#7B61EF] gap-3 rounded-lg">
                            <input 
                                className="bg-[#18C47A]" 
                                type="checkbox"
                                style={{ transform: 'scale(1.5)' }}/>
                            <div className="flex flex-row h-full items-center gap-2">
                                <GmailIcon/>
                                <p className="font-semibold text-[2.2vh]"> {tool}</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
                
            </div>
            <div className="mt-[5vh] mb-[5vh] flex flex-row gap-5 text-white ml-10 mr-10">
                <div className="p-0.5 bg-gradient-to-r from-[#AA59D6] to-[#4318FE] rounded-full w-[10vw]">
                    <button className="py-2 px-4 w-full h-full rounded-full bg-[#000216] font-bold text-[#7B61EF]">
                        Skip
                    </button>
                </div>
                <button 
                    className="py-2 px-4 rounded-full font-bold bg-gradient-to-r from-[#AA59D6] to-[#4318FE] w-[10vw]"
                    onClick={() => navigate("/conversation/building")}
                    >
                    Confirm
                </button>
            </div> 
        </div>
        
        
        
        
      </div>
    </>
  )
}

export default CustomizeTools
