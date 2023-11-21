import BenefitsItems from "./benefits-data";

export const BenefitsSection = () => {
  return (
    <div className="lg:pl-20 2xl:pl-40 min-h-[80vh] px-6 text-center md:text-start  w-full flex flex-col max-w-full bg-light-grayish-blue">
      <div className="flex 2xl:text-start mt-32 w-full max-w-xl flex-col">
        <h1 className="text-3xl text-blue md:flex md:flex-col lg:tracking-[2px] mb-10">
          Why choose Easybank?
        </h1>
        <p className="text-gray text-[15px] text-center md:text-start">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <BenefitsItems></BenefitsItems>
    </div>
  );
};
