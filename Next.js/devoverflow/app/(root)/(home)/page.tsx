"use client";

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

const questions = [
  {
    _id: "1",
    title: "How to create a React component?",
    tags: [
      { _id: "tag1", title: "React" },
      { _id: "tag2", title: "JavaScript" },
    ],
    author: {
      _id: "user1",
      name: "John Doe",
      picture: "user1.jpg",
    },
    upvotes: 1221300,
    views: 120,
    answers: [],
    createdAt: new Date("2023-10-21"),
  },
  {
    _id: "2",
    title: "What are the best practices for responsive web design?",
    tags: [
      { _id: "tag3", title: "Web Design" },
      { _id: "tag4", title: "CSS" },
    ],
    author: {
      _id: "user2",
      name: "Jane Smith",
      picture: "user2.jpg",
    },
    upvotes: 20,
    views: 150,
    answers: [],
    createdAt: new Date("2023-09-09"),
  },
  {
    _id: "3",
    title: "How to use Redux for state management in React?",
    tags: [
      { _id: "tag1", title: "React" },
      { _id: "tag5", title: "Redux" },
    ],
    author: {
      _id: "user3",
      name: "Alice Johnson",
      picture: "user3.jpg",
    },
    upvotes: 15,
    views: 180,
    answers: [],
    createdAt: new Date("2023-09-08"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-7">
        <div className="flex justify-between items-center gap-2 max-sm:flex-col-reverse">
          <h1 className="text-3xl font-bold">All Questions</h1>

          <Button
            size={"sm"}
            className="bg-gradient-to-r from-orange-500 to-orange-400"
          >
            Ask a Question
          </Button>
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
            questions.map((que) => {
              return <QuestionCard key={que._id} question={que} />;
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
