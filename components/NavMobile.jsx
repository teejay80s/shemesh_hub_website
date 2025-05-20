import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";

import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";
import { Link as ScrollLink } from "react-scroll";
import React from "react";

const links = [
  {
    name: "home",
    path: "home",
  },

  {
    name: "about",
    path: "about",
  },
  {
    name: "services",
    path: "services",
  },
  {
    name: "projects",
    path: "projects",
  },
  {
    name: "contact",
    path: "contact",
  },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-primary flex items-center justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-primary border-none text-white">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col gap-8 mt-10 justify-center text-center">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] "
                >
                  <ScrollLink
                    to={link.path}
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="cursor-pointer"
                    activeClass="text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          <Socials containerStyles="text-white text-xl flex gap-6" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
