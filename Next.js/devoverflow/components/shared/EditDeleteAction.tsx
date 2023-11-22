"use client";
import { deleteAnswer } from "@/lib/actions/answer.action";
import { deleteQuestion } from "@/lib/actions/question.action";
import Image from "next/image";
import { redirect, usePathname, useRouter } from "next/navigation";
import React from "react";
import { toast } from "../ui/use-toast";

interface Props {
  type: string;
  Id: string;
}

const EditDeleteAction = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/question/edit/${JSON.parse(props.Id)}`);
  };

  const handleDelete = async () => {
    if (props.type === "question") {
      await deleteQuestion({
        questionId: JSON.parse(props.Id),
        path: pathname,
      });

      toast({
        variant: "default",
        title: "Question removed successfully!",
      });
    } else {
      await deleteAnswer({
        answerId: JSON.parse(props.Id),
        path: pathname,
      });

      toast({
        variant: "default",
        title: "Answer removed successfully!",
      });
    }
  };

  return (
    <div className="flex gap-2">
      {props.type === "question" && (
        <Image
          src={"/assets/icons/edit.svg"}
          alt="edit"
          height={14}
          width={14}
          className="cursor-pointer"
          onClick={handleEdit}
        />
      )}
      <Image
        src={"/assets/icons/trash.svg"}
        alt="delete"
        height={14}
        width={14}
        className="cursor-pointer"
        onClick={handleDelete}
      />
    </div>
  );
};

export default EditDeleteAction;
