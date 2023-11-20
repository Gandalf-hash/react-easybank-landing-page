import PrimaryButton from "../components/button/primary-button";
import {
  BgDesktop,
  MobileIllustration,
  Mockups,
} from "../components/frames/frames";

export const Home = () => {
  return (
    <div className="lg:pl-32 md:px-6 min-h-screen bg-off-white xl:min-h-[75vh] w-full flex lg:flex-row gap-12 relative">
      <div className="absolute w-full max-w-xl h-full -top-14 md:hidden">
        <MobileIllustration />
      </div>
      <div className="flex mt-48 md:mt-8 lg:mt-28 xl:mt-40 flex-col text-blue items-center md:items-start md:max-w-xs lg:max-w-md md:z-10">
        <h1 className="text-4xl md:flex md:flex-col lg:text-5xl lg:tracking-[2px] md:-space-y-10 mb-10 mt-60 md:mt-0">
          <span>Next generation</span>
          <br />
          <span>digital banking</span>
        </h1>
        <p className="text-gray text-md text-center md:text-start lg:tracking-[0.8px]">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="mt-10">
          <PrimaryButton>Request Invite</PrimaryButton>
        </div>
      </div>
      <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-[1100px] md:z-0 absolute -top-36 xl:-top-60 md:-right-72">
        <div className="">
          <BgDesktop />
          <div className="z-[1] w-full max-w-sm lg:max-w-md xl:max-w-3xl absolute top-2 md:top-20 xl:top-28 md:right-56 xl:right-40">
            <Mockups />
          </div>
        </div>
      </div>
    </div>
  );
};
