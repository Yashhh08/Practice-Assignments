"use client";

import { ModeToggle } from "@/components/ui/toggleMode";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import React from "react";
import GlobalSearch from "../search/GlobalSearch";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed top-0 z-50 p-3 bg-slate-100 dark:bg-zinc-900 w-full md:pl-10">
      <div className="flex justify-center items-center gap-2">
        <Link href={"/"} className="flex justify-center items-center gap-1">
          <Avatar>
            <AvatarImage
              height={23}
              width={23}
              src="/assets/images/site-logo.svg"
            />
            <AvatarFallback>DevFlow</AvatarFallback>
          </Avatar>
          <h2 className="h2-bold font-mono max-sm:hidden">
            Dev<span className="text-primary">Overflow</span>
          </h2>
        </Link>
      </div>

      <GlobalSearch />

      <div className="flex justify-between items-center">
        <ModeToggle />

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={"/sign-in"}>
                  <Avatar>
                    <AvatarImage
                      height={30}
                      width={30}
                      src="/assets/icons/account.svg"
                      className="bg-orange-500 rounded-full"
                    />
                    <AvatarFallback>Sign-In</AvatarFallback>
                  </Avatar>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={5}>
                <p>Sign In</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
