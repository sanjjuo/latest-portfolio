import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "./NavLinks";
import MenuIcon from "../svg/MenuIcon";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="w-10 h-10 fill-app-projectBg" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <div>
          <NavLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
