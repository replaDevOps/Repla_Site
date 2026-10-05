"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";

import { suppressBenignStudioSseErrors } from "@/lib/studio/suppress-benign-sse-errors";
import { createStudioConfig } from "@/sanity/create-studio-config";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen items-center justify-center bg-[#101112] text-sm text-white/70">
        Loading Studio…
      </div>
    ),
  },
);

export default function StudioClient() {
  useEffect(() => suppressBenignStudioSseErrors(), []);

  const config = useMemo(() => createStudioConfig(), []);

  return <NextStudio config={config} />;
}
