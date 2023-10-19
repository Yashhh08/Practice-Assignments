"use client";

import { sidebarLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSidebar = () => {
  const pathName = usePathname();

  return (
    <div className="flex h-screen px-10 pt-28 flex-col gap-14 items-start bg-slate-100 dark:bg-neutral-900 max-sm:hidden">
      <section className="flex flex-col gap-4">
        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route ||
            (pathName.includes(item.route) && item.route.length > 1);

          return (
            <Link
              key={item.label}
              href={item.route}
              className={` ${
                isActive
                  ? "bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg font-bold"
                  : ""
              } flex justify-start items-center gap-4 p-4 rounded-md hover:bg-gray-300 dark:hover:bg-secondary`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                height={20}
                width={20}
                className="invert-colors"
              />
              <p className="text-lg max-lg:hidden">{item.label}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default LeftSidebar;
