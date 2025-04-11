"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold text-center">PTO Tracker</h1>
        <button
          onClick={() => signIn("azure-ad")}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign in with Microsoft
        </button>
      </div>
    </div>
  );
}
