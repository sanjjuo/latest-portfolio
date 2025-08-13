"use client";
import { cn } from "@/lib/utils";
import AppButton from "../common/AppButton/AppButton";
import { useIsScrolledHook } from "../hooks/isScrolledHook";
import MobileSidebar from "./MobileSidebar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { isScrolled } = useIsScrolledHook();
  return (
    <div className="flex items-center justify-between h-20 app-width px-5">
      <p
        className={cn(
          isScrolled ? "text-white" : "text-app-text",
          "font-extrabold text-3xl font-heading"
        )}
      >
        sanjeed.
      </p>
      <div className="hidden lg:block">
        <NavLinks />
      </div>
      <div className="hidden lg:block">
        <AppButton name="Talk to me" href="" style="navbar-btn" />
      </div>
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
    </div>
  );
};

export default Navbar;
