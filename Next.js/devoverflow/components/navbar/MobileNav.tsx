import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathName = usePathname();

  return (
    <section className="flex flex-col gap-3 pt-12 w-auto">
      {sidebarLinks.map((item) => {
        const isActive =
          pathName === item.route ||
          (pathName.includes(item.route) && item.route.length > 1);

        return (
          <SheetClose key={item.label} asChild>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "bg-gradient-to-r from-orange-500 to-orange-300 rounded-lg font-bold"
                  : ""
              } flex justify-start items-center gap-4 p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                height={20}
                width={20}
                className="invert-colors"
              />
              <p>{item.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/assets/icons/hamburger.svg"}
          height={24}
          width={24}
          alt="Menu"
          className="ml-1 no-focus invert-colors md:hidden"
        />
      </SheetTrigger>
      <SheetContent side={"left"} className="h-full overflow-auto border-none">
        <SheetClose asChild>
          <Link href={"/"} className="flex items-center gap-1 pt-2">
            <Image
              src={"/assets/images/site-logo.svg"}
              alt="Devflow"
              height={28}
              width={28}
            />
            <h2 className="h2-bold font-spaceGrotesk">
              Dev<span className="text-primary">Overflow</span>
            </h2>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <NavContent />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
