import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return <div className="flex gap-2">
        <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
            <TbGridDots size={20} color="#5f6368"/>
        </span>
        <span className="h-10 w-10 relative flex justify-center items-center">
            <img src={ProfileRing} className="absolute"/>
            <span className="h- w-8 overflow-hidden rounded-full">
                <img src={Profile} alt="" className="h-full w-full object-cover" />
            </span>
        </span>
    </div>;
};

export default ProfileIcon;
