import React from "react";
import { TagFilters } from "@/constants/filters";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import LocalSearch from "@/components/search/LocalSearch";
import TagCard from "@/components/cards/TagCard";
import Link from "next/link";
import { getAllTags } from "@/lib/actions/tag.action";
import NoResults from "@/components/shared/NoResults";
import Filter from "@/components/shared/Filter";
import Pagination from "@/components/shared/Pagination";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const page = async ({ searchParams }: Props) => {
  const result = await getAllTags(
    // @ts-ignore
    searchParams.q,
     searchParams.filter,
    searchParams.page ? +searchParams.page : 1);

  return (
    <>
      <div className="flex flex-col gap-7">
        <h1 className="font-bold text-3xl text-center">Tags</h1>

        <div className="flex justify-between items-center gap-5 max-sm:flex-col">
          <LocalSearch
            route="/tags"
            placeholder="Search by tag name..."
            otherClasses=""
          />

          <Filter filter={TagFilters} />
        </div>

        <div className="flex justify-center items-center gap-3 flex-wrap">
          {result.tags.length > 0 ? (
            result.tags.map((tag) => {
              return <TagCard key={tag._id} tag={tag} />;
            })
          ) : (
            <NoResults
              title="No Tags Found"
              desc="It looks like there are no tags."
              link="/ask-question"
              linkTitle="Ask a question"
            />
          )}
        </div>
      </div>

      <div>
        <Pagination page={searchParams.page ? +searchParams.page:1} isNext={result.isNext}/>
      </div>
    </>
  );
};

export default page;
