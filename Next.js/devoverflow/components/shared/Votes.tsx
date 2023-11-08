"use client";

import { downvoteAnswer, upvoteAnswer } from "@/lib/actions/answer.action";
import { viewQuestion } from "@/lib/actions/interaction.action";
import {
  downvoteQuestion,
  upvoteQuestion,
} from "@/lib/actions/question.action";
import { saveQuestion } from "@/lib/actions/user.action";
import { formatAndDivideNumber } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

interface Props {
  user: any;
  question?: any;
  answer?: any;
}

const Votes = (props: Props) => {
  const pathname = usePathname();

  const user = JSON.parse(props.user);

  let question: any;

  if (props.question) {
    question = JSON.parse(props.question);
  }

  let answer: any;

  if (props.answer) {
    answer = JSON.parse(props.answer);
  }

  const type = props.question ? "question" : "answer";

  const hasUpvoted =
    type === "question"
      ? question.upvotes.includes(user._id)
      : answer.upvotes.includes(user._id);

  const hasDownvoted =
    type === "question"
      ? question.downvotes.includes(user._id)
      : answer.downvotes.includes(user._id);

  let hasStared: any;

  if (type === "question") {
    hasStared = user.saved.includes(question._id);
  }

  const handleUpvote = async () => {
    try {
      if (type === "question")
        await upvoteQuestion({
          userId: user._id,
          questionId: question._id,
          path: pathname,
        });
      else {
        await upvoteAnswer({
          userId: user._id,
          answerId: answer._id,
          path: pathname,
        });
      }
    } catch (error) {}
  };

  const handleDownvote = async () => {
    try {
      if (type === "question")
        await downvoteQuestion({
          userId: user._id,
          questionId: question._id,
          path: pathname,
        });
      else {
        await downvoteAnswer({
          userId: user._id,
          answerId: answer._id,
          path: pathname,
        });
      }
    } catch (error) {}
  };

  const handleSaveQuestion = async () => {
    try {
      await saveQuestion({
        userId: user._id,
        questionId: question._id,
        path: pathname,
      });
    } catch (error) {}
  };

  useEffect(() => {
    if (question) {
      viewQuestion({
        userId: user ? user._id : undefined,
        questionId: question._id,
      });
    }
  }, [pathname]);

  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex justify-center items-center gap-2">
        <Image
          src={
            hasUpvoted
              ? "/assets/icons/upvoted.svg"
              : "/assets/icons/upvote.svg"
          }
          alt="upvote"
          height={22}
          width={22}
          className="cursor-pointer"
          onClick={handleUpvote}
        />

        <p>
          {type === "question"
            ? formatAndDivideNumber(question.upvotes.length)
            : formatAndDivideNumber(answer.upvotes.length)}
        </p>
        <Image
          src={
            hasDownvoted
              ? "/assets/icons/downvoted.svg"
              : "/assets/icons/downvote.svg"
          }
          alt="downvote"
          height={22}
          width={22}
          className="cursor-pointer"
          onClick={handleDownvote}
        />
        <p>
          {type === "question"
            ? formatAndDivideNumber(question.downvotes.length)
            : formatAndDivideNumber(answer.downvotes.length)}
        </p>
      </div>
      {type === "question" && (
        <Image
          src={
            hasStared
              ? "/assets/icons/star-filled.svg"
              : "/assets/icons/star-red.svg"
          }
          alt="star"
          height={22}
          width={22}
          className="cursor-pointer"
          onClick={handleSaveQuestion}
        />
      )}
    </div>
  );
};

export default Votes;
