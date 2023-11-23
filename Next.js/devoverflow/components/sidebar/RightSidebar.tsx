import { Button } from "@/components/ui/button";
import { popularTags } from "@/constants/constants";
import { getTopQuestions } from "@/lib/actions/question.action";
import { getTopTags } from "@/lib/actions/tag.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSidebar = async () => {
  const topQuestions = await getTopQuestions();

  const topTags = await getTopTags();

  return (
    <div className="flex gap-10 h-screen overflow-auto w-[330px] px-5 pt-28 pb-5 flex-col bg-slate-100 dark:bg-neutral-900 max-xl:hidden max-md:hidden">
      <div className="flex flex-col gap-5">
        <p className="h3-bold">Top Questions</p>

        {topQuestions.map((que) => {
          return (
            <Link
              href={`/question/${que._id}`}
              key={que._id}
              className="flex justify-between items-center gap-3"
            >
              <p className="line-clamp-2">{que.title}</p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="arrow"
                height={20}
                width={20}
                className="invert dark:invert-0"
              />
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        <p className="h3-bold">Popular Tags</p>

        {topTags.map((tag) => {
          return (
            <Link
              href={`/tags/${tag._id}`}
              key={tag._id}
              className="flex justify-between items-center"
            >
              <Button
                variant={"secondary"}
                size={"sm"}
                className="uppercase bg-gradient-to-r from-orange-500 to-orange-400 dark:!bg-[#151821] text-black"
              >
                {tag.name}
              </Button>
              <div>{tag.numberOfQuestions}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RightSidebar;
