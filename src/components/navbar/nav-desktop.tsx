import { useEffect, useState } from "react";
import PrimaryButton from "../button/primary-button";
import { routes } from "../../routes.util";
import { Logo } from "../logo/logo";

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
    <div className="hidden w-full bg-white z-[20] lg:flex flex-row justify-between items-center md:px-32 gap-6 h-20 sticky top">
      <Logo />
      <div className="flex flex-row gap-6 2xl:gap-12 text-gray">
        {routes.map((route) => (
          <a href={route.href} key={route.title}>
            {route.title}
          </a>
        ))}
      </div>
      <div>
        <PrimaryButton>Request Invite</PrimaryButton>
      </div>
    </div>
  );
};
