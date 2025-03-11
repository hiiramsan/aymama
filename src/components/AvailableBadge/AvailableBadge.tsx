import React from "react";

const AvailableBadge = () => {
  return (
    <div className="flex items-center">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
      <span className="text-green-500 font-semibold">Available for work</span>
    </div>
  );
};

export default AvailableBadge;