import React from "react";

export const BgDesktop = () => {
  return (
    <div>
      <img
        className="object-cover hidden md:block w-full"
        src="/images/bg-intro-desktop.svg"
        alt="Background Intro on Desktop"
      />
    </div>
  );
};

export const Mockups = () => {
  return (
    <div>
      <img
        className="hidden md:block"
        src="/images/image-mockups.png"
        alt="Mockups"
      />
    </div>
  );
};

export const MobileIllustration = () => {
  return (
    <div>
      <img
        className="flex"
        src="/images/bg-intro-mobile.svg"
        alt="Mobile Illustration"
      />
    </div>
  );
};

export const OpenMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <img
      src="/images/icon-hamburger.svg"
      alt="Open Hamburger Menu"
      onClick={onClick}
    />
  );
};
export const CloseMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <img
      src="/images/icon-close.svg"
      alt="Close Hamburger Menu"
      onClick={onClick}
    />
  );
};