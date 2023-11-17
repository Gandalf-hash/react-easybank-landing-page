import PrimaryButton from "../components/button/primary-button";
import {
  BgDesktop,
  MobileIllustration,
  Mockups,
} from "../components/frames/frames";

export const Home = () => {
  return (
    <div className="w-full flex lg:flex-row gap-12 max-w-full items-start relative">
      <div className="flex mt-36 md:mt-28 flex-col text-blue justify-start items-start md:max-w-md lg:max-w-lg z-10">
        <h1 className="text-3xl md:flex md:flex-col md:-space-y-10 mb-10 mt-60 md:mt-0 md:text-5xl">
          <span>Next generation</span>
          <br />
          <span>digital banking</span>
        </h1>
        <p className="text-gray text-md lg:tracking-[2px]">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="mt-10">
          <PrimaryButton>Request Invite</PrimaryButton>
        </div>
      </div>
      <div className="w-full max-w-3xl xl:max-w-5xl z-0 absolute -top-36 xl:-top-52 md:-right-72">
        <div className="relative w-full">
          <BgDesktop />
          <div className="z-[1] w-full max-w-md xl:max-w-2xl absolute top-20 xl:top-28 right-52 xl:right-40">
            <Mockups />
          </div>
        </div>
      </div>
      <div className="w-full absolute top-0 md:hidden right-0 z-[0]">
        <MobileIllustration />
      </div>
    </div>
  );
};
