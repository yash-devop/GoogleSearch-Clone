import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
    const {imageSearch , setImageSearch} = useContext(Context);
    const [selectedMenu , setSelectedMenu] = useState("All")
    useEffect(()=>{
        return ()=>setImageSearch(false)
    },[])
    const clickHandler=(menuItem)=>{
        let isTrueImage = menuItem.name === "Images";
        setImageSearch(isTrueImage ? true : false);
        setSelectedMenu(menuItem.name)
        console.log(selectedMenu)
    }
    return (
        <>
            <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 bg-white border-b border-[#ebebeb] flex flex-col md:block sticky top-0">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center grow">
                        <Link to={'/'}><img className="hidden md:block w-[92px] mr-10" src={Logo} alt="" /></Link>
                        <SearchInput />
                    </div>
                    <div className="hidden md:block">
                        <ProfileIcon/>
                    </div>
                </div>

                <div className="flex ml-[-12px] mt-3">
                    {
                        menu.map((menu , index)=>{
                            return(
                                <>
                                    <span key={index} className={` flex items-center p-3 text-[#5f6368] cursor-pointer ${selectedMenu === menu.name ? "text-[#3f83db]": null}`} onClick={()=>clickHandler(menu)}>
                                        <span className="hidden md:block mr-2">
                                            {menu.icon}
                                        </span>
                                        <span className="text-sm">
                                            {menu.name}
                                        </span>
                                        
                                        {/* {selectedMenu === menu.name && (
                                            <div className="h-[3px] bottom-0 bg-red-400 absolute w-fit left-[12px]" />
                                        )} */}
                                    </span>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};

export default SearchResultHeader;
