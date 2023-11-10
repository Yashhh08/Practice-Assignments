import React from "react";
import LocalSearch from "@/components/search/LocalSearch";
import { UserFilters } from "@/constants/filters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllUsers } from "@/lib/actions/user.action";

import Link from "next/link";
import UserCard from "@/components/cards/UserCard";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  // @ts-ignore
  const users = await getAllUsers(searchParams.q);

  return (
    <>
      <div className="flex flex-col gap-7">
        <h1 className="font-bold text-3xl text-center">All Users</h1>

        <div className="flex justify-between items-center gap-5 max-sm:flex-col">
          <LocalSearch
            route="/community"
            placeholder="Search amazing minds here..."
            otherClasses=""
          />

          <Select>
            <SelectTrigger className="w-auto max-sm:h-8">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              {UserFilters.map((item) => {
                return (
                  <SelectItem key={item.name} value={item.value}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-center items-center gap-3 flex-wrap">
          {users.length > 0 ? (
            users.map((user) => {
              return <UserCard key={user._id} user={user} />;
            })
          ) : (
            <div className="mx-auto max-w-4xl text-center">
              <p>No users yet..!!</p>
              <Link href="/sign-up" className="mt-2 font-bold text-primary">
                Join to be the first!
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
