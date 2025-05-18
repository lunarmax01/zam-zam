import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

function Nav() {
    return (
        <div className="w-full h-[14vh] flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-8 lg:px-16 py-2 absolute z-10 bg-transparent ">
            {/* LOGO */}
            <Link to="/">
                <div className="hidden sm:block w-24 h-24 sm:w-24 sm:h-24 lg:w-[180px] lg:h-[180px] bg-[url('/sam_logo_no_bg.png')] bg-no-repeat bg-cover"></div>
            </Link>

            {/* MENU */}
            <div className="w-full sm:w-auto flex flex-wrap sm:flex-nowrap justify-around sm:justify-between items-center gap-3 sm:gap-6 mt-2 sm:mt-0">
                <Link to="/">
                    <div className="block sm:hidden w-14 h-14 relative bg-[url('/sam_logo_no_bg.png')] bg-no-repeat bg-cover"></div>
                </Link>
                <Link className="text-white text-sm sm:text-base xs:w-0 xs:h-0 xxs:w-0 xxs:h-0 xxxs:w-0 xxxs:h-0 overflow-hidden absolute" to="/">Home</Link>
                <Link className="text-white text-sm sm:text-base xs:w-0 xs:h-0 xxs:w-0 xxs:h-0 xxxs:w-0 xxxs:h-0 overflow-hidden absolute" to="/menu">Menu</Link>

                <Link className="text-white flex items-center text-sm sm:text-base" to="/chatbot">
                    ChatBot <FaRobot className="text-[#D12C30] ml-2 text-[18px] sm:text-[22px]" />
                </Link>

                <Link to="/info" className="font-serif flex flex-col items-center text-white text-xs sm:text-sm">
                    <span className="flex items-center">
                        <GiShoppingCart className="text-[#D12C30] text-[18px] sm:text-[22px] mr-1" />
                        ZAM ZAM
                    </span>
                    <b>8:00 | 24:00</b>
                </Link>

                <Link to="/contact" className="font-serif font-bold text-white text-xs sm:text-sm text-center">
                    <span className="flex items-center">
                        <GiShoppingCart className="text-[#D12C30] text-[18px] sm:text-[22px] mr-1" />
                        +998 77-777-77-77
                    </span>
                    <b className="block text-[red]">ZAM ZAM</b>
                </Link>
            </div>
        </div>
    );
}

export default Nav;
