import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <HomeHeader/>
                <main className="grow flex justify-center">
                    <div className="flex flex-col items-center w-full mt-32">
                        <img src={Logo} alt="logo" className="w-[275px] md:[275px] mb-8"/>
                        <SearchInput/>
                        <div className="flex gap-2 text-[#3c4043] mt-8">
                            <button className="bg-[#e4e1e134] border rounded-md border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 
                        text-sm px-4 h-9">Google Search</button>
                            <button className="bg-[#e4e1e134] border rounded-md border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 
                        text-sm px-4 h-9">I'm Feeling Lucky</button>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
};

export default Home;
