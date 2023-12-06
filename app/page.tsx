"use client";

import { POST } from "@/app/global/api-actions";
import { Title } from "@tremor/react";
import { Suspense } from "react";
import useSWR from "swr";

export default function IndexPage() {
  const { data } = useSWR("/api/create-link-token", POST);

  console.log("🚀 ~ file: page.tsx:13 ~ data:", data);

  return (
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
          <Title>Plaid Link</Title>
          {JSON.stringify(data, null, 2)}
        </main>
      </Suspense>
  );
}
