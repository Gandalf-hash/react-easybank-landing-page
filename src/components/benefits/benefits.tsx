import BenefitsItems from "./benefits-data";

export const BenefitsSection = () => {
  return (
    <div className="lg:pl-20 2xl:pl-40 xl:min-h-[80vh] px-6 w-full flex flex-col max-w-full bg-light-grayish-blue">
      <div className="flex text-center lg:text-start lg:self-start self-center mt-32 w-full max-w-xl flex-col">
        <h1 className="text-3xl text-blue md:flex md:flex-col lg:tracking-[2px] mb-10">
          Why choose Easybank?
        </h1>
        <p className="text-gray text-[15px]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <BenefitsItems></BenefitsItems>
    </div>
  );
};
