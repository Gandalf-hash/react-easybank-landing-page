import React from "react";
import { MobileMenu } from "./mobile-menu";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 lg:hidden">
      <div className="mx-auto flex flex-row justify-between items-center">
        <img src="/images/logo.svg" alt="Easy Bank Logo" className="w-40" />
        <img
          src="/images/icon-hamburger.svg"
          alt="Menu"
          onClick={handleToggle}
        />
      </div>
      <div className="flex flex-col justify-center mx-auto">
        {isOpen && <MobileMenu isOpen={isOpen} toggleMenu={handleToggle} />}
      </div>
    </div>
  );
};
