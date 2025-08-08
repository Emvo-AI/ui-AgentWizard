import { useState, useRef } from "react";
import DocIcon from "../Icons/DocIcon";
import DeleteIcon from "../Icons/DeleteIcon";

interface FileUploadItem {
  id: number;
  file: File;                   
  name: string;
  size: number;
  status: 'ready' | 'uploading' | 'completed' | 'error';
  error: string | null;
  progress: number;
}


function CustomizeAdd() {

    const [isWebLinkButtonActive, setIsWebLinkButtonActive] = useState<boolean>(true);
    const [selectedDepth, setSelectedDepth] = useState<string>("Essential");
    const [urls, setUrls] = useState<string[]>([""]);
    //const [ setIsDragActive] = useState<boolean>(false);
    const [files, setFiles] = useState<FileUploadItem[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const SUPPORTED_TYPES = ['.csv', '.ppt', '.txt', '.doc', '.xls', '.pdf', '.docx', '.xlsx', '.pptx'];
    const MAX_SIZE = 10 * 1024 * 1024; // 10MB in bytes

    // File validation
    const validateFile = (file: File) => {
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (!SUPPORTED_TYPES.includes(fileExtension)) {
        return { valid: false, error: `File type ${fileExtension} not supported` };
      }
      
      if (file.size > MAX_SIZE) {
        return { valid: false, error: `File size exceeds 10MB limit` };
      }
      
      return { valid: true };
    };

    const handleUrlChange = (index:number, newValue:string) => {
      const updatedUrls = [...urls];
      updatedUrls[index] = newValue;
      setUrls(updatedUrls);
    };

    // Process files (validation + state update)
    const processFiles = (fileList: FileList) => {
      const newFiles: FileUploadItem[] = Array.from(fileList).map(file => {
        const validation = validateFile(file);
        return {
          id: Date.now() + Math.random(),
          file,
          name: file.name,
          size: file.size,
          status: validation.valid ? 'ready' : 'error',
          error: validation.error || null,
          progress: 0
        };
      });

      setFiles(prev => [...prev, ...newFiles]);
      
      // Auto-upload valid files
      //newFiles.filter(f => f.status === 'ready').forEach(uploadFile);
    };

    const handleDragEnter = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      //setIsDragActive(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      //setIsDragActive(false);
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      //setIsDragActive(false);
      
      const droppedFiles = e.dataTransfer.files;
      if (droppedFiles.length > 0) {
        processFiles(droppedFiles);
      }
    };



    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files;
      if (selectedFiles && selectedFiles.length > 0) {
        processFiles(selectedFiles);
      }
    };

    const removeFile = (fileId: number) => {
      setFiles(prev => prev.filter(file => file.id !== fileId));
    };

    // const uploadFile = async (fileObj) => {
      
    // };


  return (
  <>
    <div className="flex flex-row border-b-2 border-gray-800 w-full mt-5 text-[2.2vh] font-semibold gap-8">
        <div 
          className={`flex items-center justify-center py-4 hover:cursor-pointer ${isWebLinkButtonActive ? "text-[#7B61EF] border-b-3 border-[#7B61EF]" : ""}`}
          onClick={() => setIsWebLinkButtonActive(true)}>Use Web Links</div>
        <div 
          className={`flex items-center justify-center py-4 hover:cursor-pointer ${!isWebLinkButtonActive ? "text-[#7B61EF] border-b-3 border-[#7B61EF]" : ""}`}
          onClick={() => setIsWebLinkButtonActive(false)}>Upload Documents</div>
    </div>
    {
      isWebLinkButtonActive && (
            <>
              <div className="mt-5 flex flex-col">
                  <p className="text-[2.3vh] font-semibold">Crawl Depth</p>
                  <div className="flex flex-row gap-2 p-2 w-4/5 bg-[#00031C] rounded-md mt-2">
                      <p className={`flex items-center justify-center w-1/3 py-0.5 rounded-lg font-semibold hover:cursor-pointer ${selectedDepth === "Essential" ? "bg-[#7B61EF]" : ""}`}
                        onClick={() => {setSelectedDepth("Essential")}}>Essential</p>
                      <p className={`flex items-center justify-center w-1/3 py-0.5 rounded-lg font-semibold hover:cursor-pointer ${selectedDepth === "Comprehensive" ? "bg-[#7B61EF]" : ""}`}
                        onClick={() => {setSelectedDepth("Comprehensive")}}>Comprehensive</p>
                      <p className={`flex items-center justify-center w-1/3 py-0.5 rounded-lg font-semibold hover:cursor-pointer ${selectedDepth === "In-Depth" ? "bg-[#7B61EF]" : ""}`}
                        onClick={() => {setSelectedDepth("In-Depth")}}>In-Depth</p>
                  </div>
                  <p className="text-[2.3vh] text-gray-600 mt-1">Retrieves only high-priority, surface-level information for speed and clarity.</p>
              </div>
              <div className="mt-5 flex flex-col overflow-visible">
                  <p className="text-[2.5vh] font-semibold overflow-visible">Got specific URLs?</p>
                  <div className="flex flex-col gap-2 px-0 py-2 w-4/5 rounded-md mt-2 overflow-visible">
                      <div className="flex flex-col gap-2 w-full overflow-visible">
                          {urls?.map((url, index) => (
                            <input 
                              type="text" 
                              className="w-full px-4 py-3.5 w-full bg-[#00031C] rounded-lg border-2 border-slate-800 placeholder:text-sm text-sm" 
                              placeholder="https://www.example.com"
                              key={index}
                              value={url}
                              onChange={(e) => handleUrlChange(index, e.target.value)}>
                            </input>
                          ))}
                          {/* <p className="text-[#7B61EF] font-bold">+ Add More</p> */}
                      </div>
                  </div>
              </div>
              <p 
                className="text-[#7B61EF] font-bold hover:cursor-pointer"
                onClick={() => {
                  const updatedUrls = [...urls];
                  updatedUrls.push("")
                  setUrls(updatedUrls)
                }}>+ Add More</p>
            
            </>
      )
    }

    {
      !isWebLinkButtonActive && (
        <>  
          <div className="flex flex-col mt-5">
            <p className="font-bold text-[2.3vh]">💡 Well-structured files help your agent perform better</p>
            <p className="text-gray-600 text-[2.3vh]">For best results, upload content in a clean, organised format—Markdown is recommended</p>
            <div className="flex items-center justify-center p-0.5 bg-gradient-to-r from-[#EC83BB] to-[#4318FF] w-full rounded-xl mt-5">
              <div 
                className="flex flex-col items-center justify-center w-full h-[40vh] bg-[#121620] rounded-xl"
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}>

                <p className="text-[2.3vh] font-bold">Upload or drag & drop your files</p>
                <p className="text-gray-600 text-[2.2vh]">Supports: .CSV, .PPT, .TXT, .DOC, .XLS — up to 10MB each EACH</p>
                <p className="text-gray-600">Want a head start? Get sample files.</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept={SUPPORTED_TYPES.join(',')}
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
            {files.length > 0 && (
              <>
                <p className="font-semibold text-[2.2vh]">Files Uploaded</p>
                <p className="text-gray-600 font-[2.2vh]">Upload up to 5 files (10MB max each). We’ll take care of the rest.</p>
                {
                  files.map((file, index) => (
                    <div className="flex fle-row mt-5 justify-between py-3 px-4 w-full bg-[#00031C] border-[1px] border-[#282A55] rounded-md">
                      <div className="flex flex-row gap-2 items-center justify-center h-full" key={index}>
                        <DocIcon/>
                        <p className="text-sm">{file.name}</p>
                      </div>
                      <p 
                        className="hover:cursor-pointer"
                        onClick={() => removeFile(file.id)}><DeleteIcon/></p>
                      
                      
                    </div>
                  ))
                }
              
              </>
              
            )}
          </div>
        </>  
      )
    }


  </>
       
   
  )
}

export default CustomizeAdd