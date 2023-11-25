import React from "react";

import { Card } from "@/components/ui/card";
import RenderTag from "../ui/RenderTag";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { getTimeStamp, formatAndDivideNumber } from "../../lib/utils";
import { auth } from "@clerk/nextjs";
import EditDeleteAction from "../shared/EditDeleteAction";

interface QuestionProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
    clerkId: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

interface Props {
  question: QuestionProps;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) => {
  const { userId } = auth();

  let showEdit = false;

  if (userId === author.clerkId) {
    showEdit = true;
  }

  return (
    <Card className="w-full py-9 px-[45px] border-none bg-slate-100 dark:bg-zinc-900">
      <div className="flex justify-between max-sm:justify-between max-sm:flex-col-reverse max-sm:gap-5">
        <Link href={`/question/${_id}`}>
          <h3 className="text-xl font-semibold line-clamp-1 max-sm:line-clamp-2">
            {title}
          </h3>
        </Link>
        {showEdit && (
          <EditDeleteAction type="question" Id={JSON.stringify(_id)} />
        )}
      </div>

      <div className="flex gap-2 mt-[14px] mb-[24px] flex-wrap">
        {tags.map((tag) => {
          return <RenderTag key={tag._id} _id={tag._id} name={tag.name} />;
        })}
      </div>

      <div className="flex justify-between items-center text-center flex-wrap gap-5">
        <div className="flex items-center gap-2 flex-wrap">
          <Link href={`/profile/${author.clerkId}`}>
            <div className="flex justify-center items-center gap-1">
              <Avatar className="w-5 h-5">
                <AvatarImage src={author.picture} alt="user" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm font-medium">{author.name}</p>
            </div>
          </Link>
          <p className="text-xs font-normal">
            {`asked ${getTimeStamp(createdAt)}`}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex gap-1">
            <Image
              src={"/assets/icons/like.svg"}
              width={16}
              height={16}
              alt="like"
            />
            <p className="text-xs font-medium">{`${formatAndDivideNumber(
              upvotes
            )} Votes`}</p>
          </div>
          <div className="flex gap-1">
            <Image
              src={"/assets/icons/message.svg"}
              width={16}
              height={16}
              alt="msg"
            />
            <p className="text-xs font-medium">
              {`${formatAndDivideNumber(answers.length)} Answers`}
            </p>
          </div>
          <div className="flex gap-1">
            <Image
              src={"/assets/icons/eye.svg"}
              width={16}
              height={16}
              alt="eye"
            />
            <p className="text-xs font-medium">{`${formatAndDivideNumber(
              views
            )} Views`}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;
