import { navbarItems } from "@/utils/constants";
import { ChevronDown } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 py-4">
      <div className="flex items-center gap-3">
        <img src="./image/logo.svg" alt="logo" />
        <span className="text-2xl font-semibold">SecureSight</span>
      </div>
      <div className="flex items-center gap-6">
        {navbarItems.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <img src={item.iconLink} alt={item.label} width={30} />
            <span className="capitalize font-semibold text-base">
              {item.label}
            </span>
          </li>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full overflow-hidden bg-gray-200">
          <img
            src="/image/avatar.png"
            alt="avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Mohammed Ajhas</span>
          <span className="mt-[-5px]">ajhas@securesigth.com</span>
        </div>
        <span>
          <ChevronDown />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
