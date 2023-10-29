import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NoResults from "@/components/NoResults";
import QuestionCard from "@/components/cards/QuestionCard";
import Link from "next/link";
import { getQuestions } from "@/lib/actions/question.action";

export default async function Home() {
  const questions = await getQuestions();

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

          <Select>
            <SelectTrigger className="w-auto max-sm:h-8">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              {HomePageFilters.map((item) => {
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
            questions.map((question) => {
              return (
                <QuestionCard
                  key={question._id}
                  _id={question._id}
                  title={question.title}
                  tags={question.tags}
                  author={question.author}
                  upvotes={question.upvotes}
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
              link=""
              linkTitle="Ask a Question"
            />
          )}
        </div>
      </div>
    </>
  );
}
