function PointerComponent({ height = 64, width = 300, color = "bg-red-600", text = "Pointer" }) {
  const tipWidth = height * 0.25;
  
  return (
    <div className="relative inline-block">
      <div 
        className={`${color} pl-4 flex items-center text-white font-medium`}
        style={{ 
          width: width - tipWidth,
          height: height,
        }}
      >
        {text}
        <div 
          className="absolute top-0 right-0 translate-x-full"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${tipWidth}px solid`,
            borderTop: `${height/2}px solid transparent`,
            borderBottom: `${height/2}px solid transparent`,
            borderLeftColor: color.includes('red') ? 'rgb(220, 38, 38)' :
                           color.includes('blue') ? 'rgb(37, 99, 235)' :
                           color.includes('green') ? 'rgb(22, 163, 74)' :
                           color.includes('purple') ? 'rgb(147, 51, 234)' :
                           'rgb(220, 38, 38)'
          }}
        />
      </div>
    </div>
  )
}

export default PointerComponent