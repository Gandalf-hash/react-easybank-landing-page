import { routes } from "../../routes.util";

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
        } md:hidden flex flex-col fixed justify-center mx-auto items-center top-20 bg-white w-80 rounded-md z-50 px-4 py-8`}
      >
        {routes.map((route) => (
          <a key={route.href} href={route.href} className="block text-lg py-2">
            {route.title}
          </a>
        ))}
      </div>
    </div>
  );
};
