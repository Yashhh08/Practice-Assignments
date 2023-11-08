import NoResults from "@/components/shared/NoResults";
import QuestionCard from "@/components/cards/QuestionCard";
import LocalSearch from "@/components/search/LocalSearch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QuestionFilters } from "@/constants/filters";
import { getSavedQuestions, getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const questions = await getSavedQuestions(userId);

  return (
    <>
      <div className="flex flex-col gap-7">
        <h1 className="font-bold text-3xl text-center">Saved Questions</h1>

        <div className="flex justify-between items-center gap-5 max-sm:flex-col">
          <LocalSearch
            route="/"
            placeholder="Search questions..."
            otherClasses=""
          />

          <Select>
            <SelectTrigger className="w-auto max-sm:h-8">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              {QuestionFilters.map((item) => {
                return (
                  <SelectItem key={item.name} value={item.value}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          {questions.length > 0 ? (
            questions.map((question: any) => {
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
    </>
  );
};

export default Page;
