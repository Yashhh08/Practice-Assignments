import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "../ui/badge";

const tags = [
  { _id: "1", name: "Coding" },
  { _id: "2", name: "Tech" },
  { _id: "3", name: "Server" },
];

const UserCard = ({ user }: { user: any }) => {
  return (
    <Link href={`/profile/${user.clerkId}`}>
      <Card
        key={user._id}
        className="w-[260px] h-[280px] border-none p-7 flex flex-col gap-5 justify-center items-center shadow-md"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.picture} />
            <AvatarFallback>{user.username}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-2 justify-center items-center">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm font-normal">@{user.username}</p>
          </div>
        </div>

        <div className="flex gap-1">
          {tags.length > 0 ? (
            tags.map((tag) => {
              return (
                <div key={tag._id}>
                  <Link href={`/tags`} className="flex justify-between gap-2">
                    <Badge
                      className={`font-medium text-[10px] rounded-md border-none px-4 py-2 uppercase bg-[#F4F6F8] text-[#7B8EC8] dark:bg-[#151821] shadow-lg hover:bg-[F4F6F8]}`}
                    >
                      {tag.name}
                    </Badge>
                  </Link>
                </div>
              );
            })
          ) : (
            <div>No tags</div>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default UserCard;
