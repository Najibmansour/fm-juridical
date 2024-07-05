"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Navmenu = ({ routes }) => {
  return (
    <div className="md:hidden">
      <Sheet className="md:hidden">
        <SheetTrigger asChild>
          <MenuIcon className="size-10 text-[#fafafa]" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[100%] border-0 bg-[#9a020200] backdrop-blur"
        >
          <SheetHeader>
            <p>asdadas</p>
          </SheetHeader>
          <div className="grid gap-10 py-10 text-center">
            {routes.map(({ title, href }, i) => (
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
  );
};

export default Navmenu;
