import React from "react";

const TrendingPanel = () => {
  const trendingArr = [
    { punchLine: "Leap Year: How Will You Spend Your Bonus Day?", comments: 2 },
    {
      punchLine: "How To Stop Procrastinating and Do Hard Things",
      comments: 7,
    },
    { punchLine: "Meme Monday", comments: 54 },
    { punchLine: "Mentor Matching — February 2024 🤝", comments: 10 },
    {
      punchLine:
        "Explain Memory Safe Programming Languages, Like I'm Five Please",
      comments: 5,
    },
  ];

  return (
    <div className="bg-white rounded-2xl py-4 mt-6 flex flex-col gap-3">
      <div className="px-3">
        <h2 className="text-xl font-semibold">What's Trending</h2>
        <p className="text-[12px] text-gray-500">
          Discussion threads targeting the whole community
        </p>
      </div>
      <hr className="border-[0.5px] border-gray-200" />
      {trendingArr.map(({ punchLine, comments }) => {
        return (
          <>
            <div className="px-3 hover:cursor-pointer hover:text-blue-600">
              <p>{punchLine}</p>
              <span className="text-gray-400 text-sm">{comments} Comments</span>
            </div>
            <hr className="border-[0.5px] border-gray-200" />
          </>
        );
      })}
    </div>
  );
};

export default TrendingPanel;
