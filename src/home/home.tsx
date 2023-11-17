import PrimaryButton from "../components/button/primary-button";
import {
  BgDesktop,
  MobileIllustration,
  Mockups,
} from "../components/frames/frames";

export const Home = () => {
  return (
    <div className="w-full flex lg:flex-row gap-12 max-w-full relative">
      <div className="absolute w-full max-w-xl h-full -top-14 md:hidden">
        <MobileIllustration />
      </div>
      <div className="flex px-8 md:px-0 mt-48 md:mt-8 lg:mt-28 flex-col text-blue items-center md:items-start md:max-w-xs lg:max-w-lg md:z-10">
        <h1 className="text-4xl md:flex md:flex-col lg:text-6xl lg:tracking-[2px] md:-space-y-10 mb-10 mt-60 md:mt-0 md:text-4xl">
          <span>Next generation</span>
          <br />
          <span>digital banking</span>
        </h1>
        <p className="text-gray text-sm text-center md:text-start lg:tracking-[2px]">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="mt-10">
          <PrimaryButton>Request Invite</PrimaryButton>
        </div>
      </div>
      <div className="w-full max-w-3xl xl:max-w-5xl md:z-0 absolute -top-36 xl:-top-52 md:-right-72">
        <div className="relative w-full">
          <BgDesktop />
          <div className="z-[1] w-full max-w-sm lg:max-w-md xl:max-w-2xl absolute top-2 md:top-20 xl:top-28 md:right-56 xl:right-40">
            <Mockups />
          </div>
        </div>
      </div>
    </div>
  );
};
