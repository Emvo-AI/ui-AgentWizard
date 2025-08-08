
function CustomizeEdit() {

  return (
   <>
    <div className="flex flex-col gap-7 pl-5 pr-20 py-5">
      <div className="header flex flex-col">
        <p className="font-bold text-[2.4vh]">Create new collection</p>
        <p className="text-gray-600 text-[2.4vh]">Group related inputs into a structured set your agent can learn from—ideal for domain-specific knowledge.</p>
      </div>
      <div className="header flex flex-col gap-3">
        <p className="text-[2.4vh]">Collection Name</p>
        <input type="text" className="px-4 py-3.5 w-full bg-[#00031C] rounded-lg border-2 border-slate-800 placeholder:text-sm text-sm" placeholder="e.g., Customer Support Playbook"></input>
      </div>
      <div className="header flex flex-col gap-3">
        <p className="text-[2.4vh]">Collection description</p>
        <input type="text" className="px-4 py-3.5 w-full bg-[#00031C] rounded-lg border-2 border-slate-800 placeholder:text-sm text-sm" placeholder="e.g.,  Give your collection a clear purpose.  This helps you and your team quickly 
identify documents. "></input>
      </div>
    </div>
    
   </>
  )
}

export default CustomizeEdit