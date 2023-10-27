import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 text-center">Ask a Question</h1>
      <QuestionForm />
    </div>
  );
};

export default page;
