export const About = () => {
  const data = [
    {
      image: "/images/icon-online.svg",
      heading: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      image: "/images/icon-budgeting.svg",
      heading: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      image: "/images/icon-onboarding.svg",
      heading: "Fast Onboarding",
      description:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      image: "/images/icon-api.svg",
      heading: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];

  return (
    <div className="lg:px-32 px-6 text-center md:text-start min-h-screen w-full flex flex-col max-w-full bg-light-grayish-blue">
      <div className="flex mt-32 w-full max-w-2xl flex-col">
        <h1 className="text-4xl text-blue md:flex md:flex-col lg:tracking-[2px] mb-10">
          Why choose Easybank?
        </h1>
        <p className="text-gray text-md text-center md:text-start lg:tracking-[1.2px]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full d:items-start mt-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-8 items-center md:items-start"
          >
            <img className="w-16 h-16" src={item.image} alt="" />
            <div className="space-y-8">
              <h1 className="xl:text-2xl text-lg text-blue">{item.heading}</h1>
              <p className="xl:text-lg tracking-wide text-sm text-gray">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
