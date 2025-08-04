import { useState } from "react"
import BackIcon from "../Icons/BackIcon"
import { useNavigate } from "react-router"



function ConfigureConvo() {

    const [selectedGender, setSelectedGender] = useState<string>("")
    const [selectedPersonality, setSelectedPersonality] = useState<string>("")
    const [selectedAccent, setSelectedAccent] = useState<string>("")
    const navigate = useNavigate()

  

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
                <button onClick={() => navigate("/conversation/define")}>
                    <BackIcon/>
                </button>
                
                <div className="flex flex-col">
                    <p className="text-xl font-bold text-white">Let's shape your agent's identity</p>
                    <p className="text-gray-600">Define how your agent sounds, speaks, and connects with users.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-row ml-10 mr-10 w-full px-[6vh] py-5 text-lg gap-20">
            <div className="flex flex-col w-1/2 gap-2">
                <p>Agent Name</p>
                <input type="text" className="px-4 py-3.5 w-full bg-[#161730] rounded-lg border-2 border-slate-800 placeholder:text-sm text-sm" placeholder="Feedback builder lol"></input>
            </div>

            <div className="flex flex-col w-1/2 gap-2">
                <p>Choose Agent Voice</p>
                <div className="flex flex-row gap-2">
                    <div className={`flex px-4 py-3.5 bg-[#161730] w-1/4 justify-center items-center rounded-lg hover:cursor-pointer border-2 ${selectedGender === "MALE" ? "border-green-600" : "border-slate-800" }  text-sm`}
                        onClick={() => setSelectedGender("MALE")}>Male</div>
                    <div className={`flex px-4 py-3.5 bg-[#161730] w-1/4 justify-center items-center rounded-lg hover:cursor-pointer border-2 ${selectedGender === "FEMALE" ? "border-green-600" : "border-slate-800" }  text-sm`}
                        onClick={() => setSelectedGender("FEMALE")}>Female</div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-2 ml-10 mr-10 w-full px-[6vh] text-lg ">
            <p>Agent Personality</p>
            <div className="flex flex-row gap-2">
                
                <div className={`flex px-4 py-3.5 bg-[#161730] justify-center items-center rounded-lg border-2 text-sm hover:cursor-pointer ${selectedPersonality === "FRIENDLY" ? "border-green-600" : "border-slate-800"}`}
                     onClick={() => setSelectedPersonality("FRIENDLY")}>Friendly</div>
                <div className={`flex px-4 py-3.5 bg-[#161730] justify-center items-center rounded-lg border-2 text-sm hover:cursor-pointer ${selectedPersonality === "FORMAL" ? "border-green-600" : "border-slate-800"}`}
                     onClick={() => setSelectedPersonality("FORMAL")}>Formal</div>
                <div className={`flex px-4 py-3.5 bg-[#161730] justify-center items-center rounded-lg border-2 text-sm hover:cursor-pointer ${selectedPersonality === "CASUAL" ? "border-green-600" : "border-slate-800"}`}
                     onClick={() => setSelectedPersonality("CASUAL")}>Casual</div>
                <div className={`flex px-4 py-3.5 bg-[#161730] justify-center items-center rounded-lg border-2 text-sm hover:cursor-pointer ${selectedPersonality === "WITTY" ? "border-green-600" : "border-slate-800"}`}
                     onClick={() => setSelectedPersonality("WITTY")}>Witty</div>
                <div className={`flex px-4 py-3.5 bg-[#161730] justify-center items-center rounded-lg border-2 text-sm hover:cursor-pointer ${selectedPersonality === "PROFESSIONAL" ? "border-green-600" : "border-slate-800"}`}
                     onClick={() => setSelectedPersonality("PROFESSIONAL")}>Professional</div>
                <div className={`flex px-4 py-3.5 bg-[#161730] justify-center items-center rounded-lg border-2 text-sm hover:cursor-pointer ${selectedPersonality === "EMPATHETIC" ? "border-green-600" : "border-slate-800"}`}
                     onClick={() => setSelectedPersonality("EMPATHETIC")}>Empathetic</div>
            </div>
        </div>
        <div className="flex flex-col gap-2 ml-10 mr-10 w-full px-[6vh] mt-[5vh]">
            <div className="p-[1.5px] bg-gradient-to-r from-[#AA59D6] to-[#4318FE] w-7/8 rounded-md">
                <div className="bg-[#161730] rounded-md flex flex-col gap-2 p-5 ">
                    <p className="text-sm font-semibold">How Your Agent Speaks</p>
                    <p className="text-sm text-gray-300">Hey! 😊 So glad you’re here. I’m all set to help you out—just let me know what you need, and we’ll take it from there together!</p>
                </div>
            </div>
        </div>
        <div className="flex flex-row ml-10 mr-10 w-full px-[6vh] py-5 text-lg gap-20">
            <div className="flex flex-col w-1/2 gap-2">
                <p>Choose Language & accent</p>
                <div className="pr-3.5 bg-[#161730] w-full rounded-lg border-2 border-slate-800">
                    <select className="px-4 py-3.5 bg-[#161730] w-full h-full placeholder:text-sm text-sm">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Tamil</option>
                        <option>Arabic</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col w-1/2 gap-2 pr-20">
                <p>Agent Mode</p>
                <div className="pr-3.5 bg-[#161730] w-full rounded-lg border-2 border-slate-800">
                    <select className="px-4 py-3.5 bg-[#161730] w-full h-full placeholder:text-sm text-sm">
                        <option>Voice</option>
                        <option>Text</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-2 ml-10 mr-10 w-full px-[6vh] text-lg ">
            <p>Pick a speaking accent</p>
            <div className="flex flex-row gap-2">
                <div className={`flex px-4 py-3.5 bg-[#161730] justify-center items-center rounded-lg border-2 text-sm hover:cursor-pointer ${selectedAccent === "NEUTRAL" ? "border-green-600" : "border-slate-800"}`}
                     onClick={() => setSelectedAccent("NEUTRAL")}>Neutral</div>
                <div className={`flex px-4 py-3.5 bg-[#161730] justify-center items-center rounded-lg border-2 text-sm hover:cursor-pointer ${selectedAccent === "INDIAN" ? "border-green-600" : "border-slate-800"}`}
                     onClick={() => setSelectedAccent("INDIAN")}>Indian</div>
                <div className={`flex px-4 py-3.5 bg-[#161730] justify-center items-center rounded-lg border-2 text-sm hover:cursor-pointer ${selectedAccent === "AMERICAN" ? "border-green-600" : "border-slate-800"}`}
                     onClick={() => setSelectedAccent("AMERICAN")}>American</div>
                <div className={`flex px-4 py-3.5 bg-[#161730] justify-center items-center rounded-lg border-2 text-sm hover:cursor-pointer ${selectedAccent === "BRITISH" ? "border-green-600" : "border-slate-800"}`}
                     onClick={() => setSelectedAccent("BRITISH")}>British</div>
            </div>
        </div>
        <div className="mt-[5vh] mb-[5vh] flex flex-row gap-5 text-white ml-10 mr-10 px-[6vh]">
            <div className="p-0.5 bg-gradient-to-r from-[#AA59D6] to-[#4318FE] rounded-full w-[10vw]">
                <button 
                    className="py-2 px-4 w-full h-full rounded-full bg-[#000216] font-bold text-[#7B61EF]"
                    onClick={() => navigate("/conversation/define")}>
                    Return to Chat
                </button>
            </div>
            <button 
                className="py-2 px-4 rounded-full font-bold bg-gradient-to-r from-[#AA59D6] to-[#4318FE] w-[10vw]"
                onClick={() => navigate("/conversation/customize")}>
                Confirm
            </button>
        </div>
        
      </div>
    </>
  )
}

export default ConfigureConvo
