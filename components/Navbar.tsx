import { auth } from "@/auth";
import Title from "@/components/Title";

import Hamburger from "./Hamburger";

const Navbar = async () => {
  return (
    <nav className="flex justify-between items-center py-4 lg:px-20 px-5 fixed inset-0 h-min">
      <Title
        size="md:text-3xl text-2xl"
        size_sub="text-sm font-light md:inline-block hidden"
      />
      <Hamburger />
    </nav>
  );
};

export default Navbar;
