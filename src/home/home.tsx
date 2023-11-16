import PrimaryButton from "../components/primary-button";

export const Home = () => {
  return (
    <div className="w-full flex lg:flex-row gap-12 max-w-full items-start relative">
      <div className="flex mt-36 flex-col text-blue justify-start items-start max-w-xl z-10">
        <h1 className="text-3xl md:flex md:flex-col md:-space-y-12 mb-10 mt-60 lg:mt-0 lg:text-6xl">
          <span>Next generation</span>
          <br />
          <span>digital banking</span>
        </h1>
        <p className="text-gray text-lg lg:tracking-[2px]">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="mt-10">
          <PrimaryButton>Request Invite</PrimaryButton>
        </div>
      </div>
      <div className="w-full max-w-3xl xl:max-w-6xl z-0 absolute -top-60 -right-80">
        <div className="relative w-full">
          <img
            className="object-cover hidden lg:flex w-full h-full transition-transform transform"
            src="/images/bg-intro-desktop.svg"
            alt="Background Intro on Desktop"
          />
          <div className="z-[1] absolute top-32 right-48">
            <img
              className="hidden lg:flex"
              src="/images/image-mockups.png"
              alt="Mockups"
            />
          </div>
        </div>
      </div>
      <div className="w-full absolute top-0 lg:hidden right-0 z-[0]">
        <img
          className="flex"
          src="/images/bg-intro-mobile.svg"
          alt="Mobile Illustration"
        />
      </div>
    </div>
  );
};
