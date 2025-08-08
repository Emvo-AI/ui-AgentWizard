import BackIcon from "../Icons/BackIcon"
import { useNavigate } from "react-router";
import Galaxy from "../assets/Frame 2147223308.png"
import Man from "../assets/Man1.png"

function Publish() {

    
    const navigate = useNavigate()
 
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
        <div className="px-[6vh] py-10">
            <div className="relative p-[1px] items-center justify-center bg-gradient-to-r from-[#19FB9B] via-[#5497D5] to-[#9945FF] rounded-lg">
                <div className="relative flex flex-col items-center bg-[#161730] h-[60vh] rounded-lg py-6">
                    <p className="font-bold text-[2.7vh]">Your agent is configured and deployment-ready!</p>
                    <p className="text-sm mt-1 text-gray-100">You can now test it internally or move ahead with a full-scale launch.</p>
                    <div className="relative w-full h-[70%]">
                        <img src={Galaxy} alt="Logo" className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 h-[70%] w-auto"/>
                        <img src={Man} alt="Logo" className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-[45%] h-[100%] w-auto"/>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4 mt-10 w-full">
                        <div className="p-[1px] w-[20%] bg-gradient-to-br from-[#AA59D6] to-[#4318FE] rounded-full cursor-pointer">
                            <div className="flex items-center justify-center py-2 px-6 bg-[#161730] rounded-full font-semibold text-[#7B61EF] text-lg">
                                Test it out
                            </div>
                        </div>
                        <div className="flex items-center justify-center py-2 px-6 font-semibold text-lg w-[20%] bg-gradient-to-br from-[#AA59D6] to-[#4318FE] rounded-full cursor-pointer">
                            Publish    
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
         
      </div>
    </>
  )
}

export default Publish
