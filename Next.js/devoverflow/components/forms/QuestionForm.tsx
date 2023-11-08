"use client";

import React, { useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Editor } from "@tinymce/tinymce-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { createQuestion, updateQuestion } from "@/lib/actions/question.action";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { revalidatePath } from "next/cache";

const formSchema = z.object({
  title: z.string().min(1),
  explanation: z.string().min(1),
  tags: z
    .array(z.string().min(1))
    .min(1, { message: "At least one tag is required" }),
});

interface Props {
  userId: string;
  type?: string;
  questionDetails?: string;
}

const QuestionForm = (props: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const editorRef = useRef(null);
  const { theme } = useTheme();

  const questionDetails =
    props.questionDetails && JSON.parse(props.questionDetails || "{}");

  const AllTags = questionDetails?.tags.map((tag: any) => tag.name);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: questionDetails?.title || "",
      explanation: questionDetails?.content || "",
      tags: AllTags || [],
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      if (props.type !== "edit") {
        await createQuestion({
          title: values.title,
          content: values.explanation,
          tags: values.tags,
          author: JSON.parse(props.userId),
        });
      } else {
        await updateQuestion({
          questionId: questionDetails._id,
          title: values.title,
          content: values.explanation,
        });
      }

      form.reset();

      if (editorRef.current) {
        const editor = editorRef.current as any;
        editor.setContent("");
      }

      router.push("/");
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, field: any) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim().toLowerCase();

      if (tagValue.length > 15) {
        return form.setError("tags", {
          type: "required",
          message: "Max length should not exceed 15 characters",
        });
      }

      if (!field.value.includes(tagValue)) {
        form.setValue("tags", [...field.value, tagValue]);
        tagInput.value = "";
        form.clearErrors("tags");
      } else {
        form.setError("tags", {
          type: "validate",
          message: "Alredy exist",
        });
        form.trigger();
      }
    }
  };

  const removeTagHandler = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);

    form.setValue("tags", newTags);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Title <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Be specific and imagine you’re asking a question to another
                person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Detailed explanation of your problem?{" "}
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) =>
                    //@ts-ignore
                    (editorRef.current = editor)
                  }
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue={questionDetails?.content || ""}
                  init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "codesample",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks |" +
                      "codesample | bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | ",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
                    skin: theme === "dark" ? "oxide-dark" : "oxide",
                    content_css: theme === "dark" ? "dark" : "white",
                  }}
                />
              </FormControl>
              <FormDescription>
                Introduce the problem and expand on what you put in the title.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Tags <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <>
                  <Input
                    disabled={props.type === "edit"}
                    onKeyDown={(e) => handleKeyDown(e, field)}
                  />

                  {field.value.length > 0 && (
                    <div className="flex justify-start items-center gap-2 flex-wrap uppercase">
                      {field.value.map((tag) => {
                        return (
                          <Badge key={tag}>
                            {tag}
                            {props.type !== "edit" && (
                              <Image
                                src={"/assets/icons/close.svg"}
                                alt="close"
                                height={12}
                                width={12}
                                className="ml-1 hover:cursor-pointer"
                                onClick={() => removeTagHandler(tag, field)}
                              />
                            )}
                          </Badge>
                        );
                      })}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription>
                Add up to 3 tags to describe what your question is about. You
                need to press enter to add a tag.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center items-center">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>{props.type === "edit" ? "Editing..." : "Posting..."}</>
            ) : (
              <>{props.type === "edit" ? "Edit Question" : "Ask a Question"}</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;
