import NoResults from "@/components/shared/NoResults";
import QuestionCard from "@/components/cards/QuestionCard";
import LocalSearch from "@/components/search/LocalSearch";
import { getTagById } from "@/lib/actions/tag.action";

import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const tag = await getTagById(params.id);

  const questions = tag.questions;

  return (
    <>
      <div className="flex flex-col gap-7">
        <h1 className="font-bold text-3xl text-center uppercase">
          {tag.tagName}
        </h1>

        <div className="flex justify-between items-center gap-5 max-sm:flex-col">
          <LocalSearch
            route="/"
            placeholder="Search tag questions..."
            otherClasses=""
          />
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
              title="There’s no tag question to show"
              desc=""
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
