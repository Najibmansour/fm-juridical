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

routes = [
  { title: "About us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Locations", href: "/locations" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="md:hidden">
        {routes.map(({ title, href }) => (
          <Link key={title} href={href}>
            {title}
          </Link>
        ))}
      </div>
      <div className="hidden">
        <Sheet className="md:hidden">
          <SheetTrigger asChild>
            <MenuIcon className="size-10 text-[#fafafa]" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[100%] border-0 bg-[#9a020200] backdrop-blur"
          >
            <SheetHeader>
              <LOGOIMG className="h-20 w-full" />
            </SheetHeader>
            <div className="grid gap-10 py-10 text-center">
              {navigation.map(({ title, href }, i) => (
                <Link key={i} href={href} className="text-4xl text-[#fafafa]">
                  {title}
                </Link>
              ))}
            </div>
            <SheetFooter>
              {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
