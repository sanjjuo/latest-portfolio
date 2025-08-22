import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "../common/Logo/Logo";
import MenuIcon from "../svg/MenuIcon";
import NavLinks from "./NavLinks";
import SocialMediaIcons from "../common/SocialMediaIcons/SocialMediaIcons";
import Link from "next/link";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="w-10 h-10 fill-app-projectBg" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-start">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-20 space-y-10">
          <NavLinks />
          <div>
            <h1 className="uppercase font-extrabold text-xs">
              let&apos;s create together
            </h1>
            <Link href="mailto:sanjeedofficial22@gmail.com">
              <p className="text-2xl font-heading">
                sanjeedofficial22@gmail.com
              </p>
            </Link>
          </div>
          <SocialMediaIcons placement="mobile-sidebar" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
