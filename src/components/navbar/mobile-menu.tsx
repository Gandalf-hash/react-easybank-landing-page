import { routes } from "./routes.util";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden flex flex-col  fixed justify-center mx-auto items-center top-20 bg-white w-[88%] rounded-xl z-50 p-4`}
      >
        {routes.map((route) => (
          <a
            key={route.href}
            href={route.href}
            className="block text-gray py-2"
          >
            {route.title}
          </a>
        ))}
      </div>
    </div>
  );
};
