import PrimaryButton from "../button/primary-button";
import { BgDesktop, MobileIllustration, Mockups } from "../frames/frames";

export const Home = () => {
  return (
    <div className="lg:pl-20 md:px-6 2xl:pl-40 bg-off-white pb-14 xl:pb-0 xl:min-h-[70vh] w-full flex lg:flex-row gap-12 relative">
      <div className="absolute w-full max-w-xl  -top-14 right-0 md:hidden">
        <MobileIllustration />
      </div>
      <div className="flex px-6 md:px-0 mt-48 md:mt-8 lg:mt-28  flex-col text-blue items-center md:items-start md:max-w-xs lg:max-w-sm md:z-10">
        <h1 className="text-4xl md:flex md:flex-col lg:text-5xl md:-space-y-10 mb-10 mt-60 md:mt-0">
          <span>Next generation</span>
          <br />
          <span>digital banking</span>
        </h1>
        <p className="text-gray text-[15px] text-center md:text-start">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="mt-10">
          <PrimaryButton></PrimaryButton>
        </div>
      </div>
      <div className="w-full max-w-[740px] lg:max-w-3xl xl:max-w-[1100px] md:z-0 absolute -top-36 xl:-top-60 md:-right-72">
        <div>
          <BgDesktop />
          <div className="z-[1] w-full max-w-md lg:max-w-md xl:max-w-3xl absolute right-0 md:top-20 xl:top-28 md:right-56 xl:right-40">
            <Mockups />
          </div>
        </div>
      </div>
    </div>
  );
};
