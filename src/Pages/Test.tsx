import BackIcon from "../Icons/BackIcon"
import MicrophoneIcon from "../Icons/MicrophoneIcon";
import Logo from '../assets/EmvoLogo.png'
import SendIcon from "../Icons/SendIcon";
import { useState, useRef } from "react";
import CrossIcon from "../Icons/CrossIcon";
import TickIcon from "../Icons/TickIcon";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from "react-router";

interface Message {
  id: string | number;
  role: "user" | "assistant" | string;
  text: string;
  hasAudioIcon?: boolean;
  url?: string
}


function Test() {

    
    const navigate = useNavigate()

    const [messages] = useState<Message[]>([{
        id: 1234,
        role: "user",
        text: "I want to collect customer feedback and send it to Notion. Also, get internal inputs and beta tester suggestions.",
        url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
    }, 
    {
        id: 5547,
        role: "assistant",
        text: "I want to collect customer feedback and send it to Notion. Also, get internal inputs and beta tester suggestions.",
    },
    {
        id: 5547,
        role: "assistant",
        text: "Noted! This agent is going to be sharp and organized.",
    }]);
    const [connected] = useState<boolean>(true);
    const [typing] = useState<boolean>(false);
    const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
    const [prompt, setPrompt] = useState<string>("")
    //const [recording, setRecording] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const {
      transcript,
      //listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }

    // Skeleton Logic
    // function connectWebsocket(isAudio: boolean){
    //     console.log(isAudio)
    // }

    function onSubmit() {
        
        // setMessages([...messages, {
        //   id: 300,
        //   role: "user",
        //   text: prompt
        // }])

        // setTimeout(() => {
        //   console.log('This runs after 4 seconds!');
        //   navigate("/conversation/configure")
        // }, 4000);
        
        // OnSubmit Logic
    }

    

    async function enableVoice() {   
      setAudioEnabled(true);
      SpeechRecognition.startListening()
    }

    function disableVoice(satisfied : boolean) {   
      setAudioEnabled(false);
      if(satisfied){
        setPrompt(transcript)
      }
      resetTranscript()
    }
 
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
                    <p className="text-xl font-bold text-white">Test your agent</p>
                    <p className="text-gray-600">Interact, explore prompts, and watch how your agent responds. Test tone, accuracy, and flow in real time.</p>
                </div>
            </div>
        </div>
        <div className="px-[6vh]">
            <div className="min-h-[50vh] w-full rounded-[12px]  overflow-hidden  flex flex-col  relative">
            {/* Messages */}
            <div
                id="messages"
                className="h-full overflow-y-auto p-10 bg- flex flex-col scroll-smooth text-white [&::-webkit-scrollbar]:w-0
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            >
                {messages.map((m) => (
                <>
                {m.role === 'user' ?
                    
                    <p
                    key={m.id}
                    className={`relative text-white text-xs font-semibold self-end ml-auto mr-[4vh] mb-1`}
                    ><span className="text-gray-600 mr-2 ">24 sep, 11:59</span> Amit Singh</p> :
                    <p
                    key={m.id}
                    className={`relative text-white text-xs font-semibold ml-[4vh] mb-1`}
                    > Agent Wizard <span className="text-gray-600 ml-2">24 sep, 11:59</span></p>
                }   
                <p
                    key={m.id}
                    className={`relative mb-10 px-6 py-3 rounded-[8px] max-w-[85%] break-words rounded-lg
                    ${
                        m.role === "user"
                        ? "bg-[#292B54] text-white self-end ml-auto"
                        : "bg-[#161730] text-white"
                    }
                    animate-fadeIn
                    `}
                > 
                    {m.role === "user" ? 
                    <img src={m.url} className="bg-[#212F53] rounded-lg absolute w-[5vh] h-[5vh] top-0 right-0 translate-x-[50%] translate-y-[-50%]"></img> : 
                    <img src={Logo} className="bg-[#212F53] rounded-lg absolute w-[5vh] h-[5vh] top-0 left-0 translate-x-[-50%] translate-y-[-50%]"></img>}
                    {m.text}
                </p>
                </>
                ))}
                {/* Typing Indicator */}
                <div
                className={`typing-indicator flex px-4 py-3 bg-[#2A223A] rounded-[8px] w-fit mb-4 transition-opacity duration-300 ${
                    typing ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                >
                <span className="h-2 w-2 bg-[#70757A] rounded-full mr-1 animate-bounce" />
                <span className="h-2 w-2 bg-[#70757A] rounded-full mr-1 animate-bounce [animation-delay:0.2s]" />
                <span className="h-2 w-2 bg-[#70757A] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
                <div ref={messagesEndRef} />
            </div>
            {/* Input Form */}
            <div className="w-full flex items-center absolute justify-center bottom-0 ">
                
                <form
                onSubmit={onSubmit}
                className="flex items-center justify-center gap-6 rounded-lg w-full"
                >
                <div className="w-[80%] bg-gradient-to-r p-[2px] from-[#AA59D6] to-[#4318FE] text-white rounded-xl">
                    <div className="flex justify-between items-center w-full h-full bg-[#050925] py-1 px-4 rounded-xl">
                    <button
                        type="button"
                        onClick={enableVoice}
                        className="p-2  text-lg  hover:cursor-pointer"
                    >
                        <MicrophoneIcon/>
                    </button>
                    {!audioEnabled ? (
                        <input
                            name="message"
                            type="text"
                            placeholder="Tell emvo what you need - and it'll build your AI Agents"
                            autoComplete="off"
                            disabled={!connected}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="flex-1 bg-transparent text-sm focus:outline-none"
                        />
                        ) : (
                        <div className="flex flex-row gap-2 h-full" >
                            <button onClick={() => disableVoice(false)} className="hover:cursor-pointer">
                            <CrossIcon/>
                            </button>
                            <button onClick={() => disableVoice(true)} className="hover:cursor-pointer">
                            <TickIcon/>
                            </button>
                            
                        </div>
                        )}
                        
                    </div>
                    
                
                </div>
                <button
                    type="submit"
                    disabled={!connected}
                    onClick={() => navigate("/conversation/configure")}
                    className="p-4 rounded-lg w-auto bg-gradient-to-r from-[#AA59D6] to-[#4318FE]"
                >
                    <SendIcon/>
                </button>
                </form>
            </div>
            </div>
            </div>
            
            
            
        </div>
    </>
  )
}

export default Test
