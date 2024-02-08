import Link from "next/link";
import { NavMenu } from "./nav-menu";

export const Navbar = () => {
  return (
    <nav className="flex items-center py-2 border-b mb-6 px-3 sm:px-20 md:px-32 sm:justify-between">
      <Link className="text-2xl sm:text-4xl sm:max-w-xl font-bold text-transparent bg-gradient-to-tl from-primary/80 to-white bg-clip-text hidden sm:flex justify-start" href="/">
          Home
        </Link>
      <NavMenu/>
    </nav>
  );
};
