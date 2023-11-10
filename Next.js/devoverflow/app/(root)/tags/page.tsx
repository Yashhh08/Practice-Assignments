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

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const page = async ({ searchParams }: Props) => {
  // @ts-ignore
  const tags = await getAllTags(searchParams.q);

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

          <Select>
            <SelectTrigger className="w-auto max-sm:h-8">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              {TagFilters.map((item) => {
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
          {tags.length > 0 ? (
            tags.map((tag) => {
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
    </>
  );
};

export default page;
