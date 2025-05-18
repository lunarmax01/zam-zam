import { Link } from "react-router-dom";
import MenuRoutes from "./MenuRoutes";
import { useEffect } from "react";

function Menu() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");

    const handleMouseMove = (e) => {
      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const boxX = rect.left + rect.width / 10;
        const boxY = rect.top + rect.height / 10;

        const offsetX = (e.clientX - boxX) / 120;
        const offsetY = (e.clientY - boxY) / 120;

        box.style.transform = `rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const boxes = document.querySelectorAll(".box2");

    const handleMouseMove = (e) => {
      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const boxX = rect.left + rect.width / 10;
        const boxY = rect.top + rect.height / 10;

        const offsetX = (e.clientX - boxX) / 80;
        const offsetY = (e.clientY - boxY) / 90;

        box.style.transform = `rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#000000] pt-14 px-6 md:px-24 overflow-hidden relative">
      <div className="text-white py-28">
        <h1 className="text-3xl md:text-6xl font-serif ml-4 md:ml-14">Menu</h1>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around mt-10 gap-4 md:gap-6">
          <Link to="/">
            <button
              id="translate_06s"
              className="w-[150px] h-[45px] bg-[#1F1F1F] hover:bg-[#D12C30] rounded-full text-white"
            >
              Burger
            </button>
          </Link>
          <Link to="/lavash">
            <button
              id="translate_06s"
              className="w-[150px] h-[45px] bg-[#1F1F1F] hover:bg-[#D12C30] rounded-full text-white"
            >
              Lavash
            </button>
          </Link>
          <Link to="/baliq">
            <button
              id="translate_06s"
              className="w-[150px] h-[45px] bg-[#1F1F1F] hover:bg-[#D12C30] rounded-full text-white"
            >
              Baliq
            </button>
          </Link>
          <Link to="/all">
            <button
              id="translate_06s"
              className="w-[150px] h-[45px] bg-[#1F1F1F] hover:bg-[#D12C30] rounded-full text-white"
            >
              Hammasi
            </button>
          </Link>
        </div>

        <div className="mt-10 w-full relative">
          {/* Dekorativ animatsiyalar faqat katta ekranda */}
          <div className="hidden md:block box w-[180px] h-[180px] rounded-full bg-[url('/images.png')] bg-center bg-no-repeat shadow-lg absolute left-[-80px] transform -translate-x-1/2 top-[-320px] z-50 blur-[3px]"></div>
          <div className="hidden md:block box w-[529px] h-[350px] absolute left-[1100px] bottom-[-150px] bg-[url('public/mint_3d.png')] bg-cover bg-no-repeat blur-[3px]"></div>

          {/* Menu tarkibini render qilish */}
          <MenuRoutes />

          {/* Hammasi tugmasi */}
          <div className="w-full h-[30vh] flex items-center justify-center mt-4">
            <button
              id="translate_06s"
              className="w-44 h-12 border-[2px] border-[#303030] rounded-full hover:bg-[red] hover:text-white text-white"
            >
              Hammasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
