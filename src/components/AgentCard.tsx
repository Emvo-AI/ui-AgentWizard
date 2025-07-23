
import HomeIcon from '../Icons/HomeIcon';
import AssetImage1 from '../assets/AssetImage1.png';


function AgentCard() {

  return (
    <>
        <div className='flex w-[48%] min-h-[70vh] bg-gradient-to-br from-[#3d4699] to-[#050925] p-[1px] rounded-[25px]'>
            <div className='flex flex-col w-full h-full bg-[#050925] rounded-[25px] p-10'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center text-white text-lg gap-4'>
                        <p> <HomeIcon/></p>
                        <p className='font-semibold text-2xl'>Cart Recovery Pro</p>
                    </div>
                    <p className='text-white text-xs pt-2 pb-2 pl-6 pr-6 bg-[#00031C] rounded-full border-l-1 border-t-1 border-b-1 border-white/20'>🌟 Coming Soon</p>   
                </div>
                <p className='text-white text-md mt-4'>
                    Detects drop-off moments and re-engages customers with offers, nudges, and support. Your conversion hero for abandoned carts.
                </p>
                <div className='flex items-center mt-8 justify-center w-full'>
                    <img src={AssetImage1} className='w-2/3 h-auto'></img>
                </div>
                <div className='flex flex-col mt-8'>
                    <p className='text-[#4FFFB0] text-md font-bold'>BEST FOR</p>
                    <p className='text-white text-sm'>Checkout Drop-offs | Exit Offers | Cart Recovery</p>
                </div>
                <div className='flex flex-row gap-4 mt-7 text-lg'>
                    <div className='p-[1px] bg-gradient-to-r from-[#3d4699] via-white/40 to-[#050925] rounded-full'>
                        <p className='pt-2 pb-2 pl-15 pr-15 text-white bg-[#00031C] rounded-full'>Preview</p>
                    </div>
                    <p className='pt-2 pb-2 pl-15 pr-15 text-white  rounded-full bg-gradient-to-br from-[#AA59D6] to-[#4318FE]'>Remix</p>
                </div>
                      
            </div>  
        </div>
    </>
  )
}

export default AgentCard