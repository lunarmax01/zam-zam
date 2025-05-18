import { useEffect } from "react";
import Nav from "./Navbar";
import Menu from "./Menu";

function Home() {
    useEffect(() => {
        const boxes = document.querySelectorAll(".box");

        const handleMouseMove = (e) => {
            boxes.forEach((box) => {
                const rect = box.getBoundingClientRect();
                const boxX = rect.left + rect.width / 10;
                const boxY = rect.top + rect.height / 10;

                const offsetX = (e.clientX - boxX) / 70;
                const offsetY = (e.clientY - boxY) / 70;

                box.style.transform = `rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <div className="w-[100%] h-auto bg-[#101116]">
                <Nav />
                <div className=" w-[100%] h-[850px] bg-[url('/image.png')] bg-no-repeat bg-cover flex items-center justify-around overflow-hidden relative">
                    <div className="text-white max-w-md md:ml-36 sm:ml-44 xs:ml-28 xxs:ml-5">
                        <h2 className="text-5xl font-extrabold mb-4 leading-tight sm:text-[45px] xs:text-[44px] xxs:text-[39px]">
                            Zam Zam <br /> Maxsus Burger
                        </h2>

                        <p className="text-gray-200 lg:text-base leading-relaxed mb-8 sm:text-sm xxs:text-[12px]">
                            Har luqmasida lazzat! 200g sifatli mol go‘shti, yangi sabzavotlar, erigan pishloq va maxsus
                            barbekyu sousi bilan tayyorlangan. Qovurilgan tuxum va susamli qora bulka esa unga haqiqiy
                            mukammallik bag‘ishlaydi.
                        </p>

                        <div className="flex gap-4 sm:gap-2">
                            <button className="text-[#D12C30] font-bold py-3 w-44 xxs:h-12 justify-center rounded-full border border-[#D12C30] hover:bg-[#D12C30] hover:text-white transition duration-300 flex items-center gap-2 text-lg z-40 sm:text-[17px] xs:text-[16px] xxs:text-[13px] ">
                                Buyurtma berish
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>

                            <button className="text-white font-semibold py-3 px-7 xxs:px-0 xxs:h-12 xxs:w-36 rounded-full border border-white hover:bg-white hover:text-black transition duration-300 text-lg z-40 sm:w-44 sm:text-[17px] sm:px-1 xs:text-[16px] xxs:text-[13px]">
                                Menyuni ko‘rish
                            </button>
                        </div>
                    </div>

                    <div className="w-[10%]"></div>

                    <img
                        src="/images.png"
                        alt="Image 1"
                        className="box w-[110px] h-[110px] rounded-full shadow-lg absolute bottom-[610px] left-[25px] object-cover sm:w-[130px] sm:h-[130px] sm:bottom-[560px] sm:left-[25px] md:bottom [535px] md:left-[35px] lg:w-[180px] lg:h-[180px] lg:bottom-[540px] lg:left-[90px] xl:w-[190px] xl:h-[220px]"
                    />


                    <img
                        src="/98069625-tomato-slice-isolated-on-white-background-clipping-path-full-depth-of-field.png"
                        alt="Tomato"
                        className="box w-[430px] h-[430px] rounded-full shadow-lg absolute left-[-200px] bottom-[60px] z-50 object-cover sm:left-[-220px] xs:w-[350px] xs:h-[350px] xxs:w-[290px] xxs:h-[290px]"
                    />

                    <img
                        src="/qalampir.png"
                        alt="Qalampir"
                        className="box w-[310px] h-[310px] shadow-lg absolute left-[1100px] bottom-[400px] z-10 object-cover"
                    />

                    <img
                        src="/qalampir2.png"
                        alt="Qalampir 2"
                        className="box w-[480px] h-[480px] shadow-lg absolute left-[800px] bottom-[-40px] object-cover"
                    />

                    <img
                        src="/mint_3d.png"
                        alt="Mint"
                        className="box w-[529px] h-[350px] shadow-lg absolute left-[1230px] bottom-[20px] rotate-180 object-cover"
                    />
                    <div className="w-full h-[50vh] bg-gradient-to-t from-black via-black/80 to-transparent absolute bottom-[-100px] z-30"></div>
                </div>
            </div>
        </>
    );
}

export default Home;
