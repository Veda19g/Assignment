import circle from "../assets/purple-circle.png";
import preview from "../assets/uiAid-image.png";
import logo from "../assets/uiAid-logo.png";
function HeroSection() {
  return (
    <section className="relative w-full px-6 md:px-20 pt-10 pb-32 overflow-hidden">

\      <div className="absolute inset-0 bg-gradient-to-br from-[#F7ECFF] to-[#E3F1FF] h-[70%] z-0 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-white z-0 pointer-events-none" />

      <nav className="w-full flex items-center py-2 relative z-20">

        <div className="flex items-center gap-3 flex-none">
           <img src={logo} alt="logo" className="w-[130px] cursor-pointer" />
        </div>

        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex items-center gap-12 text-[#2B2841] font-medium">
            <a className="hover:text-[#6A5AE0] transition cursor-pointer text-xl">
              About
            </a>
            <a className="hover:text-[#6A5AE0] transition cursor-pointer text-xl">
              Work
            </a>
            <a className="hover:text-[#6A5AE0] transition cursor-pointer text-xl">
              Research
            </a>
          </div>
        </div>

        <div className="flex-none">
          <button
            className="
              px-6 py-2
              border-2 border-[#6A5AE0]
              text-[#6A5AE0]
              rounded-full
              bg-transparent
              cursor-pointer
              hover:bg-[#f4f2ff]
              transition
            "
          >
            Login
          </button>
        </div>

      </nav>
      {/* LEFT CIRCLE */}
      <div className="absolute left-42 top-1/3 w-[260px] opacity-70 hidden lg:block z-10 pointer-events-none">
        <img src={circle} alt="decor" />
      </div>

      {/* RIGHT CIRCLE */}
      <div className="absolute right-44 top-1/2 w-[260px] opacity-70 hidden lg:block z-10 pointer-events-none">
        <img src={circle} alt="decor" />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-20 mt-10">
        <h1 className="text-[42px] md:text-[56px] font-bold text-[#1F1F2D] leading-tight">
          Effortlessly Create High-Quality Articles with Our AI <br />
          Article Generator
        </h1>

        <p className="text-[#6B7280] text-lg mt-4">
          AI has the potential to revolutionize the way we live and work, from improving
          healthcare and transportation to enhancing the way.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            className="
              px-8 py-3
              bg-[#6A5AE0]
              text-white
              rounded-full
              font-medium
              shadow-md
              transition
              cursor-pointer
              hover:bg-[#594cd0]
              hover:shadow-lg
              active:scale-[0.97]
            "
          >
            Get Started
          </button>

          <button
            className="
              px-8 py-3
              border border-[#6A5AE0]
              text-[#6A5AE0]
              rounded-full
              font-medium
              transition
              cursor-pointer
              hover:bg-[#f3f0ff]
              active:scale-[0.97]
            "
          >
            Explore
          </button>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto mt-20 rounded-3xl overflow-hidden shadow-2xl border border-white/20 z-20">
        <img src={preview} alt="Generate Articles" className="w-full" />
      </div>

    </section>
  );
}

export default HeroSection;
