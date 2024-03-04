import React from "react";

const SubscriptionPanel = () => {
  return (
    <div className="bg-white rounded-2xl px-3 py-4">
      <h2 className="text-xl font-semibold">Subscribe to Premium</h2>
      <p>
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <button className="border-[1.7px] font-medium cursor-pointer rounded-3xl border-[#3B49DF] text-white bg-[#3B49DF] px-2 py-1 hover:bg-[#4d5bf4] mt-6">
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionPanel;
