import BackIcon from "../Icons/BackIcon"
import { useNavigate } from "react-router";
import { useState } from "react";
import Blur from "../components/Blur";
import DotMenuIcon from "../Icons/dotMenuIcon";
import StarIcon from "../Icons/StarIcon";
import { UserButton} from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

function Publish() {

    const {user, isLoaded } = useUser();


    
    const navigate = useNavigate()
    const [tab, setTab] = useState<string>("Draft")
 
  return (
    <>
      <div className="min-h-[75vh] w-full   mt-[5vh] rounded-[12px] overflow-y-auto  flex flex-col gap-2 text-gray-200 overflow-x-hidden
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
                    <p className="text-xl font-bold text-white">Your Agent Is Prepped & Primed</p>
                    <p className="text-gray-600">Everything’s in place. Run a quick test or go ahead and deploy with confidence.</p>
                </div>
            </div>
        </div>
        <div className="px-[6vw] py-10 w-full ">
            <div className="flex flex-row gap-2 p-2 w-fit bg-[#161730] rounded-md mt-2 text-lg font-semibold">
                <p className={`flex items-center justify-center w-[12vw] py-2 rounded-lg font-semibold hover:cursor-pointer ${tab === "Draft" ? "bg-[#7B61EF]" : ""}`}
                    onClick={() => {setTab("Draft")}}>Draft Agents</p>
                <p className={`flex items-center justify-center w-[12vw] py-2 rounded-lg font-semibold hover:cursor-pointer ${tab === "Published" ? "bg-[#7B61EF]" : ""}`}
                    onClick={() => {setTab("Published")}}>Published Agents</p>
                <p className={`flex items-center justify-center w-[12vw] py-2 rounded-lg font-semibold hover:cursor-pointer ${tab === "Live" ? "bg-[#7B61EF]" : ""}`}
                    onClick={() => {setTab("Live")}}>Live Agents</p>
            </div>
            <div className="grid w-full mt-10">
                <div className="px-[1px] pt-[0.5px] pb-[1.5px] w-[27vw] min-h-[21vw] bg-gradient-to-br from-[#4450AC] via-[#050925] to-[#4450AC] rounded-3xl">
                    <div className="relative flex flex-col h-full w-full bg-[#050925] rounded-3xl">
                        <div className="flex flex-row justify-between px-5 mt-7">
                            <div className="gap-3 flex flex-row">
                                <p className="font-semibold text-xl">Cart Recovery Pro</p>
                            </div>
                            <DotMenuIcon/>
                        </div>
                        <div className="flex flex-row items-center justify-between px-5 mt-3">
                            <div className="p-[1px] bg-gradient-to-r from-[#393D64] to-[#00031C] rounded-full">
                                <div className="z-10 flex flex-row items-center justify-center w-[8vw] text-xs py-1 bg-black gap-2 rounded-full">
                                    <StarIcon/> 
                                    Draft
                                </div>  
                            </div>
                            <p className="text-gray-500 text-xs">Last edited 5 min ago</p>
                        </div>
                        <p className="text-sm text-gray-400 mx-5 mt-5 leading-[120%s]">Detects drop-off moments and re-engages customers with offers, nudges, and support. Your conversion hero for abandoned carts.</p>
                        <div className="flex flex-row px-5 mt-5 gap-2 items-center">
                            <UserButton/>
                            <div className="flex flex-col text-gray-400">
                                <p className="text-xs">Created by</p>
                                <p className="text-sm">{isLoaded && user?.firstName + " " + user?.lastName}</p>
                            </div> 
                        </div>
                        <div className="flex flex-row w-full px-5 items-center mt-7 gap-2 justify-center">
                            <div className="flex h-fit w-[10vw] items-center justify-center p-[1px] w-[10vw] bg-gradient-to-br from-[#AA59D6] to-[#4318FE] rounded-full cursor-pointer">
                                <div className="flex items-center justify-center py-2 px-6 w-full bg-[#050925] rounded-full font-semibold text-[#7B61EF] text-md">
                                    Test
                                </div>
                            </div>
                            <div className="flex items-center justify-center py-2 px-6 font-semibold text-md w-[12vw] bg-gradient-to-br from-[#AA59D6] to-[#4318FE] rounded-full cursor-pointer">
                                Continue Building    
                            </div>
                        </div>
                        <Blur/>
                    </div>
                </div>
            </div>
        </div>
        
        
         
      </div>
    </>
  )
}

export default Publish
