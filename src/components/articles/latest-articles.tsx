export const LatestArticlesSection = () => {
  const articlesData = [
    {
      image: "/images/image-currency.jpg",
      author: "Claire Robinson",
      heading: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      image: "/images/image-restaurant.jpg",
      author: " Wilson Hutton",
      heading: "Treat yourself without worrying about money",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      image: "/images/image-plane.jpg",
      author: "Wilson Hutton",
      heading: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      image: "/images/image-confetti.jpg",
      author: "Claire Robinson",
      heading: " Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ];
  return (
    <div className="bg-off-white xl:min-h-[95vh] 2xl:pl-40 lg:pl-20 pb-16 items-center lg:items-start w-full max-w-full flex flex-col px-6">
      <div className="mt-32 items-start">
        <h1 className="text-4xl text-blue md:flex md:flex-col lg:tracking-[2px] mb-10">
          Latest Articles
        </h1>
        <div className="flex flex-col w-full max-w-7xl lg:flex-row gap-8">
          {articlesData.map((item, index) => (
            <div
              className="flex pb-12 w-full max-w-lg flex-col bg-white gap-8"
              key={index}
            >
              <img
                className="object-cover w-full h-[220px]"
                src={item.image}
                alt={`${item.heading}`}
              />
              <div className="flex flex-col w-full space-y-6 px-2 lg:px-6">
                <span className="text-gray text-sm  whitespace-nowrap">{`By ${item.author}`}</span>
                <h1 className="xl:text-xl hover:text-secondary-color hover:cursor-pointer text-lg text-blue">
                  {item.heading}
                </h1>
                <p className="xl:text-md tracking-tight text-sm text-gray">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
