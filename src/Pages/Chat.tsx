import { useState} from "react";
import { Outlet, useLocation} from "react-router";

interface SegmentMap {
  [key: string]: any;
}

// Correct variable declaration with type annotation
const segmentToNumber: SegmentMap = {
  'define': 1,
  'configure': 2,
  'customize': 3,
  'publish': 4
};


function Chat() {

  //const traingleHeight = 8
  const [width, setWidth] = useState(60);
  const location = useLocation()
  const index = location.pathname?.split('/').pop()
  let stage = 1;
  if(index){
    stage = segmentToNumber[index]
  }
  


  // Chat Section Resize Logic
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = width;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
    
      const newWidth = startWidth + (deltaX / window.innerWidth) * 100;

      const minWidth = 0;
      const maxWidth = 100;
      setWidth(Math.max(minWidth, Math.min(newWidth, maxWidth)));
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };


  return (
   <>
    <div className="flex flex-row items-center justify-center w-full h-[93vh]">
        <div className={`flex flex-col h-[93vh] bg-[#000216]`} style={{ width: `${width}%` }}>
            <div className="flex flex-row gap-2 mt-2 justify-center">
              <div className={`z-[4] flex flex-row relative w-[23%] h-[8vh] ${stage == 1 && "bg-gradient-to-r text-white from-[#AA59D6] to-[#4318FE]"} px-6 py-2 before:content-[''] before:absolute before:right-[-1vw] before:bottom-0 before:border-l-[1vw] ${stage == 1 && "before:border-l-[#4318FE]"} ${stage != 1 && "before:border-l-[#161730] bg-[#161730]"} before:border-t-[4vh] before:border-t-transparent before:border-b-[4vh] before:border-b-transparent rounded-bl-md rounded-tl-md`}>
                <div className={`flex flex-col ${stage == 1 ?  "text-white" : "text-[#7177FF]"}`}>
                  <p className="font-bold">Define</p>
                  <p className="text-[10px]">Define what your agent should do</p>
                </div>
                <div className="loader"></div> 
              </div>
              <div className={`z-[3] flex flex-row relative w-[23%] h-[8vh] ${stage == 2 && "bg-gradient-to-r text-white from-[#AA59D6] to-[#4318FE]"} px-8 py-2 before:content-[''] before:absolute before:right-[-1vw] before:bottom-0 before:border-l-[1vw] ${stage == 2 && "before:border-l-[#4318FE]"} ${stage != 2 && "before:border-l-[#161730] bg-[#161730]"} before:border-t-[4vh] before:border-t-transparent before:border-b-[4vh] before:border-b-transparent after:content-[''] after:absolute after:left-0 after:bottom-0 after:border-l-[1vw] after:border-l-[#000216] after:border-t-[4vh] after:border-t-transparent after:border-b-[4vh] after:border-b-transparent`}>
                <div className={`flex flex-col ${stage == 2 ?  "text-white" : "text-[#7177FF]"}`}>
                  <p className="font-semibold">Configure & Train</p>
                  <p className="text-[10px]">Set up traits, memory & tools</p>
                </div>
                <div className="loader"></div>
              </div>
              <div className={`z-[2] flex flex-row relative w-[23%] h-[8vh] ${stage == 3 && "bg-gradient-to-r text-white from-[#AA59D6] to-[#4318FE]"} px-8 py-2 before:content-[''] before:absolute before:right-[-1vw] before:bottom-0 before:border-l-[1vw] ${stage == 3 && "before:border-l-[#4318FE]"} ${stage != 3 && "before:border-l-[#161730] bg-[#161730]"} before:border-t-[4vh] before:border-t-transparent before:border-b-[4vh] before:border-b-transparent after:content-[''] after:absolute after:left-0 after:bottom-0 after:border-l-[1vw] after:border-l-[#000216] after:border-t-[4vh] after:border-t-transparent after:border-b-[4vh] after:border-b-transparent`}>
                <div className={`flex flex-col ${stage == 3 ?  "text-white" : "text-[#7177FF]"}`}>
                  <p className="font-semibold">Test</p>
                  <p className="text-[10px]">Connect data & fine tune</p>
                </div>
                <div className="loader"></div>
              </div>
              <div className={`z-[1] flex flex-row relative w-[23%] h-[8vh] ${stage == 4 && "bg-gradient-to-r text-white from-[#AA59D6] to-[#4318FE]"} px-6 py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:border-l-[1vw] ${stage != 4 && "bg-[#161730]"} after:border-l-[#000216] after:border-t-[4vh] after:border-t-transparent after:border-b-[4vh] after:border-b-transparent rounded-br-md rounded-tr`}>
                <div className={`flex flex-col ${stage == 4 ?  "text-white" : "text-[#7177FF]"}`}>
                  <p className="font-semibold">Publish</p>
                  <p className="text-[10px]">Launch your own agent</p>
                </div>
                <div className="loader"></div>
              </div>

            </div>
          <Outlet/>
        
        </div>
        <div className="flex items-center justify-center w-[1%] h-full bg-[#282A55]">
            <div className="h-1/10 w-1/3 bg-[#7B61EF] rounded-lg hover:cursor-col-resize" onMouseDown={handleMouseDown}></div>
        </div>
        <div className={`flex flex-col h-full bg-[#050926] p-2`} style={{ width: `${99 - width}%` }}>
          <div className=" flex flex-row items-center justify-center px-4 py-2 bg-[#0E1128] gap-2 rounded-lg text-white font-bold">
            <div className="flex items-center justify-center bg-gradient-to-r p-[2px] from-[#AA59D6] to-[#4318FE] rounded-lg px-3 py-1 w-1/2 hover:cursor-pointer">Instructions</div>
            <div className="flex items-center justify-center rounded-lg px-3 py-1 w-1/2 hover:cursor-pointer">Flow</div>
          </div>
        </div>
    </div>
   </>
  )
}

export default Chat