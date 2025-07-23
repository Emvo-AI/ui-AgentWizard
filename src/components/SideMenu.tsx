import Logo from '../assets/EmvoLogo.png'
import HomeIcon from '../Icons/HomeIcon'
import BarChartIcon from '../Icons/BarChartIcon'
import NotificationIcon from '../Icons/NotificationIcon'
import MoreIcon from '../Icons/MoreIcon'
import DocumentsIcon from '../Icons/DocumentsIcon'
import SettingsIcon from '../Icons/SettingsIcon'
import ArrowIcon from '../Icons/ArrowIcon'


function SideMenu({isMenuOpen, setIsMenuOpen} : {isMenuOpen: boolean, setIsMenuOpen: (value: boolean) => void}) {

  

  return (
    <>
      <div className={`fixed menu absolute flex flex-col space-around  min-h-[100vh] bg-[#161730] left-0 top-0  pt-8 pb-8 gap-10 text-white ${isMenuOpen ? "w-[20vw] pl-6 pr-6" : "w-[5vw] items-center"} z-20`}>
        <div className="menu-header flex flex-row  items-center h-[8vh] mb-5">
            <div className="logo w-[6vh] h-[6vh] flex items-center justify-center bg-[#121620] rounded-lg">
              <img src={Logo} alt="Logo" className="w-[90%] h-[90%]"/>
            </div>
            {isMenuOpen && <p className="text-white text-2xl font-bold ml-5">Emvo Studio</p>}   
        </div>
        <div className="menu-main flex flex-col gap-3">
            {isMenuOpen && <p className='mb-2 ml-4 text-xl'>MAIN MENU</p>}
            
        <div className='main-menu-container'>
            <div className={`flex flex-row items-center text-white font-bold gap-4 p-4 rounded-lg bg-gradient-to-br from-[#868CFF] to-[#4318FF] ${isMenuOpen ? "" : "w-fit"}` }> 
                <p className={`text-[10vh] `}><HomeIcon /></p>
                {isMenuOpen && <p className='text-2xl'>Home</p>}
                
            </div>
        </div>
        <div className='main-menu-container'>
            <div className='flex flex-row items-center text-white gap-4 p-4 rounded-lg'> 
                <p className='text-[10vh]'><BarChartIcon/></p>    
                {isMenuOpen && <p className='text-2xl'>Analytics</p>}
            </div>
        </div>
            <div className='main-menu-container'>
              <div className='flex flex-row items-center text-white gap-4 p-4 rounded-lg'> 
                <p className='text-[10vh]'><NotificationIcon /></p>
                {isMenuOpen && <p className='text-2xl'>Notifications</p>}
                
              </div>
            </div>
            <div className='main-menu-container'>
              <div className='flex flex-row items-center text-white gap-4 p-4 rounded-lg'> 
                <p className='text-[10vh]'><DocumentsIcon/></p>
                {isMenuOpen && <p className='text-2xl'>Tools & Integrations</p>}
                
              </div>
            </div>
            <div className='main-menu-container'>
              <div className='flex flex-row items-center text-white gap-4 p-4 rounded-lg'> 
                <p className='text-[10vh]'><SettingsIcon/></p>
                {isMenuOpen && <p className='text-2xl'>Settings</p>}
                
              </div>
            </div>
            <div className='main-menu-container'>
              <div className='flex flex-row items-center text-white gap-4 p-4 rounded-lg'> 
                <p className='text-[10vh]'><MoreIcon/></p>
                {isMenuOpen && <p className='text-2xl'>More</p>}
                
              </div>
            </div>

          </div>
          <div className="menu-workspace ">
            {isMenuOpen && (
              <div className='flex flex-row justify-between border-t-1 text-white text-lg p-2 '>
                <p className='text-xl'>WORKSPACE</p>
                <p className='text-2xl text-[#9747FF]'>+</p>
              </div>
            )}
            
            <div className={`flex flex-col gap-15  pt-6 pb-6 ${isMenuOpen ? "pl-6 pr-2" : ""} `}>
              <div className='workspace-item flex flex-row justify-between'>
                <div className=' flex flex-row items-center gap-8'>
                  <div className='h-[1vh] w-[1vh] rounded-full bg-[#9747FF]'></div>
                  {isMenuOpen && <p className='text-2xl'>Team 1</p>}
                  
                </div>
                {isMenuOpen && <ArrowIcon />}
              </div>
              <div className='workspace-item flex flex-row justify-between'>
                <div className=' flex flex-row items-center gap-8'>
                  <div className='h-[1vh] w-[1vh] rounded-full bg-[#9747FF]'></div>
                  {isMenuOpen && <p className='text-2xl'>Team 2</p>}
                  
                </div>
                {isMenuOpen && <ArrowIcon />}
              </div>
              <div className='workspace-item flex flex-row justify-between'>
                <div className=' flex flex-row items-center gap-8'>
                  <div className='h-[1vh] w-[1vh] rounded-full bg-[#9747FF]'></div>
                  {isMenuOpen && <p className='text-2xl'>Team 3</p>}
                  
                </div>
                {isMenuOpen && <ArrowIcon />}
                
              </div>
              
            </div>
            
          </div>
        </div> 
    </>
  )
}

export default SideMenu