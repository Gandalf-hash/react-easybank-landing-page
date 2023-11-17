import React from "react";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "../logo/logo";
import { CloseMenu, OpenMenu } from "../frames/frames";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleToggle = () => {
    !isOpen ? setIsOpen(!isOpen) : setIsOpen(false);
  };

  return (
    <div className="p-4 lg:hidden">
      <div className="mx-auto flex flex-row justify-between items-center">
        <Logo />
        {!isOpen ? (
          <OpenMenu onClick={handleToggle} />
        ) : (
          <CloseMenu onClick={handleToggle} />
        )}
      </div>
      <div className="flex flex-col justify-center mx-auto">
        {isOpen && <MobileMenu isOpen={isOpen} toggleMenu={handleToggle} />}
      </div>
    </div>
  );
};
