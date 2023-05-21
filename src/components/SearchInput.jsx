import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { json, useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
    const {query} = useParams();
    const [SearchQuery , setSearchQuery] = useState(query || '');
    const navigate = useNavigate();

    const searchQueryHandler = (event)=>{
        if(event.key === "Enter" && SearchQuery.length > 0){
            navigate(`/${SearchQuery}/${1}`);
        }
    }
    return (
        <>
            <div id="searchbox" className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0" >
                <AiOutlineSearch size={18} color="#9aa0a6"/>
                <input type="text" onChange={(e)=>setSearchQuery(e.target.value)} 
                onKeyUp={searchQueryHandler}
                value={SearchQuery}
                autoFocus
                className="grow outline-0 text-black/[0.87]"
                />
                <div className="h-[46px] flex gap-4 items-center">
                    {
                        SearchQuery ? (
                            <>
                                <IoMdClose size={24} color="#70757a" className="cursor-pointer"
                                    onClick={()=>setSearchQuery("")}
                                />
                            </>
                        ) : (
                            <>
                            <img src={MicIcon} alt="" className="h-[26px] cursor-pointer"/>
                            <img src={ImageIcon} alt="" className="h-[26px] cursor-pointer"/>
                            
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
};

export default SearchInput;
