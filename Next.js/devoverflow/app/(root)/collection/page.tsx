import NoResults from "@/components/shared/NoResults";
import QuestionCard from "@/components/cards/QuestionCard";
import LocalSearch from "@/components/search/LocalSearch";
import { QuestionFilters } from "@/constants/filters";
import { getSavedQuestions, getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import Filter from "@/components/shared/Filter";
import Pagination from "@/components/shared/Pagination";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const result = await getSavedQuestions(
    userId,
    // @ts-ignore
    searchParams.q,
    searchParams.filter,
    searchParams.page ? +searchParams.page : 1
  );

  return (
    <>
      <div className="flex flex-col gap-7">
        <h1 className="font-bold text-3xl text-center">Saved Questions</h1>

        <div className="flex justify-between items-center gap-5 max-sm:flex-col">
          <LocalSearch
            route="/collection"
            placeholder="Search questions..."
            otherClasses=""
          />

          <Filter filter={QuestionFilters} />
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          {result.questions.length > 0 ? (
            result.questions.map((question: any) => {
              return (
                <QuestionCard
                  key={question._id}
                  _id={question._id}
                  title={question.title}
                  tags={question.tags}
                  author={question.author}
                  upvotes={question.upvotes.length}
                  views={question.views}
                  answers={question.answers}
                  createdAt={question.createdAt}
                />
              );
            })
          ) : (
            <NoResults
              title="There’s no saved question to show"
              desc="Save your question to collection first..."
              link=""
              linkTitle=""
            />
          )}
        </div>
      </div>

      <div className="">
        <Pagination page={searchParams.page ? +searchParams.page:1} isNext={result.isNext} />
      </div>
    </>
  );
};

export default Page;
