import React from "react";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-full text-white bg-secondary-color px-8 rounded-full text-md font-bold py-3 hover:bg-primary-color focus:outline-none ">
      {children}
    </button>
  );
};

export default PrimaryButton;
