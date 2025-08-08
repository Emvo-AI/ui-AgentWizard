function ArrowIcon({strokeColor = '#9747FF'} : {strokeColor?: string}) {

    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[3vh]">
            <path d="M8.5 5L15.5 12L8.5 19" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default ArrowIcon;