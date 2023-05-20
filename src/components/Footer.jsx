import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
    return (
        <>
            <div className="border-t h-[55px] flex items-center px-7 text-black/[0.61] bg-[#e4e1e1a4]">
                <p>India</p>
            </div>
            <div className="flex justify-between items-center px-10 h-[55px] border-t text-black/[0.61] bg-[#e4e1e1a4] border-[#c5c0c0]">
                <div>
                    {
                        quickLinks.map((curElem)=>{
                            return(
                                <>
                                    <span className="px-4">
                                        {curElem}
                                    </span>
                                </>
                            )
                        })
                    }
                </div>
                
                <div className="flex gap-6 items-center">
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
