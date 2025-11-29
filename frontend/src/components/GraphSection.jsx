import BookingChart from "./BookingChart";

export default function GraphSection() {
  return (
<section className="flex flex-col lg:flex-row items-center  justify-center px-4 md:px-12 lg:px-20 py-24 gap-12 w-full">

      <div className="w-full md:w-1/2">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#1F1F2D] leading-tight mb-4">
          Review, export and publish copy
        </h2>

        <p className="text-[#6A6A7B] text-base md:text-lg max-w-md mb-8 leading-relaxed">
          Simply provide our AI writer with 1–2 sentences on what to write, and it'll understand and start writing for you.
        </p>

        <ul className="space-y-5">

          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#E8E4FC] flex items-center justify-center shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#6A5AE0" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[#1F1F2D] text-base">
              Include any SEO keywords you want to rank for
            </span>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#E8E4FC] flex items-center justify-center shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#6A5AE0" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[#1F1F2D] text-base">
              Customize your copy with tone and perspective options
            </span>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#E8E4FC] flex items-center justify-center shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#6A5AE0" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[#1F1F2D] text-base">
              Choose from 25+ languages
            </span>
          </li>

        </ul>
      </div>

      <div className="w-full md:w-full lg:w-1/2 flex justify-center">
  <div
    className="p-3 md:p-6 w-full max-w-full md:max-w-[650px] lg:max-w-[850px]"
    style={{
      background: "linear-gradient(120deg, #FFE8EB 0%, #E5F0FF 100%)",
      borderRadius: "32px",
      boxShadow: "0px 20px 40px rgba(0,0,0,0.08)"
    }}
  >
    <div className="bg-white rounded-2xl   shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
      <div className="w-full">
        <BookingChart />
      </div>
    </div>
  </div>
</div>


    </section>
  );
}
