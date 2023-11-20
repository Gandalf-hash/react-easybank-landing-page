import React from "react";

export const Logo = () => {
  return (
    <div>
      <img src="/images/logo.svg" alt="Easy Bank Logo" className="md:w-40" />
    </div>
  );
};

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
      <img className="block" src="/images/image-mockups.png" alt="Mockups" />
    </div>
  );
};

export const MobileIllustration = () => {
  return (
    <div>
      <img
        className="block w-full"
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
