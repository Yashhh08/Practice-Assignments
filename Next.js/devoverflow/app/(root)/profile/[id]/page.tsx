import QuestionAnswer from "@/components/tabs/QuestionAnswer";
import { Button } from "@/components/ui/button";
import { getAnswersByUserId } from "@/lib/actions/answer.action";
import { getQuestionsByUserId } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { formatAndDivideNumber, formatDate } from "@/lib/utils";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const user = await getUserById(params.id);
  const questions = await getQuestionsByUserId(params.id);
  const answers = await getAnswersByUserId(params.id);

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* HEAD SECTION */}

        <div className="flex justify-between max-sm:flex-col-reverse max-sm:gap-5">
          <div className="flex gap-5">
            <div>
              <Image
                src={user.picture}
                alt={user.name}
                width={140}
                height={140}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-around">
              <div>
                <p className="text-2xl font-bold">{user.name}</p>
                <p className="text-base">@{user.username}</p>
              </div>
              <div className="flex gap-1 max-sm:mt-4 max-sm:text-start">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calendar"
                  height={20}
                  width={20}
                />
                <p>{`Joined ${formatDate(user.joinedAt)}`}</p>
              </div>
            </div>
          </div>

          <div>
            <Button variant={"secondary"} className="mt-5">
              Edit Profile
            </Button>
          </div>
        </div>

        {/* STATS */}

        <div className="max-sm:flex max-sm:flex-col max-sm:gap-2">
          <p className="text-xl font-semibold mb-3">Stats</p>

          <div className="flex justify-between flex-wrap gap-2 max-sm:flex-col max-sm:gap-5 max-sm:justify-center">
            <div className="flex justify-around text-center items-center h-24 w-48 max-sm:w-auto shadow-xl bg-slate-100 dark:bg-zinc-900 rounded-md">
              <div>
                <p>{formatAndDivideNumber(questions.length)}</p>
                <p>Questions</p>
              </div>
              <div>
                <p>{formatAndDivideNumber(answers.length)}</p>
                <p>Answers</p>
              </div>
            </div>

            <div className="flex justify-around items-center text-center h-24 w-48 max-sm:w-auto shadow-xl bg-slate-100 dark:bg-zinc-900 rounded-md">
              <div>
                <Image
                  src={"/assets/icons/gold-medal.svg"}
                  alt="Gold Badge"
                  height={50}
                  width={35}
                />
              </div>
              <div>
                <p>0</p>
                <p>Gold Badges</p>
              </div>
            </div>

            <div className="flex justify-around items-center text-center h-24 w-48 max-sm:w-auto shadow-xl bg-slate-100 dark:bg-zinc-900 rounded-md">
              <div>
                <Image
                  src={"/assets/icons/silver-medal.svg"}
                  alt="Silver Badge"
                  height={50}
                  width={35}
                />
              </div>
              <div>
                <p>0</p>
                <p>Silver Badges</p>
              </div>
            </div>

            <div className="flex justify-around items-center text-center h-24 w-48 max-sm:w-auto shadow-xl bg-slate-100 dark:bg-zinc-900 rounded-md">
              <div>
                <Image
                  src={"/assets/icons/bronze-medal.svg"}
                  alt="Bronze Badge"
                  height={50}
                  width={35}
                />
              </div>
              <div>
                <p>0</p>
                <p>Bronze Badges</p>
              </div>
            </div>
          </div>
        </div>

        {/* TOP POSTS AND TAGS */}
        <QuestionAnswer questions={questions} answers={answers} />
      </div>
    </>
  );
};

export default Page;
