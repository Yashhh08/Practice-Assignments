import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const TagCard = ({ tag }: any) => {
  return (
    <Link href={`/tags/${tag._id}`}>
      <Card className="w-[260px] h-[280px] border-none p-7 flex flex-col gap-5 justify-center items-center text-center shadow-md">
        <Button
          variant={"secondary"}
          size={"sm"}
          className="font-bold text-base"
        >
          {tag.name}
        </Button>
        <p className="line-clamp-5 text-sm">
          {tag.description} JavaScript, often abbreviated as JS, is a
          programming language that is one of the core technologies of the World
          Wide Web, alongside HTML and CSS
        </p>
        <p className="text-sm flex justify-center items-center gap-1">
          <span className="text-primary text-lg">{tag.questions.length}</span>{" "}
          Questions
        </p>
      </Card>
    </Link>
  );
};

export default TagCard;
