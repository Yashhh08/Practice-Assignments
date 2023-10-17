import { Button } from "@/components/ui/button";
import { popularTags, topQuestions } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import RenderTag from "../RenderTag";

const RightSidebar = () => {
  return (
    <div className="flex gap-10 h-screen overflow-auto w-[330px] px-5 pt-28 pb-5 flex-col bg-slate-100 dark:bg-neutral-900 max-xl:hidden max-md:hidden">
      <div className="flex flex-col gap-5">
        <p className="h3-bold">Top Questions</p>

        {topQuestions.map((q) => {
          return (
            <div key={q} className="flex justify-between items-center gap-3">
              <p>{q}</p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="arrow"
                height={20}
                width={20}
                className="invert dark:invert-0"
              />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-5">
        <p className="h3-bold">Popular Tags</p>

        {popularTags.map((tag) => {
          return (
            <div key={tag.tag} className="flex justify-between items-center">
              <Button
                variant={"secondary"}
                size={"sm"}
                className="uppercase bg-gradient-to-r from-orange-500 to-orange-400 dark:!bg-[#151821] text-black"
              >
                {tag.tag}
              </Button>
              <div>{tag.number}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightSidebar;
