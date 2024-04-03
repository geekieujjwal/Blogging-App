import React from "react";
import "../MainPage.css";

const SponsoredBlogs = () => {
  return (
    <div>
      <div class="horizontal_line_wrapper">
        <div class="horizontal_line"></div>
      </div>
      <section className="card_wrap p-10">
        <div className="flex justify-evenly">
          {/* First Div */}
          <div className="flex">
            {/* Card Text */}
            <div className="z-10">
              <h4 className="text-[#C03035] text-[1rem] font-bold hover:underline decoration-white">
                SPONSORED
              </h4>
              <p className="flex flex-col text-[3.8rem] text-white font-bold drop-shadow-[0.05em_0.05em_0_rgba(0,0,0)] hover:underline gap-[-10px]">
                <span style={{ marginBottom: "-25px", marginTop: "-10px" }}>
                  10+ Best{" "}
                </span>
                <span style={{ marginBottom: "-25px" }}>Resources & </span>
                <span style={{ marginBottom: "-25px" }}>Tools for Web</span>
                <span style={{ marginBottom: "-25px" }}>Designers (2024 </span>
                <span> Update)</span>
              </p>
              <p className="text-[1rem] font-bold text-white">
                By{" "}
                <span className="text-[#C03035] hover:underline">
                  WDD STAFF
                </span>
              </p>
            </div>
            {/* Card Image */}
            <div className="max-w-[550px] ml-[-200px] rounded-xl overflow-hidden card_img_one">
              <div className="overlay"></div>
              <img
                src="https://www.webdesignerdepot.com/imager/assets/posts/featured/baw_mar_24_c764524587aa464c671576b8540b19f1.webp"
                alt="img"
                className="h-full"
              />
            </div>
          </div>
          {/* Vertical Line */}
          <div class="vertical_line_wrapper">
            <div class="vertical_line"></div>
          </div>
          {/* Second Div */}
          <div>
            {/* Card Image */}
            <div className="max-w-[350px] rounded-xl overflow-hidden card_img_one">
              <div className="overlay"></div>
              <img
                src="https://www.webdesignerdepot.com/imager/assets/posts/featured/jory_c764524587aa464c671576b8540b19f1.webp"
                alt="img"
                className="h-full"
              />
            </div>
            {/* Card Text */}
            <div className="z-10">
              <h4 className="text-[#C03035] text-[1rem] font-bold hover:underline decoration-white">
                COMPILATIONS
              </h4>
              <p className="flex flex-col text-[2rem] text-white font-bold drop-shadow-[0.05em_0.05em_0_rgba(0,0,0)] hover:underline gap-[-10px]">
                <span style={{ margin: "-5px 0 -10px 0" }}>
                  3 Essential Design{" "}
                </span>
                <span>Trends, April 2024</span>
              </p>
              <p className="text-[1rem] font-bold text-white">
                By{" "}
                <span className="text-[#C03035] hover:underline">
                  CARRIE COUSINS
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Horizontal Line */}
        <div class="horizontal_line_wrapper" className="mt-10">
          <div class="horizontal_line horizontal_line_second"></div>
        </div>
        <div className="flex mt-[40px] justify-evenly">
          {/* Third Div */}
          <div>
            {/* Card Image */}
            <div className="max-w-[350px] rounded-xl overflow-hidden card_img_one">
              <div className="overlay"></div>
              <img
                src="https://www.webdesignerdepot.com/imager/assets/posts/featured/jory_c764524587aa464c671576b8540b19f1.webp"
                alt="img"
                className="h-full"
              />
            </div>
            {/* Card Text */}
            <div className="z-10">
              <h4 className="text-[#C03035] text-[1rem] font-bold hover:underline decoration-white">
                COMPILATIONS
              </h4>
              <p className="flex flex-col text-[2rem] text-white font-bold drop-shadow-[0.05em_0.05em_0_rgba(0,0,0)] hover:underline gap-[-10px]">
                <span style={{ margin: "-5px 0 -10px 0" }}>
                  3 Essential Design{" "}
                </span>
                <span>Trends, April 2024</span>
              </p>
              <p className="text-[1rem] font-bold text-white">
                By{" "}
                <span className="text-[#C03035] hover:underline">
                  CARRIE COUSINS
                </span>
              </p>
            </div>
          </div>
          {/* Vertical Line */}
          <div class="vertical_line_wrapper">
            <div class="vertical_line_second"></div>
          </div>
          {/* Fourth Div */}
          <div className="flex">
            {/* Card Image */}
            <div className="max-w-[550px]  rounded-xl overflow-hidden card_img_one">
              <div className="overlay"></div>
              <img
                src="https://www.webdesignerdepot.com/imager/assets/posts/featured/baw_mar_24_c764524587aa464c671576b8540b19f1.webp"
                alt="img"
                className="h-full"
              />
            </div>
            {/* Card Text */}
            <div className="z-10">
              <h4 className="text-[#C03035] text-[1rem] font-bold hover:underline decoration-white">
                SPONSORED
              </h4>
              <p className="flex flex-col text-[3.8rem] text-white font-bold drop-shadow-[0.05em_0.05em_0_rgba(0,0,0)] hover:underline gap-[-10px] ml-[-150px]">
                {/* <span style={{ marginBottom: "-25px", marginTop: "-10px" }}>
                  What Negative Effects{" "}
                </span>
                <span style={{ marginBottom: "-25px" }}>
                  Does a Bad Website{" "}
                </span>
                <span style={{ marginBottom: "-25px" }}>Design Have On My</span>
                <span> Business?</span> */}
                <span style={{ marginBottom: "-25px", marginTop: "-10px" }}>
                  10+ Best{" "}
                </span>
                <span style={{ marginBottom: "-25px" }}>Resources & </span>
                <span style={{ marginBottom: "-25px" }}>Tools for Web</span>
                <span style={{ marginBottom: "-25px" }}>Designers (2024 </span>
                <span> Update)</span>
              </p>
              <p className="text-[1rem] font-bold text-white">
                By{" "}
                <span className="text-[#C03035] hover:underline">
                  WDD STAFF
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsoredBlogs;
