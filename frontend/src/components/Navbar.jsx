import { useState } from "react";
import logo from "../assets/uiAid-logo.png";
import menuIcon from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-close.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed z-50 bg-linear-to-br from-[#F7ECFF] to-[#E3F1FF] px-6 md:px-20 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <img src={logo} alt="logo" className="w-[130px] cursor-pointer" />

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 text-[#1F1F2D] font-medium text-lg">

          <button className="hover:text-[#6A5AE0] transition">About</button>
          <button className="hover:text-[#6A5AE0] transition">Work</button>
          <button className="hover:text-[#6A5AE0] transition">Research</button>

          {/* LOGIN BUTTON (important difference!) */}
          <button className="px-6 py-2 border-2 border-[#6A5AE0] text-[#6A5AE0] rounded-full hover:bg-[#f4f2ff] transition">
            Login
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button onClick={() => setOpen(true)} className="lg:hidden">
          <img src={menuIcon} alt="menu" className="w-7" />
        </button>

      </div>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-50">

          <div className="absolute top-0 right-0 w-[65%] h-full bg-white shadow-xl px-6 py-6 flex flex-col">

            <button onClick={() => setOpen(false)} className="self-end mb-6">
              <img src={closeIcon} alt="close" className="w-6" />
            </button>

            <ul className="flex flex-col gap-6 text-[#1F1F2D] text-lg font-medium">
              <li onClick={() => setOpen(false)} className="hover:text-[#6A5AE0]">About</li>
              <li onClick={() => setOpen(false)} className="hover:text-[#6A5AE0]">Work</li>
              <li onClick={() => setOpen(false)} className="hover:text-[#6A5AE0]">Research</li>

              {/* LOGIN MOBILE */}
              <li>
                <button
                  onClick={() => setOpen(false)}
                  className="w-full px-6 py-2 border-2 border-[#6A5AE0] text-[#6A5AE0] rounded-full hover:bg-[#f4f2ff] transition"
                >
                  Login
                </button>
              </li>
            </ul>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
