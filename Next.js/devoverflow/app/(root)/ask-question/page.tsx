import QuestionForm from "@/components/forms/QuestionForm";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const user = await getUserById(userId);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 text-center">Ask a Question</h1>
      <QuestionForm userId={JSON.stringify(user._id)} />
    </div>
  );
};

export default Page;
