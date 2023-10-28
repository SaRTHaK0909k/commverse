"use client";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Heart, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { log } from "console";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const Navigation = [
    { _id: 910, title: "Home", href: "/" },
    { _id: 911, title: "Phones", href: "/Phones" },
    { _id: 912, title: "Phone cases", href: "/phonecases" },
    { _id: 913, title: "Watches", href: "/watches" },
    { _id: 914, title: "Accessories", href: "/accessories" },
  ];

  return (
    <div className="w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0">
        <Logo />
        <ul className=" hidden md:flex items-center gap-5 text-sm uppercase font-semibold space-x-4">
          {Navigation.map((item) => (
            <Link href={item?.href}>
              <li
                className={`hover:text-black cursor-pointer duration-200 relative overflow-hidden group ${
                  item.href === pathname && "text-designColor"
                }`}
              >
                {item?.title}
                <span
                  className={`absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ${
                    item.href === pathname && "translate-x-0 bg-designColor"
                  }`}
                />
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex space-x-5 items-center">
        <Link
            href={"/wishlist"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <Heart className="w-7 h-7" />
            <span className="absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white">
              0
            </span>
          </Link>

          <Link
            href={"/shoppingcart"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <ShoppingBagIcon className="w-7 h-7" />
            <span className="absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white">
              0
            </span>
          </Link>
          

        </div>
      </div>
    </div>
  );
};

export default Navbar;
