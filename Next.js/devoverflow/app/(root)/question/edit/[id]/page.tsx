import QuestionForm from "@/components/forms/QuestionForm";
import { getQuestionById } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await getUserById(userId);

  const question = await getQuestionById(params.id);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 text-center">Edit Question</h1>
      <QuestionForm
        userId={JSON.stringify(user._id)}
        type="edit"
        questionDetails={JSON.stringify(question)}
      />
    </div>
  );
};

export default Page;
