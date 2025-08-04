import CollapseIcon from '../Icons/CollapseIcon';
import HomeIcon from '../Icons/HomeIcon';
import ArrowIcon from '../Icons/ArrowIcon';



function NavBar({isMenuOpen, setIsMenuOpen} : {isMenuOpen: boolean, setIsMenuOpen: (value: boolean) => void}) {

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className={`fixed nav absolute flex flex-row items-center border-r border-black border-1 justify-between h-[7vh] bg-[#161730]  top-0 pl-8 pr-8 z-[50] ${isMenuOpen ? "w-[80vw] left-[20vw]" : "w-[95vw] left-[5vw]"}`}>
        <div className='flex flex-row items-center h-full justify-between gap-3 text-white font-bold'>
            <button onClick={() => openMenu()} className='hover:cursor-pointer'><CollapseIcon/></button>
            <HomeIcon size='2vh'/>
            <ArrowIcon strokeColor='#CBD5E1'/>
            <p className='text-[#7B61EF] text-xl font-bold'>Emvo Studio</p>
          </div>
          {/*

            <div className='flex flex-row bg-[#00031C] rounded-xl pt-3 pb-3 pr-3 pl-6 gap-6 items-center text-white font-bold'>
            <ConfigIcon/>
            <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-[4vh] w-[4vh] rounded-lg'></img>
            </div>
          
          */}

          
        </div>
    </>
  )
}

export default NavBar