import React from "react";
import { SocialMediaIcons, WhiteLogo } from "../frames/frames";
import PrimaryButton from "../button/primary-button";

export const Footer = () => {
  return (
    <footer className="w-full h-full px-6 items-center text-center max-h-xl md:h-60 bottom-0 flex flex-col md:flex-row justify-between 2xl:px-40 pt-14  lg:px-20 bg-blue">
      <div className="flex lg:space-x-28 md:space-x-12 items-center text-center md:text-start flex-col lg:flex-row md:flex-row md:items-start">
        <div className="flex flex-col gap-8 lg:gap-16">
          <WhiteLogo />
          <SocialMediaIcons />
        </div>
        <div>
          <ul className="text-white mb-6 flex flex-col gap-5 list-none">
            <li className="hover:text-secondary-color hover:cursor-pointer">
              About Us
            </li>
            <li className="hover:text-secondary-color hover:cursor-pointer">
              Contact
            </li>
            <li className="hover:text-secondary-color hover:cursor-pointer">
              Blog
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white mb-6 flex flex-col gap-5 list-none">
            <li className="hover:text-secondary-color hover:cursor-pointer">
              Careers
            </li>
            <li className="hover:text-secondary-color hover:cursor-pointer">
              Support
            </li>
            <li className="hover:text-secondary-color hover:cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="lg:ml-12 w-46">
          <PrimaryButton></PrimaryButton>
        </div>
        <div>
          <span className="text-gray">© Easybank. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};
