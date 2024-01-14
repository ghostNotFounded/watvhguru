import { Navlinks } from "@/constants/constants";

import { Lora } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const font = Lora({
  subsets: ["latin"],
  weight: "400",
});

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed lg:p-20 py-20 px-5 top-0 bg-black/70 h-screen md:w-max w-[100%] duration-300 ease-out ${
        open ? "right-0" : "md:-right-[35%] -right-[100%]"
      }`}
    >
      <div
        className={`flex flex-col md:items-end items-center sm:space-y-20 space-y-16 lg:text-6xl text-4xl ${font.className}`}
      >
        {Navlinks.map((ele) => (
          <div
            key={ele.Name}
            className="hover:italic select-none group"
            onClick={() => setOpen(!open)}
          >
            <Link href={ele.Link} id={ele.Name}>
              <span className={pathname === ele.Link ? "text-ocean" : ""}>
                {ele.Name}
              </span>
            </Link>
            <hr className="w-0 group-hover:w-full mt-2 duration-200 ease-out" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
