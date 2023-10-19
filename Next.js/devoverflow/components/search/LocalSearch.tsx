import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface customTypes {
  route: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearch = ({ route, placeholder, otherClasses }: customTypes) => {
  return (
    <div
      className={`w-auto h-10 p-4 ml-1 rounded-[10px] border bg-slate-50 border-slate-300 flex justify-center items-center gap-2.5 dark:bg-gradient-to-b from-gray-900 to-zinc-900 dark:border-slate-800 max-sm:w-52 max-sm:ml-2 max-sm:h-5 flex-auto ${otherClasses}`}
    >
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        height={24}
        width={24}
        className="cursor-pointer max-sm:h-4 max-sm:w-4"
      />
      <Input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-slate-500 dark:text-slate-300 text-base font-thin leading-snug no-focus border-none max-sm:text-xs truncate"
      />
    </div>
  );
};

export default LocalSearch;
