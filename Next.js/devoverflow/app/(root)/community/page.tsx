import React from "react";
import LocalSearch from "@/components/search/LocalSearch";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";

import Link from "next/link";
import UserCard from "@/components/cards/UserCard";
import Filter from "@/components/shared/Filter";
import Pagination from "@/components/shared/Pagination";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const result = await getAllUsers(
    // @ts-ignore
    searchParams.q,
    searchParams.filter,
    searchParams.page? +searchParams.page : 1);

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

          <Filter filter={UserFilters} />
        </div>

        <div className="flex justify-center items-center gap-3 flex-wrap">
          {result.users.length > 0 ? (
            result.users.map((user) => {
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

      <div>
        <Pagination page={searchParams.page? +searchParams.page : 1} isNext={result.isNext}/>
      </div>
    </>
  );
};

export default Page;
