import SeatTable from "./SeatTable";
import circle from "../assets/purple-circle.png";
import textEditor from "../assets/text-editor.png";

function TableSection() {
  return (
    <section  id="table-section" className="w-full px-6 md:px-20 py-20 bg-white">

      <h2 className="text-center text-[40px] md:text-[48px] font-bold text-[#1F1F2D] mb-16">
        How it works
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto relative">

        <div className="w-full lg:w-[45%] ">

          <h3 className="md:text-[32px] text-[20px] font-semibold text-[#1F1F2D] mb-3 md:ml-0 ">
            Enter your post's title & keyword
          </h3>

          <p className="text-[#6B7280] text-base leading-relaxed mb-8 max-w-md md:ml-0 ">
            Simply provide our AI writer with 1-2 sentences on what to write,
            and it'll understand and start writing for you.
          </p>

          <ul className="space-y-4 mb-12 md:ml-0 ">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#E0D4FF] flex items-center justify-center text-[#7C3AED] text-sm flex-shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-[#1F1F2D] text-base">
                Include any SEO keywords you want to rank for
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#E0D4FF] flex items-center justify-center text-[#7C3AED] text-sm flex-shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-[#1F1F2D] text-base">
                Customize your copy with tone and perspective options
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#E0D4FF] flex items-center justify-center text-[#7C3AED] text-sm flex-shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-[#1F1F2D] text-base">
                Choose from 25+ languages
              </span>
            </li>
          </ul>

          <div className="relative w-full max-w-[400px] mx-auto lg:left-1/6 mb-8">
            <img
              src={textEditor}
              alt="text editor interface"
              className="relative z-10 w-full rounded-lg shadow-lg"
            />
          </div>

        </div>

        <div className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <img
            src={circle}
            alt="decoration"
            className="w-[280px] h-[280px] opacity-90"
          />
        </div>

        <div className="w-full lg:w-[45%] relative z-20 mb-12">
          <SeatTable />
        </div>

      </div>
    </section>
  );
}

export default TableSection;
