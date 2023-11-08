import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuestionCard from "../cards/QuestionCard";
import Link from "next/link";
import Image from "next/image";
import { getTimeStamp } from "@/lib/utils";
import { Separator } from "../ui/separator";
import NoResults from "../shared/NoResults";
import ParseHTML from "../shared/ParseHTML";

interface Props {
  questions: any;
  answers: any;
}

const QuestionAnswer = (props: Props) => {
  return (
    <Tabs defaultValue="question" className="w-[400px">
      <TabsList>
        <TabsTrigger value="question">Top Questions</TabsTrigger>
        <TabsTrigger value="answer">Answers</TabsTrigger>
      </TabsList>
      <TabsContent value="question">
        <div className="flex flex-col justify-center items-center gap-6">
          {props.questions.length > 0 ? (
            props.questions.map((question: any) => {
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
              desc="Post your any doubts"
              link="/ask-question"
              linkTitle="Ask a Question"
            />
          )}
        </div>
      </TabsContent>
      <TabsContent value="answer">
        <div>
          {props.answers.length > 0 ? (
            props.answers.map((ans: any) => {
              return (
                <div key={ans._id} className="flex flex-col gap-5">
                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-2 max-sm:flex-col">
                      <Link
                        href={`/profile/${ans.author.clerkId}`}
                        className="flex justify-center items-center gap-2"
                      >
                        <Image
                          src={ans.author.picture}
                          alt="author"
                          height={24}
                          width={24}
                          className="rounded-full"
                        />
                        <p className="text-lg font-semibold">
                          {ans.author.name}
                        </p>
                      </Link>
                      <p className="text-xs">{`Answered ${getTimeStamp(
                        ans.createdAt
                      )}`}</p>
                    </div>

                    {/* <Votes
                      user={JSON.stringify(user)}
                      answer={JSON.stringify(ans)}
                    /> */}
                  </div>

                  <ParseHTML data={ans.content} />

                  <Separator className="mb-7" />
                </div>
              );
            })
          ) : (
            <NoResults title="No answers yet..!!" desc="" />
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default QuestionAnswer;
