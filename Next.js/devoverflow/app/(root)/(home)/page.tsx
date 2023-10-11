"use client";

import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <h1>NEXT.JS 13</h1>

      <UserButton afterSignOutUrl="/" />

      <h2>
        Hello {user?.firstName ? user.firstName : "user"}, Welcome to NEXT.JS
      </h2>
    </div>
  );
}
