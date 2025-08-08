import { useState } from "react"
import BackIcon from "../Icons/BackIcon"
import { Outlet, useNavigate } from "react-router";



function CustomizeConvo() {

    const [isWebSearchActivated, setIsWebSearchActivated] = useState<boolean>(false);
    const [isKnowledgeBaseActivated, setIsKnowledgeBaseActivated] = useState<boolean>(false);
    
   
    const navigate = useNavigate()

    const Toggle = ({ isOn, onToggle} : any) => {
    return (
     
        <button
          onClick={onToggle}
          className={`relative inline-flex h-[3vh] min-w-[5vh] mt-2 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none hover:cursor-pointer ${
            isOn ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          <span
            className={`inline-block h-[2vh] w-[2vh] transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
              isOn ? 'translate-x-[2.5vh]' : 'translate-x-1'
            }`}
          />
        </button>
      
    );
  };

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
                    <p className="text-xl font-bold text-white">Train your Agent</p>
                    <p className="text-gray-600">Give your agent the data it needs to understand your world.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-row ml-10 mr-10 w-full px-[6vh] py-1 text-lg gap-20">
            <div className="flex flex-row gap-5 py-4 px-5 bg-[#161730] w-[95%] rounded-lg border-2 border-[#FFFFFF0F]">
                <Toggle
                    isOn={isWebSearchActivated}
                    onToggle={() => {
                        setIsWebSearchActivated(!isWebSearchActivated)
                        setIsKnowledgeBaseActivated(false)
                    }}
                    label="Activate"
                    description="The agent will be activated"
                    />
                <div className="flex flex-col">
                    <p className="text-md text-white">Activate Web Search-based knowledge grounding</p>
                    <p className="text-gray-600 text-[2.2vh]">The agent fetches real-time info via Web Search and uses that to generate a better response. </p>
                </div>
            </div>
        </div>
        <div className="flex flex-row ml-10 mr-10 w-full px-[6vh] py-1 text-lg gap-20">
            
            <div className="flex flex-row gap-5 py-4 px-5 bg-[#161730] w-[95%] rounded-lg border-2 border-[#FFFFFF0F]">
                <Toggle
                    isOn={isKnowledgeBaseActivated}
                    onToggle={() => {
                        setIsKnowledgeBaseActivated(!isKnowledgeBaseActivated)
                        setIsWebSearchActivated(false)
                            
                    }}
                    label="Activate"
                    description="The agent will be activated"
                />
                <div className="flex flex-col">
                    <p className="text-md text-white">Create your own knowledge base</p>
                    <p className="text-gray-600 text-[2.2vh]">Upload your links or files so the agent can learn from your sources and respond more accurately.</p>
                    {isKnowledgeBaseActivated && (
                        <>
                            <Outlet/>
                            
                        </> 
                    )}
                    
                </div>     
            </div>
        </div>
        

        <div className="mt-[5vh] mb-[5vh] flex flex-row gap-5 text-white ml-10 mr-10 px-[6vh]">
            <div className="p-0.5 bg-gradient-to-r from-[#AA59D6] to-[#4318FE] rounded-full w-[10vw]">
                <button className="py-2 px-4 w-full h-full rounded-full bg-[#000216] font-bold text-[#7B61EF]">
                    Skip
                </button>
            </div>
            <button className="py-2 px-4 rounded-full font-bold bg-gradient-to-r from-[#AA59D6] to-[#4318FE] w-[10vw]">
                Confirm
            </button>
        </div>
        
        
      </div>
    </>
  )
}

export default CustomizeConvo
