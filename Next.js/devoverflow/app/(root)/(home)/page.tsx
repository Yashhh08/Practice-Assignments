import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";

import QuestionCard from "@/components/cards/QuestionCard";
import Link from "next/link";
import { getQuestions } from "@/lib/actions/question.action";
import NoResults from "@/components/shared/NoResults";
import Filter from "@/components/shared/Filter";

interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: SearchParamsProps) {
  // @ts-ignore
  const questions = await getQuestions(searchParams.q, searchParams.filter);

  return (
    <>
      <div className="flex flex-col gap-7">
        <div className="flex justify-between items-center gap-2 max-sm:flex-col-reverse">
          <h1 className="text-3xl font-bold">All Questions</h1>

          <Link href={"/ask-question"}>
            <Button
              size={"sm"}
              className="bg-gradient-to-r from-orange-500 to-orange-400"
            >
              Ask a Question
            </Button>
          </Link>
        </div>

        <div className="flex justify-between items-center gap-5 max-sm:flex-col">
          <LocalSearch
            route="/"
            placeholder="Search for questions"
            otherClasses=""
          />

          <Filter filter={HomePageFilters} />
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          {questions.length > 0 ? (
            questions.map((question) => {
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
              title="There’s no question to show"
              desc=" Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. our query could be the next big thing others learn from. Get
            involved! 💡"
              link="/ask-question"
              linkTitle="Ask a Question"
            />
          )}
        </div>
      </div>
    </>
  );
}
