import popularTools from "../../data";

function MostPopularTools(){
    return(
        <section className="w-full bg-linear-to-br from-[#FFF6E9] to-[#E6F0FF] py-20 px-6 md:px-20">
      
      <div className="text-center mb-14">
        <h2 className="text-[40px] md:text-[48px] font-bold text-[#1F1F2D]">
          Most Popular Tools
        </h2>
        <p className="text-[#6B7280] text-[16px] mt-3">
          These are the most popular tools and a good place to start.  
          <br />Give them a try!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {popularTools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <div
              className="w-10 h-10 flex items-center justify-center rounded-lg mb-4"
              style={{ background: tool.iconBg }}
            >
              <span className="text-xl">{tool.icon}</span>
            </div>

        
            <h3 className="text-[20px] font-semibold text-[#1F1F2D] mb-2">
              {tool.title}
            </h3>

            <p className="text-[#6B7280] text-[15px] leading-relaxed">
              {tool.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
    )
}

export default MostPopularTools;