import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
    return (
        <>
            <div className="border-t h-[45px] flex items-center px-7 text-black/[0.61] bg-[#e4e1e1a4]">
                <p>India</p>
            </div>
            <div className="flex justify-around md:justify-between items-center h-[45px] border-t text-black/[0.61] text-[10px] md:text-base bg-[#e4e1e1a4] border-[#c5c0c0]">
                <div className="">
                    {
                        quickLinks.map((curElem)=>{
                            return(
                                <>
                                    <span className="md:px-4 px-2">
                                        {curElem}
                                    </span>
                                </>
                            )
                        })
                    }
                </div>
                
                <div className="flex gap-3 md:gap-6 items-center">
                    {
                        settingMenu.map((curElem)=>{
                            return(
                                <>
                                    <span>
                                        {curElem}
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

export default Footer;
