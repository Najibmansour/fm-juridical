import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { List } from "@phosphor-icons/react";

const routes = [
  { title: "About us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Locations", href: "/locations" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="md:hidden">
        {routes.map(({ title, href }) => (
          <Link key={title} href={href}>
            {title}
          </Link>
        ))}
      </nav>
      <div className="hidden">
        <Sheet className="md:hidden">
          <SheetTrigger asChild>
            {/* <List className="size-10 text-[#fafafa]" /> */}
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[100%] border-0 bg-[#9a020200] backdrop-blur"
          >
            <div className="grid gap-10 py-10 text-center">
              {routes.map(({ title, href }, i) => (
                <Link key={i} href={href} className="text-4xl text-[#fafafa]">
                  {title}
                </Link>
              ))}
            </div>
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
