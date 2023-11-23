import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
  className?: string;
}

const RenderTag = ({
  _id,
  name,
  totalQuestions,
  showCount,
  className,
}: Props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge
        className={`font-medium text-[10px] rounded-md border-none px-4 py-2 uppercase bg-[#F4F6F8] text-[#7B8EC8] dark:bg-[#151821] shadow-lg hover:bg-[F4F6F8] ${className}`}
      >
        {name}
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
