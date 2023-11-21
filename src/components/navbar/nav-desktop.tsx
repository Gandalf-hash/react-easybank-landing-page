import { useEffect, useState } from "react";
import PrimaryButton from "../button/primary-button";
import { routes } from "../../routes.util";
import { Logo } from "../frames/frames";

export const NavDesktop = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hidden px-6 lg:px-20 2xl:px-40 w-full bg-white z-[20] md:flex flex-row justify-between items-center  gap-4 h-20 sticky top">
      <Logo />
      <div className="flex flex-row gap-6 2xl:gap-12 text-gray">
        {routes.map((route) => (
          <a href={route.href} key={route.title}>
            {route.title}
          </a>
        ))}
      </div>
      <div>
        <PrimaryButton></PrimaryButton>
      </div>
    </div>
  );
};
