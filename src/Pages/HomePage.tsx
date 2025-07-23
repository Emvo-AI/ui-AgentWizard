import { useState } from 'react';
import Net from '../assets/net-4.png.png'
import EmvoAvatar from '../assets/EmvoAvatar.png';
import AgentCard from '../components/AgentCard';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';

function HomePage() {

    const [prompt, setPrompt] = useState("");
    const [activeButton, setActiveButton] = useState("RETAIL")

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full pt-[15vh] pl-[7vw] pr-[7vw]">
        <div className="main-screen flex flex-col w-full items-center z-[10]">
            <p className="text-[7vh] text-white font-semibold font-weight-700 text-center leading-[8vh] font-['Poppins']">Deploy <span className="bg-gradient-to-r from-[#EC83BB] via-[#4318FF]  to-[#26E5A8]  bg-clip-text text-transparent">intelligent AI teams</span>, <br/> quickly and seamlessly.</p>
            <p className="text-white mt-[2vh] text-md">🔮 Just type what you want Emvo to build - one prompt is all it takes to build. 🧠 </p>
            <div className="flex flex-row mt-[5vh] w-[43vw] h-[12vh] bg-[#00031C] border-3 border-[#AA59D6] rounded-2xl  shadow-[0_0_70px_rgba(170,89,214,1)] p-4 text-white">
                <form className='w-full h-full'> 
                    <input 
                        type='text' 
                        className='flex w-2/3 text-sm focus:outline-none placeholder:text-white placeholder:text-lg placeholder:font-normal h-full' 
                        placeholder="✨ Type an idea, task or a role for your AI agent"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                </form>
            </div>
            <p className="text-white mt-[3vh] text-lg font-semibold mt-[7vh]">Tailor your AI agent by usecase 🪄</p>
            <div className="flex flex-row gap-4 mt-[2vh] min-w-[46vw] z-[10] text-md">
                <button className="bg-[#1C1F28] text-white px-4 py-1 rounded-full hover:bg-[#6A4CD8] transition-colors">Sales Agent</button>
                <button className="bg-[#1C1F28] text-white px-4 py-1 rounded-full hover:bg-[#6A4CD8] transition-colors">Customer Agent Support</button>
                <button className="bg-[#1C1F28] text-white px-4 py-1 rounded-full hover:bg-[#6A4CD8] transition-colors">Lead Qualification Agent</button>
            </div>
            <div className="flex flex-row gap-4 mt-2 min-w-[46vw] z-[10] text-md">
                <button className="bg-[#1C1F28] text-white px-4 py-1 rounded-full hover:bg-[#6A4CD8] transition-colors">HR Onboarding Agent</button>
                <button className="bg-[#1C1F28] text-white px-4 py-1 rounded-full hover:bg-[#6A4CD8] transition-colors">Customer Agent Support</button>
                <button className="bg-[#1C1F28] text-white px-4 py-1 rounded-full hover:bg-[#6A4CD8] transition-colors">Healthcare Appointment Agent</button>
            </div>
            <p className="text-[7vh] mt-[20vh] text-white font-semibold font-weight-700 text-center leading-[8vh] font-['Poppins']">Build smarter workflows with<br/><span className="bg-gradient-to-r from-[#EC83BB] via-[#4318FF]  to-[#26E5A8]  bg-clip-text text-transparent">plug and play </span>AI agents.</p>
            <div className='w-full min-h-[150vh] mt-[12vh] rounded-xl bg-gradient-to-br from-[#4FFFB0]  via-[#161730] to-[#4FFFB0] p-[2px]'>
              <div className='flex flex-col items-center p-[4vh] w-full h-full bg-[#161730] rounded-xl'>
                <p className="text-white text-xl font-medium">⚡10-Day Go-Live: 80% Prebuilt, 20% Yours. ⚡</p>
                <div className='flex flex-row gap-5 mt-[5vh] text-white text-xl'>
                  <button className={`border-[1px] border-white/12 rounded-xl pt-3 pb-3 px-8 hover:cursor-pointer ${activeButton == "ALL" ? "bg-gradient-to-br from-[#AA59D6] to-[#4318FE] font-bold" : "" }`} onClick={() => setActiveButton("ALL")}>All</button>
                  <button className={`border-[1px] border-white/12 rounded-xl pt-3 pb-3 px-8 hover:cursor-pointer ${activeButton == "RETAIL" ? "bg-gradient-to-br from-[#AA59D6] to-[#4318FE] font-bold" : "" }`} onClick={() => setActiveButton("RETAIL")}>Retail</button>
                  <button className={`border-[1px] border-white/12 rounded-xl pt-3 pb-3 px-8 hover:cursor-pointer ${activeButton == "INSURANCE" ? "bg-gradient-to-br from-[#AA59D6] to-[#4318FE] font-bold" : "" }`} onClick={() => setActiveButton("INSURANCE")}>Insurance</button>
                  <button className={`border-[1px] border-white/12 rounded-xl pt-3 pb-3 px-8 hover:cursor-pointer ${activeButton == "HEALTHCARE" ? "bg-gradient-to-br from-[#AA59D6] to-[#4318FE] font-bold" : "" }`} onClick={() => setActiveButton("HEALTHCARE")}>Healthcare</button>
                  <button className={`border-[1px] border-white/12 rounded-xl pt-3 pb-3 px-8 hover:cursor-pointer ${activeButton == "AUTOMOBILE" ? "bg-gradient-to-br from-[#AA59D6] to-[#4318FE] font-bold" : "" }`} onClick={() => setActiveButton("AUTOMOBILE")}>Automobile</button>
                </div>
                <div className='flex flex-wrap justify-center w-full mt-[10vh] gap-[4vh]'>
                  <AgentCard/>
                  <AgentCard/>
                  <AgentCard/>
                  <AgentCard/>
                </div>
              </div>
            </div>
  
            <div className='w-[100vw] h-[1vh] bg-gradient-to-r from-[#AA59D6] to-[#4318FE] mt-[20vh] rounded-full mt-[10vh] -rotate-4 '></div>
            <div className='flex flex-row gap-[10vh] mt-[10vh]'>
              <div className='w-[7vh] h-[7vh] bg-gradient-to-r from-[#4FFFB0] to-[#4318FE] p-0.5 rounded-full'>
                <div className='flex items-center justify-center h-full w-full bg-[#00031C] rounded-full'>
                  <InstagramIcon />
                </div>
              </div>
              <div className='w-[7vh] h-[7vh] bg-gradient-to-r from-[#4FFFB0] to-[#4318FE] p-0.5 rounded-full'>
                <div className='flex items-center justify-center h-full w-full bg-[#00031C] rounded-full'>
                  <LinkedinIcon/>
                </div>
              </div>
            </div>
            <p className='text-white/90 text-lg mt-[5vh]'>© Emvo AI. Pvt. Ltd.  2025. All rights reserved  / Fullfilment Policy / Help@emvo.ai</p>
            <img src={EmvoAvatar} className='mt-[20vh] mb-[20vh]'></img>
        </div>

        <img src={Net} alt="Logo" className="fixed w-[95vw] absolute bottom-0 right-0 z-[0] opacity-30"/>
      </div>
    </>
  )
}

export default HomePage
6